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

/** Properties of a SimpleMessageClone. */
export interface ISimpleMessageClone {

    /** SimpleMessageClone content */
    content?: (string|null);
}

/** Represents a SimpleMessageClone. */
export class SimpleMessageClone implements ISimpleMessageClone {

    /**
     * Constructs a new SimpleMessageClone.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISimpleMessageClone);

    /** SimpleMessageClone content. */
    public content: string;

    /**
     * Creates a new SimpleMessageClone instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SimpleMessageClone instance
     */
    public static create(properties?: ISimpleMessageClone): SimpleMessageClone;

    /**
     * Encodes the specified SimpleMessageClone message. Does not implicitly {@link SimpleMessageClone.verify|verify} messages.
     * @param message SimpleMessageClone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISimpleMessageClone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SimpleMessageClone message, length delimited. Does not implicitly {@link SimpleMessageClone.verify|verify} messages.
     * @param message SimpleMessageClone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISimpleMessageClone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SimpleMessageClone message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SimpleMessageClone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SimpleMessageClone;

    /**
     * Decodes a SimpleMessageClone message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SimpleMessageClone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SimpleMessageClone;

    /**
     * Verifies a SimpleMessageClone message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SimpleMessageClone message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SimpleMessageClone
     */
    public static fromObject(object: { [k: string]: any }): SimpleMessageClone;

    /**
     * Creates a plain object from a SimpleMessageClone message. Also converts values to other types if specified.
     * @param message SimpleMessageClone
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SimpleMessageClone, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SimpleMessageClone to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SimpleMessageClone
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

/** Properties of an OopsAllTypes. */
export interface IOopsAllTypes {

    /** OopsAllTypes int32 */
    int32?: (number|null);

    /** OopsAllTypes int64 */
    int64?: (number|Long|null);

    /** OopsAllTypes uint32 */
    uint32?: (number|null);

    /** OopsAllTypes uint64 */
    uint64?: (number|Long|null);

    /** OopsAllTypes sint32 */
    sint32?: (number|null);

    /** OopsAllTypes sint64 */
    sint64?: (number|Long|null);

    /** OopsAllTypes fixed32 */
    fixed32?: (number|null);

    /** OopsAllTypes fixed64 */
    fixed64?: (number|Long|null);

    /** OopsAllTypes sfixed32 */
    sfixed32?: (number|null);

    /** OopsAllTypes sfixed64 */
    sfixed64?: (number|Long|null);

    /** OopsAllTypes bool */
    bool?: (boolean|null);

    /** OopsAllTypes bytes */
    bytes?: (Uint8Array|null);

    /** OopsAllTypes cypress */
    cypress?: (OopsAllTypes.Cypress|null);
}

/** Represents an OopsAllTypes. */
export class OopsAllTypes implements IOopsAllTypes {

    /**
     * Constructs a new OopsAllTypes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOopsAllTypes);

    /** OopsAllTypes int32. */
    public int32?: (number|null);

    /** OopsAllTypes int64. */
    public int64?: (number|Long|null);

    /** OopsAllTypes uint32. */
    public uint32?: (number|null);

    /** OopsAllTypes uint64. */
    public uint64?: (number|Long|null);

    /** OopsAllTypes sint32. */
    public sint32?: (number|null);

    /** OopsAllTypes sint64. */
    public sint64?: (number|Long|null);

    /** OopsAllTypes fixed32. */
    public fixed32?: (number|null);

    /** OopsAllTypes fixed64. */
    public fixed64?: (number|Long|null);

    /** OopsAllTypes sfixed32. */
    public sfixed32?: (number|null);

    /** OopsAllTypes sfixed64. */
    public sfixed64?: (number|Long|null);

    /** OopsAllTypes bool. */
    public bool?: (boolean|null);

    /** OopsAllTypes bytes. */
    public bytes?: (Uint8Array|null);

    /** OopsAllTypes cypress. */
    public cypress?: (OopsAllTypes.Cypress|null);

    /**
     * Creates a new OopsAllTypes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OopsAllTypes instance
     */
    public static create(properties?: IOopsAllTypes): OopsAllTypes;

    /**
     * Encodes the specified OopsAllTypes message. Does not implicitly {@link OopsAllTypes.verify|verify} messages.
     * @param message OopsAllTypes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOopsAllTypes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OopsAllTypes message, length delimited. Does not implicitly {@link OopsAllTypes.verify|verify} messages.
     * @param message OopsAllTypes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOopsAllTypes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OopsAllTypes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OopsAllTypes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OopsAllTypes;

    /**
     * Decodes an OopsAllTypes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OopsAllTypes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OopsAllTypes;

    /**
     * Verifies an OopsAllTypes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OopsAllTypes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OopsAllTypes
     */
    public static fromObject(object: { [k: string]: any }): OopsAllTypes;

    /**
     * Creates a plain object from an OopsAllTypes message. Also converts values to other types if specified.
     * @param message OopsAllTypes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OopsAllTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OopsAllTypes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OopsAllTypes
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace OopsAllTypes {

    /** Cypress enum. */
    enum Cypress {
        TEST = 0,
        OTHER = 1
    }
}
