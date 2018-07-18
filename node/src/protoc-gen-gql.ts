import streamToPromise from "stream-to-promise";
import pluginPb from "google-protobuf/google/protobuf/compiler/plugin_pb";
import descriptorPb from "google-protobuf/google/protobuf/descriptor";
import {
  DescriptorProto,
  FieldDescriptorProto
} from "../node_modules/@types/google-protobuf/google/protobuf/descriptor_pb";

function tou8(buf: any) {
  if (!buf) return undefined;
  if (buf.constructor.name === "Uint8Array" || buf.constructor === Uint8Array) {
    return buf;
  }
  if (typeof buf === "string") buf = Buffer.from(buf);
  var a = new Uint8Array(buf.length);
  for (var i = 0; i < buf.length; i++) a[i] = buf[i];
  return a;
}

const CodeGeneratorRequest = (stdin = process.stdin) =>
  streamToPromise(stdin).then(buffer =>
    pluginPb.CodeGeneratorRequest.deserializeBinary(tou8(buffer))
  ) as Promise<pluginPb.CodeGeneratorRequest>;

const CodeGeneratorResponse = (stdout = process.stdout) => files => {
  const out = new pluginPb.CodeGeneratorResponse();
  files.forEach((f, i) => {
    const file = new pluginPb.CodeGeneratorResponse.File();
    f.name && file.setName(f.name);
    f.content && file.setContent(f.content);
    f.insertion_point && file.setInsertionPoint(f.insertion_point);
    out.addFile(file);
  });
  stdout.write(Buffer.from(out.serializeBinary()));
};

const CodeGeneratorResponseError = (stdout = process.stdout) => err => {
  const out = new pluginPb.CodeGeneratorResponse();
  out.setError(err.toString());
  stdout.write(Buffer.from(out.serializeBinary()));
};

function fieldToName(field: FieldDescriptorProto.AsObject): string {
  switch (field.type) {
    case 1: // DOUBLE
    case 2: // FLOAD
    case 6: // FIXED64
    case 7: // FIXED32
    case 15: // SFIXED32
    case 16: // SFIXED64
      return "Float";
    case 3: // INT64
    case 4: // UINT64
    case 5: // INT32
    case 13: // UINT32
    case 17: // SINT32
    case 18: // SINT64
      return "Number";
    case 8: // STRING
    case 12: // BYTES
      return "Boolean";
    case 9:
      return "String";
    case 10:
      throw new Error("Group is not supported");
    case 11:
      const splitted = field.typeName!.split(".");
      return splitted[splitted.length - 1];
    case 13: // ENUM
      return "Enum";
    default:
      throw new Error(
        `Not supported type: ${field}. see: https://github.com/google/protobuf/blob/master/src/google/protobuf/descriptor.proto`
      );
  }
}

function isRepeatedField(field: FieldDescriptorProto.AsObject) {
  return field.label === 3;
}

CodeGeneratorRequest()
  .then(r => {
    const req = r.toObject();
    return req.protoFileList.filter(
      p => req.fileToGenerateList.indexOf(p.name!) !== -1
    );
  })
  .then(protos =>
    protos.map(proto => {
      const typeStrs: string[] = [];
      proto.messageTypeList.forEach(message => {
        let typeStr = "";
        typeStr += `type ${message.name} {\n`;
        message.fieldList.forEach(field => {
          let fieldName = fieldToName(field);
          if (isRepeatedField(field)) {
            fieldName = `[${fieldName}]!`;
          }
          typeStr += `  ${field.name}: ${fieldName}\n`;
        });
        typeStr += "}";
        typeStrs.push(typeStr);
      });
      return {
        name: `${(proto as any).pb_package}.graphql`,
        content: typeStrs.join("\n\n")
      };
    })
  )
  .then(CodeGeneratorResponse())
  .catch(CodeGeneratorResponseError());
