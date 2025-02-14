from datatypes_pb2 import SimpleMessage, SimpleMessageClone


def main():
    message: SimpleMessage = SimpleMessage(content="hi there", id="asdf")
    print("Original message:", message)

    serialized = message.SerializeToString()
    print("Serialized:", serialized)

    message_2 = SimpleMessageClone()
    message_2.ParseFromString(serialized)
    print("Deserialized message:", message_2)


if __name__ == "__main__":
    main()
