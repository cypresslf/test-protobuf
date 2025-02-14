from google.protobuf.json_format import MessageToJson, Parse

from datatypes_pb2 import SimpleMessage, SimpleMessageClone


def main():
    message: SimpleMessage = SimpleMessage(content="hi there")
    print("Original message:", message)

    serialized = MessageToJson(message)
    print("Serialized:", serialized)

    message_2 = SimpleMessageClone()
    Parse(serialized, message_2)
    print("Deserialized message:", message_2)

    serialized_2 = MessageToJson(message_2)
    message_3 = SimpleMessage()
    Parse(serialized_2, message_3)
    print("Deserialized message 2:", message_3)


if __name__ == "__main__":
    main()
