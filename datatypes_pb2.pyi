from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SimpleMessage(_message.Message):
    __slots__ = ("id", "content")
    ID_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    id: str
    content: str
    def __init__(self, id: _Optional[str] = ..., content: _Optional[str] = ...) -> None: ...

class SimpleMessageClone(_message.Message):
    __slots__ = ("content",)
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    content: str
    def __init__(self, content: _Optional[str] = ...) -> None: ...

class Temperature(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: float
    def __init__(self, value: _Optional[float] = ...) -> None: ...

class OopsAllTypes(_message.Message):
    __slots__ = ("int32", "int64", "uint32", "uint64", "sint32", "sint64", "fixed32", "fixed64", "sfixed32", "sfixed64", "bool", "bytes", "cypress")
    class Cypress(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        TEST: _ClassVar[OopsAllTypes.Cypress]
        OTHER: _ClassVar[OopsAllTypes.Cypress]
    TEST: OopsAllTypes.Cypress
    OTHER: OopsAllTypes.Cypress
    INT32_FIELD_NUMBER: _ClassVar[int]
    INT64_FIELD_NUMBER: _ClassVar[int]
    UINT32_FIELD_NUMBER: _ClassVar[int]
    UINT64_FIELD_NUMBER: _ClassVar[int]
    SINT32_FIELD_NUMBER: _ClassVar[int]
    SINT64_FIELD_NUMBER: _ClassVar[int]
    FIXED32_FIELD_NUMBER: _ClassVar[int]
    FIXED64_FIELD_NUMBER: _ClassVar[int]
    SFIXED32_FIELD_NUMBER: _ClassVar[int]
    SFIXED64_FIELD_NUMBER: _ClassVar[int]
    BOOL_FIELD_NUMBER: _ClassVar[int]
    BYTES_FIELD_NUMBER: _ClassVar[int]
    CYPRESS_FIELD_NUMBER: _ClassVar[int]
    int32: int
    int64: int
    uint32: int
    uint64: int
    sint32: int
    sint64: int
    fixed32: int
    fixed64: int
    sfixed32: int
    sfixed64: int
    bool: bool
    bytes: bytes
    cypress: OopsAllTypes.Cypress
    def __init__(self, int32: _Optional[int] = ..., int64: _Optional[int] = ..., uint32: _Optional[int] = ..., uint64: _Optional[int] = ..., sint32: _Optional[int] = ..., sint64: _Optional[int] = ..., fixed32: _Optional[int] = ..., fixed64: _Optional[int] = ..., sfixed32: _Optional[int] = ..., sfixed64: _Optional[int] = ..., bool: bool = ..., bytes: _Optional[bytes] = ..., cypress: _Optional[_Union[OopsAllTypes.Cypress, str]] = ...) -> None: ...
