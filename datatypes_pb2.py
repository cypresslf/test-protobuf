# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: datatypes.proto
# Protobuf Python Version: 5.29.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    2,
    '',
    'datatypes.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0f\x64\x61tatypes.proto\",\n\rSimpleMessage\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x02 \x01(\t\"%\n\x12SimpleMessageClone\x12\x0f\n\x07\x63ontent\x18\x01 \x01(\t\"\x1c\n\x0bTemperature\x12\r\n\x05value\x18\x01 \x01(\x02\"\xe9\x03\n\x0cOopsAllTypes\x12\x12\n\x05int32\x18\x04 \x01(\x05H\x00\x88\x01\x01\x12\x12\n\x05int64\x18\x05 \x01(\x03H\x01\x88\x01\x01\x12\x13\n\x06uint32\x18\x06 \x01(\rH\x02\x88\x01\x01\x12\x13\n\x06uint64\x18\x07 \x01(\x04H\x03\x88\x01\x01\x12\x13\n\x06sint32\x18\x08 \x01(\x11H\x04\x88\x01\x01\x12\x13\n\x06sint64\x18\t \x01(\x12H\x05\x88\x01\x01\x12\x14\n\x07\x66ixed32\x18\n \x01(\x07H\x06\x88\x01\x01\x12\x14\n\x07\x66ixed64\x18\x0b \x01(\x06H\x07\x88\x01\x01\x12\x15\n\x08sfixed32\x18\x0c \x01(\x0fH\x08\x88\x01\x01\x12\x15\n\x08sfixed64\x18\r \x01(\x10H\t\x88\x01\x01\x12\x11\n\x04\x62ool\x18\x0e \x01(\x08H\n\x88\x01\x01\x12\x12\n\x05\x62ytes\x18\x0f \x01(\x0cH\x0b\x88\x01\x01\x12+\n\x07\x63ypress\x18\x10 \x01(\x0e\x32\x15.OopsAllTypes.CypressH\x0c\x88\x01\x01\"\x1e\n\x07\x43ypress\x12\x08\n\x04TEST\x10\x00\x12\t\n\x05OTHER\x10\x01\x42\x08\n\x06_int32B\x08\n\x06_int64B\t\n\x07_uint32B\t\n\x07_uint64B\t\n\x07_sint32B\t\n\x07_sint64B\n\n\x08_fixed32B\n\n\x08_fixed64B\x0b\n\t_sfixed32B\x0b\n\t_sfixed64B\x07\n\x05_boolB\x08\n\x06_bytesB\n\n\x08_cypressb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'datatypes_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_SIMPLEMESSAGE']._serialized_start=19
  _globals['_SIMPLEMESSAGE']._serialized_end=63
  _globals['_SIMPLEMESSAGECLONE']._serialized_start=65
  _globals['_SIMPLEMESSAGECLONE']._serialized_end=102
  _globals['_TEMPERATURE']._serialized_start=104
  _globals['_TEMPERATURE']._serialized_end=132
  _globals['_OOPSALLTYPES']._serialized_start=135
  _globals['_OOPSALLTYPES']._serialized_end=624
  _globals['_OOPSALLTYPES_CYPRESS']._serialized_start=449
  _globals['_OOPSALLTYPES_CYPRESS']._serialized_end=479
# @@protoc_insertion_point(module_scope)
