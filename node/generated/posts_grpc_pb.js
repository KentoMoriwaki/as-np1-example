// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var posts_pb = require('./posts_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_asnp_PostsListRequest(arg) {
  if (!(arg instanceof posts_pb.PostsListRequest)) {
    throw new Error('Expected argument of type asnp.PostsListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asnp_PostsListRequest(buffer_arg) {
  return posts_pb.PostsListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asnp_PostsListResponse(arg) {
  if (!(arg instanceof posts_pb.PostsListResponse)) {
    throw new Error('Expected argument of type asnp.PostsListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_asnp_PostsListResponse(buffer_arg) {
  return posts_pb.PostsListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostsService = exports.PostsService = {
  list: {
    path: '/asnp.Posts/List',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.PostsListRequest,
    responseType: posts_pb.PostsListResponse,
    requestSerialize: serialize_asnp_PostsListRequest,
    requestDeserialize: deserialize_asnp_PostsListRequest,
    responseSerialize: serialize_asnp_PostsListResponse,
    responseDeserialize: deserialize_asnp_PostsListResponse,
  },
};

exports.PostsClient = grpc.makeGenericClientConstructor(PostsService);
