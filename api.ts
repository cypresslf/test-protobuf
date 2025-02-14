import { NatsConnection } from "@nats-io/transport-node";
import {
  IOopsAllTypes,
  ISimpleMessage,
  ITemperature,
  OopsAllTypes,
  SimpleMessage,
  Temperature,
} from "./datatypes";

type SubjectInput =
  | { subject: "temperature"; value: ITemperature }
  | { subject: "simpleMessage"; value: ISimpleMessage }
  | { subject: "oopsAllTypes"; value: IOopsAllTypes };

type Subscription =
  | { subject: "temperature"; callback: (msg: ITemperature) => void }
  | { subject: "simpleMessage"; callback: (msg: ISimpleMessage) => void }
  | {
      subject: "oopsAllTypes";
      callback: (msg: IOopsAllTypes) => void;
    };

export const Client = {
  init: (connection: NatsConnection) => {
    return {
      publish: (input: SubjectInput) => {
        connection.publish(input.subject, encodeMessage(input));
      },
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
              case "oopsAllTypes":
                const oopsAllTypes = OopsAllTypes.decode(msg.data);
                subscription.callback(oopsAllTypes);
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
    case "oopsAllTypes":
      return OopsAllTypes.encode(OopsAllTypes.create(input.value)).finish();
  }
}
