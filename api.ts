import { NatsConnection } from "@nats-io/transport-node";
import {
  ISimpleMessage,
  ITemperature,
  SimpleMessage,
  Temperature,
} from "./datatypes";

const subjects = {
  temperature: Temperature,
  simpleMessage: SimpleMessage,
};

type SubjectInput =
  | { subject: "temperature"; value: ITemperature }
  | { subject: "simpleMessage"; value: ISimpleMessage };

type Subscription =
  | { subject: "temperature"; callback: (msg: ITemperature) => void }
  | { subject: "simpleMessage"; callback: (msg: ISimpleMessage) => void };

type SubjectName = keyof typeof subjects;

export const Server = {
  init: (connection: NatsConnection) => {
    return {
      publish: (input: SubjectInput) => {
        const message = encodeMessage(input);
        connection.publish(input.subject, message);
      },
      connection,
    };
  },
};

export const Client = {
  init: (connection: NatsConnection) => {
    return {
      subscribe: (subscription: Subscription) => {
        connection.subscribe(subscription.subject, {
          callback: (err, msg) => {
            if (err) {
              console.error(err);
              return;
            }
            switch (subscription.subject) {
              case "temperature":
                const temperature = Temperature.decode(msg.data);
                subscription.callback(temperature);
                break;
              case "simpleMessage":
                const simpleMessage = SimpleMessage.decode(msg.data);
                subscription.callback(simpleMessage);
                break;
            }
          },
        });
      },
    };
  },
};

function encodeMessage(input: SubjectInput) {
  switch (input.subject) {
    case "temperature":
      return Temperature.encode(Temperature.create(input.value)).finish();
    case "simpleMessage":
      return SimpleMessage.encode(SimpleMessage.create(input.value)).finish();
  }
}
