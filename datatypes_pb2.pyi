from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class SimpleMessage(_message.Message):
    __slots__ = ("id", "content")
    ID_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    id: str
    content: str
    def __init__(self, id: _Optional[str] = ..., content: _Optional[str] = ...) -> None: ...

class SimpleMessageClone(_message.Message):
    __slots__ = ("id", "content")
    ID_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    id: str
    content: str
    def __init__(self, id: _Optional[str] = ..., content: _Optional[str] = ...) -> None: ...

class Temperature(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: float
    def __init__(self, value: _Optional[float] = ...) -> None: ...
