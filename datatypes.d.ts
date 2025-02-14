import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a SimpleMessage. */
export interface ISimpleMessage {

    /** SimpleMessage id */
    id?: (string|null);

    /** SimpleMessage content */
    content?: (string|null);
}

/** Represents a SimpleMessage. */
export class SimpleMessage implements ISimpleMessage {

    /**
     * Constructs a new SimpleMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISimpleMessage);

    /** SimpleMessage id. */
    public id: string;

    /** SimpleMessage content. */
    public content: string;

    /**
     * Creates a new SimpleMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SimpleMessage instance
     */
    public static create(properties?: ISimpleMessage): SimpleMessage;

    /**
     * Encodes the specified SimpleMessage message. Does not implicitly {@link SimpleMessage.verify|verify} messages.
     * @param message SimpleMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISimpleMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SimpleMessage message, length delimited. Does not implicitly {@link SimpleMessage.verify|verify} messages.
     * @param message SimpleMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISimpleMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SimpleMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SimpleMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SimpleMessage;

    /**
     * Decodes a SimpleMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SimpleMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SimpleMessage;

    /**
     * Verifies a SimpleMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SimpleMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SimpleMessage
     */
    public static fromObject(object: { [k: string]: any }): SimpleMessage;

    /**
     * Creates a plain object from a SimpleMessage message. Also converts values to other types if specified.
     * @param message SimpleMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SimpleMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SimpleMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SimpleMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Temperature. */
export interface ITemperature {

    /** Temperature value */
    value?: (number|null);
}

/** Represents a Temperature. */
export class Temperature implements ITemperature {

    /**
     * Constructs a new Temperature.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITemperature);

    /** Temperature value. */
    public value: number;

    /**
     * Creates a new Temperature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Temperature instance
     */
    public static create(properties?: ITemperature): Temperature;

    /**
     * Encodes the specified Temperature message. Does not implicitly {@link Temperature.verify|verify} messages.
     * @param message Temperature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITemperature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Temperature message, length delimited. Does not implicitly {@link Temperature.verify|verify} messages.
     * @param message Temperature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITemperature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Temperature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Temperature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Temperature;

    /**
     * Decodes a Temperature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Temperature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Temperature;

    /**
     * Verifies a Temperature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Temperature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Temperature
     */
    public static fromObject(object: { [k: string]: any }): Temperature;

    /**
     * Creates a plain object from a Temperature message. Also converts values to other types if specified.
     * @param message Temperature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Temperature, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Temperature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Temperature
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
