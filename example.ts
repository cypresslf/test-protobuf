import { connect } from "@nats-io/transport-node";
import { Client } from "./api";

const connection = await connect({ servers: "demo.nats.io" });

const client = Client.init(connection);

client.subscribe({
  subject: "simpleMessage",
  callback: console.log,
});

client.subscribe({
  subject: "temperature",
  callback: console.log,
});

client.subscribe({
  subject: "oopsAllTypes",
  callback: console.log,
});
client.publish({ subject: "oopsAllTypes", value: { bool: false } });
client.publish({
  subject: "simpleMessage",
  value: { content: "Hello, World!" },
});

await connection.drain();
