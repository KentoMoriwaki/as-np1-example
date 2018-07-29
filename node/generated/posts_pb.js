/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.exportSymbol('proto.asnp.Post', null, global);
goog.exportSymbol('proto.asnp.PostsListRequest', null, global);
goog.exportSymbol('proto.asnp.PostsListResponse', null, global);
goog.exportSymbol('proto.asnp.Profile', null, global);
goog.exportSymbol('proto.asnp.User', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asnp.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asnp.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asnp.Profile.displayName = 'proto.asnp.Profile';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asnp.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.asnp.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asnp.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    introduction: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asnp.Profile}
 */
proto.asnp.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asnp.Profile;
  return proto.asnp.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asnp.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asnp.Profile}
 */
proto.asnp.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntroduction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asnp.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asnp.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asnp.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIntroduction();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.asnp.Profile.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.asnp.Profile.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string introduction = 2;
 * @return {string}
 */
proto.asnp.Profile.prototype.getIntroduction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asnp.Profile.prototype.setIntroduction = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asnp.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asnp.User.repeatedFields_, null);
};
goog.inherits(proto.asnp.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asnp.User.displayName = 'proto.asnp.User';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asnp.User.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asnp.User.prototype.toObject = function(opt_includeInstance) {
  return proto.asnp.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asnp.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profile: (f = msg.getProfile()) && proto.asnp.Profile.toObject(includeInstance, f),
    postsList: jspb.Message.toObjectList(msg.getPostsList(),
    proto.asnp.Post.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asnp.User}
 */
proto.asnp.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asnp.User;
  return proto.asnp.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asnp.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asnp.User}
 */
proto.asnp.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.asnp.Profile;
      reader.readMessage(value,proto.asnp.Profile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    case 4:
      var value = new proto.asnp.Post;
      reader.readMessage(value,proto.asnp.Post.deserializeBinaryFromReader);
      msg.addPosts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asnp.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asnp.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asnp.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.asnp.Profile.serializeBinaryToWriter
    );
  }
  f = message.getPostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.asnp.Post.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.asnp.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.asnp.User.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.asnp.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asnp.User.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Profile profile = 3;
 * @return {?proto.asnp.Profile}
 */
proto.asnp.User.prototype.getProfile = function() {
  return /** @type{?proto.asnp.Profile} */ (
    jspb.Message.getWrapperField(this, proto.asnp.Profile, 3));
};


/** @param {?proto.asnp.Profile|undefined} value */
proto.asnp.User.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.asnp.User.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asnp.User.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Post posts = 4;
 * @return {!Array.<!proto.asnp.Post>}
 */
proto.asnp.User.prototype.getPostsList = function() {
  return /** @type{!Array.<!proto.asnp.Post>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asnp.Post, 4));
};


/** @param {!Array.<!proto.asnp.Post>} value */
proto.asnp.User.prototype.setPostsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.asnp.Post=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asnp.Post}
 */
proto.asnp.User.prototype.addPosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.asnp.Post, opt_index);
};


proto.asnp.User.prototype.clearPostsList = function() {
  this.setPostsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asnp.Post = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asnp.Post, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asnp.Post.displayName = 'proto.asnp.Post';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asnp.Post.prototype.toObject = function(opt_includeInstance) {
  return proto.asnp.Post.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asnp.Post} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.Post.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: (f = msg.getUser()) && proto.asnp.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asnp.Post}
 */
proto.asnp.Post.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asnp.Post;
  return proto.asnp.Post.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asnp.Post} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asnp.Post}
 */
proto.asnp.Post.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.asnp.User;
      reader.readMessage(value,proto.asnp.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asnp.Post.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asnp.Post.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asnp.Post} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.Post.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.asnp.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.asnp.Post.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.asnp.Post.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.asnp.Post.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asnp.Post.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.asnp.Post.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.asnp.Post.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional User user = 4;
 * @return {?proto.asnp.User}
 */
proto.asnp.Post.prototype.getUser = function() {
  return /** @type{?proto.asnp.User} */ (
    jspb.Message.getWrapperField(this, proto.asnp.User, 4));
};


/** @param {?proto.asnp.User|undefined} value */
proto.asnp.Post.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.asnp.Post.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asnp.Post.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asnp.PostsListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.asnp.PostsListResponse.repeatedFields_, null);
};
goog.inherits(proto.asnp.PostsListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asnp.PostsListResponse.displayName = 'proto.asnp.PostsListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.asnp.PostsListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asnp.PostsListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.asnp.PostsListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asnp.PostsListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.PostsListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    postsList: jspb.Message.toObjectList(msg.getPostsList(),
    proto.asnp.Post.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asnp.PostsListResponse}
 */
proto.asnp.PostsListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asnp.PostsListResponse;
  return proto.asnp.PostsListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asnp.PostsListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asnp.PostsListResponse}
 */
proto.asnp.PostsListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.asnp.Post;
      reader.readMessage(value,proto.asnp.Post.deserializeBinaryFromReader);
      msg.addPosts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asnp.PostsListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asnp.PostsListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asnp.PostsListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.PostsListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.asnp.Post.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Post posts = 1;
 * @return {!Array.<!proto.asnp.Post>}
 */
proto.asnp.PostsListResponse.prototype.getPostsList = function() {
  return /** @type{!Array.<!proto.asnp.Post>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.asnp.Post, 1));
};


/** @param {!Array.<!proto.asnp.Post>} value */
proto.asnp.PostsListResponse.prototype.setPostsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.asnp.Post=} opt_value
 * @param {number=} opt_index
 * @return {!proto.asnp.Post}
 */
proto.asnp.PostsListResponse.prototype.addPosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.asnp.Post, opt_index);
};


proto.asnp.PostsListResponse.prototype.clearPostsList = function() {
  this.setPostsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.asnp.PostsListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.asnp.PostsListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.asnp.PostsListRequest.displayName = 'proto.asnp.PostsListRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.asnp.PostsListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.asnp.PostsListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.asnp.PostsListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.PostsListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fields: (f = msg.getFields()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.asnp.PostsListRequest}
 */
proto.asnp.PostsListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.asnp.PostsListRequest;
  return proto.asnp.PostsListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.asnp.PostsListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.asnp.PostsListRequest}
 */
proto.asnp.PostsListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFields(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.asnp.PostsListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.asnp.PostsListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.asnp.PostsListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.asnp.PostsListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFields();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.FieldMask fields = 1;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.asnp.PostsListRequest.prototype.getFields = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 1));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.asnp.PostsListRequest.prototype.setFields = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.asnp.PostsListRequest.prototype.clearFields = function() {
  this.setFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.asnp.PostsListRequest.prototype.hasFields = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.asnp.PostsListRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.asnp.PostsListRequest.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


goog.object.extend(exports, proto.asnp);