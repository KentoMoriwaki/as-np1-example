import streamToPromise from "stream-to-promise";
import pluginPb from "google-protobuf/google/protobuf/compiler/plugin_pb";
import descriptorPb from "google-protobuf/google/protobuf/descriptor";
import { DescriptorProto } from "../node_modules/@types/google-protobuf/google/protobuf/descriptor_pb";

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

CodeGeneratorRequest()
  .then(r => {
    const req = r.toObject();
    return req.protoFileList.filter(
      p => req.fileToGenerateList.indexOf(p.name!) !== -1
    );
  })
  .then(protos =>
    protos.map(proto => {
      return {
        name: `${(proto as any).pb_package}.hello`,
        content: JSON.stringify(proto)
      };
    })
  )
  .then(CodeGeneratorResponse())
  .catch(CodeGeneratorResponseError());
