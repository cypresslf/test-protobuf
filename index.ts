import { connect } from "@nats-io/transport-node";
import { Client } from "./api";

const connection = await connect({ servers: "demo.nats.io" });

const client = Client.init(connection);

client.subscribe({
  subject: "simpleMessage",
  callback: (msg) => {
    console.log(msg);
  },
});

client.subscribe({
  subject: "temperature",
  callback: (msg) => {
    console.log(msg);
  },
});

client.publish({
  subject: "simpleMessage",
  value: {
    id: "123",
    content: "Hello, Protobuf!",
  },
});

client.publish({ subject: "temperature", value: { value: 42 } });

await connection.drain();
