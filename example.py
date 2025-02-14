from datatypes_pb2 import SimpleMessage


def main():
    msg: SimpleMessage = SimpleMessage(content="hi there", id="asdf")
    print("Original message:", msg)

    serialized = msg.SerializeToString()
    print("Serialized:", serialized)

    msg2 = SimpleMessage()
    msg2.ParseFromString(serialized)
    print("Deserialized message:", msg2)


if __name__ == "__main__":
    main()
