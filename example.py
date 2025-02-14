from datatypes_pb2 import SimpleMessage, SimpleMessageClone


def main():
    message: SimpleMessage = SimpleMessage(content="hi there", id="asdf")
    print("Original message:", message)

    serialized = message.SerializeToString()
    print("Serialized:", serialized)

    message_2 = SimpleMessageClone()
    message_2.ParseFromString(serialized)
    print("Deserialized message:", message_2)

    serialized_2 = message_2.SerializeToString()
    message_3 = SimpleMessage()
    message_3.ParseFromString(serialized_2)
    print("Deserialized message 2:", message_3)


if __name__ == "__main__":
    main()
