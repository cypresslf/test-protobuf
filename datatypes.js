/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const SimpleMessage = $root.SimpleMessage = (() => {

    /**
     * Properties of a SimpleMessage.
     * @exports ISimpleMessage
     * @interface ISimpleMessage
     * @property {string|null} [id] SimpleMessage id
     * @property {string|null} [content] SimpleMessage content
     */

    /**
     * Constructs a new SimpleMessage.
     * @exports SimpleMessage
     * @classdesc Represents a SimpleMessage.
     * @implements ISimpleMessage
     * @constructor
     * @param {ISimpleMessage=} [properties] Properties to set
     */
    function SimpleMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SimpleMessage id.
     * @member {string} id
     * @memberof SimpleMessage
     * @instance
     */
    SimpleMessage.prototype.id = "";

    /**
     * SimpleMessage content.
     * @member {string} content
     * @memberof SimpleMessage
     * @instance
     */
    SimpleMessage.prototype.content = "";

    /**
     * Creates a new SimpleMessage instance using the specified properties.
     * @function create
     * @memberof SimpleMessage
     * @static
     * @param {ISimpleMessage=} [properties] Properties to set
     * @returns {SimpleMessage} SimpleMessage instance
     */
    SimpleMessage.create = function create(properties) {
        return new SimpleMessage(properties);
    };

    /**
     * Encodes the specified SimpleMessage message. Does not implicitly {@link SimpleMessage.verify|verify} messages.
     * @function encode
     * @memberof SimpleMessage
     * @static
     * @param {ISimpleMessage} message SimpleMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SimpleMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified SimpleMessage message, length delimited. Does not implicitly {@link SimpleMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SimpleMessage
     * @static
     * @param {ISimpleMessage} message SimpleMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SimpleMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SimpleMessage message from the specified reader or buffer.
     * @function decode
     * @memberof SimpleMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SimpleMessage} SimpleMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SimpleMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SimpleMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.content = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SimpleMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SimpleMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SimpleMessage} SimpleMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SimpleMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SimpleMessage message.
     * @function verify
     * @memberof SimpleMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SimpleMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a SimpleMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SimpleMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SimpleMessage} SimpleMessage
     */
    SimpleMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.SimpleMessage)
            return object;
        let message = new $root.SimpleMessage();
        if (object.id != null)
            message.id = String(object.id);
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a SimpleMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SimpleMessage
     * @static
     * @param {SimpleMessage} message SimpleMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SimpleMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = "";
            object.content = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this SimpleMessage to JSON.
     * @function toJSON
     * @memberof SimpleMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SimpleMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SimpleMessage
     * @function getTypeUrl
     * @memberof SimpleMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SimpleMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SimpleMessage";
    };

    return SimpleMessage;
})();

export const SimpleMessageClone = $root.SimpleMessageClone = (() => {

    /**
     * Properties of a SimpleMessageClone.
     * @exports ISimpleMessageClone
     * @interface ISimpleMessageClone
     * @property {string|null} [content] SimpleMessageClone content
     */

    /**
     * Constructs a new SimpleMessageClone.
     * @exports SimpleMessageClone
     * @classdesc Represents a SimpleMessageClone.
     * @implements ISimpleMessageClone
     * @constructor
     * @param {ISimpleMessageClone=} [properties] Properties to set
     */
    function SimpleMessageClone(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SimpleMessageClone content.
     * @member {string} content
     * @memberof SimpleMessageClone
     * @instance
     */
    SimpleMessageClone.prototype.content = "";

    /**
     * Creates a new SimpleMessageClone instance using the specified properties.
     * @function create
     * @memberof SimpleMessageClone
     * @static
     * @param {ISimpleMessageClone=} [properties] Properties to set
     * @returns {SimpleMessageClone} SimpleMessageClone instance
     */
    SimpleMessageClone.create = function create(properties) {
        return new SimpleMessageClone(properties);
    };

    /**
     * Encodes the specified SimpleMessageClone message. Does not implicitly {@link SimpleMessageClone.verify|verify} messages.
     * @function encode
     * @memberof SimpleMessageClone
     * @static
     * @param {ISimpleMessageClone} message SimpleMessageClone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SimpleMessageClone.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified SimpleMessageClone message, length delimited. Does not implicitly {@link SimpleMessageClone.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SimpleMessageClone
     * @static
     * @param {ISimpleMessageClone} message SimpleMessageClone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SimpleMessageClone.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SimpleMessageClone message from the specified reader or buffer.
     * @function decode
     * @memberof SimpleMessageClone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SimpleMessageClone} SimpleMessageClone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SimpleMessageClone.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SimpleMessageClone();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SimpleMessageClone message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SimpleMessageClone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SimpleMessageClone} SimpleMessageClone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SimpleMessageClone.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SimpleMessageClone message.
     * @function verify
     * @memberof SimpleMessageClone
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SimpleMessageClone.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a SimpleMessageClone message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SimpleMessageClone
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SimpleMessageClone} SimpleMessageClone
     */
    SimpleMessageClone.fromObject = function fromObject(object) {
        if (object instanceof $root.SimpleMessageClone)
            return object;
        let message = new $root.SimpleMessageClone();
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a SimpleMessageClone message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SimpleMessageClone
     * @static
     * @param {SimpleMessageClone} message SimpleMessageClone
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SimpleMessageClone.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.content = "";
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this SimpleMessageClone to JSON.
     * @function toJSON
     * @memberof SimpleMessageClone
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SimpleMessageClone.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SimpleMessageClone
     * @function getTypeUrl
     * @memberof SimpleMessageClone
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SimpleMessageClone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SimpleMessageClone";
    };

    return SimpleMessageClone;
})();

export const Temperature = $root.Temperature = (() => {

    /**
     * Properties of a Temperature.
     * @exports ITemperature
     * @interface ITemperature
     * @property {number|null} [value] Temperature value
     */

    /**
     * Constructs a new Temperature.
     * @exports Temperature
     * @classdesc Represents a Temperature.
     * @implements ITemperature
     * @constructor
     * @param {ITemperature=} [properties] Properties to set
     */
    function Temperature(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Temperature value.
     * @member {number} value
     * @memberof Temperature
     * @instance
     */
    Temperature.prototype.value = 0;

    /**
     * Creates a new Temperature instance using the specified properties.
     * @function create
     * @memberof Temperature
     * @static
     * @param {ITemperature=} [properties] Properties to set
     * @returns {Temperature} Temperature instance
     */
    Temperature.create = function create(properties) {
        return new Temperature(properties);
    };

    /**
     * Encodes the specified Temperature message. Does not implicitly {@link Temperature.verify|verify} messages.
     * @function encode
     * @memberof Temperature
     * @static
     * @param {ITemperature} message Temperature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Temperature.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
        return writer;
    };

    /**
     * Encodes the specified Temperature message, length delimited. Does not implicitly {@link Temperature.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Temperature
     * @static
     * @param {ITemperature} message Temperature message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Temperature.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Temperature message from the specified reader or buffer.
     * @function decode
     * @memberof Temperature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Temperature} Temperature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Temperature.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Temperature();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Temperature message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Temperature
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Temperature} Temperature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Temperature.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Temperature message.
     * @function verify
     * @memberof Temperature
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Temperature.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        return null;
    };

    /**
     * Creates a Temperature message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Temperature
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Temperature} Temperature
     */
    Temperature.fromObject = function fromObject(object) {
        if (object instanceof $root.Temperature)
            return object;
        let message = new $root.Temperature();
        if (object.value != null)
            message.value = Number(object.value);
        return message;
    };

    /**
     * Creates a plain object from a Temperature message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Temperature
     * @static
     * @param {Temperature} message Temperature
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Temperature.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
        return object;
    };

    /**
     * Converts this Temperature to JSON.
     * @function toJSON
     * @memberof Temperature
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Temperature.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Temperature
     * @function getTypeUrl
     * @memberof Temperature
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Temperature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Temperature";
    };

    return Temperature;
})();

export const OopsAllTypes = $root.OopsAllTypes = (() => {

    /**
     * Properties of an OopsAllTypes.
     * @exports IOopsAllTypes
     * @interface IOopsAllTypes
     * @property {number|null} [int32] OopsAllTypes int32
     * @property {number|Long|null} [int64] OopsAllTypes int64
     * @property {number|null} [uint32] OopsAllTypes uint32
     * @property {number|Long|null} [uint64] OopsAllTypes uint64
     * @property {number|null} [sint32] OopsAllTypes sint32
     * @property {number|Long|null} [sint64] OopsAllTypes sint64
     * @property {number|null} [fixed32] OopsAllTypes fixed32
     * @property {number|Long|null} [fixed64] OopsAllTypes fixed64
     * @property {number|null} [sfixed32] OopsAllTypes sfixed32
     * @property {number|Long|null} [sfixed64] OopsAllTypes sfixed64
     * @property {boolean|null} [bool] OopsAllTypes bool
     * @property {Uint8Array|null} [bytes] OopsAllTypes bytes
     * @property {OopsAllTypes.Cypress|null} [cypress] OopsAllTypes cypress
     */

    /**
     * Constructs a new OopsAllTypes.
     * @exports OopsAllTypes
     * @classdesc Represents an OopsAllTypes.
     * @implements IOopsAllTypes
     * @constructor
     * @param {IOopsAllTypes=} [properties] Properties to set
     */
    function OopsAllTypes(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OopsAllTypes int32.
     * @member {number|null|undefined} int32
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.int32 = null;

    /**
     * OopsAllTypes int64.
     * @member {number|Long|null|undefined} int64
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.int64 = null;

    /**
     * OopsAllTypes uint32.
     * @member {number|null|undefined} uint32
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.uint32 = null;

    /**
     * OopsAllTypes uint64.
     * @member {number|Long|null|undefined} uint64
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.uint64 = null;

    /**
     * OopsAllTypes sint32.
     * @member {number|null|undefined} sint32
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.sint32 = null;

    /**
     * OopsAllTypes sint64.
     * @member {number|Long|null|undefined} sint64
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.sint64 = null;

    /**
     * OopsAllTypes fixed32.
     * @member {number|null|undefined} fixed32
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.fixed32 = null;

    /**
     * OopsAllTypes fixed64.
     * @member {number|Long|null|undefined} fixed64
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.fixed64 = null;

    /**
     * OopsAllTypes sfixed32.
     * @member {number|null|undefined} sfixed32
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.sfixed32 = null;

    /**
     * OopsAllTypes sfixed64.
     * @member {number|Long|null|undefined} sfixed64
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.sfixed64 = null;

    /**
     * OopsAllTypes bool.
     * @member {boolean|null|undefined} bool
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.bool = null;

    /**
     * OopsAllTypes bytes.
     * @member {Uint8Array|null|undefined} bytes
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.bytes = null;

    /**
     * OopsAllTypes cypress.
     * @member {OopsAllTypes.Cypress|null|undefined} cypress
     * @memberof OopsAllTypes
     * @instance
     */
    OopsAllTypes.prototype.cypress = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_int32", {
        get: $util.oneOfGetter($oneOfFields = ["int32"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_int64", {
        get: $util.oneOfGetter($oneOfFields = ["int64"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_uint32", {
        get: $util.oneOfGetter($oneOfFields = ["uint32"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_uint64", {
        get: $util.oneOfGetter($oneOfFields = ["uint64"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_sint32", {
        get: $util.oneOfGetter($oneOfFields = ["sint32"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_sint64", {
        get: $util.oneOfGetter($oneOfFields = ["sint64"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_fixed32", {
        get: $util.oneOfGetter($oneOfFields = ["fixed32"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_fixed64", {
        get: $util.oneOfGetter($oneOfFields = ["fixed64"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_sfixed32", {
        get: $util.oneOfGetter($oneOfFields = ["sfixed32"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_sfixed64", {
        get: $util.oneOfGetter($oneOfFields = ["sfixed64"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_bool", {
        get: $util.oneOfGetter($oneOfFields = ["bool"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_bytes", {
        get: $util.oneOfGetter($oneOfFields = ["bytes"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(OopsAllTypes.prototype, "_cypress", {
        get: $util.oneOfGetter($oneOfFields = ["cypress"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new OopsAllTypes instance using the specified properties.
     * @function create
     * @memberof OopsAllTypes
     * @static
     * @param {IOopsAllTypes=} [properties] Properties to set
     * @returns {OopsAllTypes} OopsAllTypes instance
     */
    OopsAllTypes.create = function create(properties) {
        return new OopsAllTypes(properties);
    };

    /**
     * Encodes the specified OopsAllTypes message. Does not implicitly {@link OopsAllTypes.verify|verify} messages.
     * @function encode
     * @memberof OopsAllTypes
     * @static
     * @param {IOopsAllTypes} message OopsAllTypes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OopsAllTypes.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.int32 != null && Object.hasOwnProperty.call(message, "int32"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.int32);
        if (message.int64 != null && Object.hasOwnProperty.call(message, "int64"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.int64);
        if (message.uint32 != null && Object.hasOwnProperty.call(message, "uint32"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uint32);
        if (message.uint64 != null && Object.hasOwnProperty.call(message, "uint64"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.uint64);
        if (message.sint32 != null && Object.hasOwnProperty.call(message, "sint32"))
            writer.uint32(/* id 8, wireType 0 =*/64).sint32(message.sint32);
        if (message.sint64 != null && Object.hasOwnProperty.call(message, "sint64"))
            writer.uint32(/* id 9, wireType 0 =*/72).sint64(message.sint64);
        if (message.fixed32 != null && Object.hasOwnProperty.call(message, "fixed32"))
            writer.uint32(/* id 10, wireType 5 =*/85).fixed32(message.fixed32);
        if (message.fixed64 != null && Object.hasOwnProperty.call(message, "fixed64"))
            writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.fixed64);
        if (message.sfixed32 != null && Object.hasOwnProperty.call(message, "sfixed32"))
            writer.uint32(/* id 12, wireType 5 =*/101).sfixed32(message.sfixed32);
        if (message.sfixed64 != null && Object.hasOwnProperty.call(message, "sfixed64"))
            writer.uint32(/* id 13, wireType 1 =*/105).sfixed64(message.sfixed64);
        if (message.bool != null && Object.hasOwnProperty.call(message, "bool"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.bool);
        if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
            writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.bytes);
        if (message.cypress != null && Object.hasOwnProperty.call(message, "cypress"))
            writer.uint32(/* id 16, wireType 0 =*/128).int32(message.cypress);
        return writer;
    };

    /**
     * Encodes the specified OopsAllTypes message, length delimited. Does not implicitly {@link OopsAllTypes.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OopsAllTypes
     * @static
     * @param {IOopsAllTypes} message OopsAllTypes message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OopsAllTypes.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OopsAllTypes message from the specified reader or buffer.
     * @function decode
     * @memberof OopsAllTypes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OopsAllTypes} OopsAllTypes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OopsAllTypes.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.OopsAllTypes();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 4: {
                    message.int32 = reader.int32();
                    break;
                }
            case 5: {
                    message.int64 = reader.int64();
                    break;
                }
            case 6: {
                    message.uint32 = reader.uint32();
                    break;
                }
            case 7: {
                    message.uint64 = reader.uint64();
                    break;
                }
            case 8: {
                    message.sint32 = reader.sint32();
                    break;
                }
            case 9: {
                    message.sint64 = reader.sint64();
                    break;
                }
            case 10: {
                    message.fixed32 = reader.fixed32();
                    break;
                }
            case 11: {
                    message.fixed64 = reader.fixed64();
                    break;
                }
            case 12: {
                    message.sfixed32 = reader.sfixed32();
                    break;
                }
            case 13: {
                    message.sfixed64 = reader.sfixed64();
                    break;
                }
            case 14: {
                    message.bool = reader.bool();
                    break;
                }
            case 15: {
                    message.bytes = reader.bytes();
                    break;
                }
            case 16: {
                    message.cypress = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OopsAllTypes message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OopsAllTypes
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OopsAllTypes} OopsAllTypes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OopsAllTypes.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OopsAllTypes message.
     * @function verify
     * @memberof OopsAllTypes
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OopsAllTypes.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.int32 != null && message.hasOwnProperty("int32")) {
            properties._int32 = 1;
            if (!$util.isInteger(message.int32))
                return "int32: integer expected";
        }
        if (message.int64 != null && message.hasOwnProperty("int64")) {
            properties._int64 = 1;
            if (!$util.isInteger(message.int64) && !(message.int64 && $util.isInteger(message.int64.low) && $util.isInteger(message.int64.high)))
                return "int64: integer|Long expected";
        }
        if (message.uint32 != null && message.hasOwnProperty("uint32")) {
            properties._uint32 = 1;
            if (!$util.isInteger(message.uint32))
                return "uint32: integer expected";
        }
        if (message.uint64 != null && message.hasOwnProperty("uint64")) {
            properties._uint64 = 1;
            if (!$util.isInteger(message.uint64) && !(message.uint64 && $util.isInteger(message.uint64.low) && $util.isInteger(message.uint64.high)))
                return "uint64: integer|Long expected";
        }
        if (message.sint32 != null && message.hasOwnProperty("sint32")) {
            properties._sint32 = 1;
            if (!$util.isInteger(message.sint32))
                return "sint32: integer expected";
        }
        if (message.sint64 != null && message.hasOwnProperty("sint64")) {
            properties._sint64 = 1;
            if (!$util.isInteger(message.sint64) && !(message.sint64 && $util.isInteger(message.sint64.low) && $util.isInteger(message.sint64.high)))
                return "sint64: integer|Long expected";
        }
        if (message.fixed32 != null && message.hasOwnProperty("fixed32")) {
            properties._fixed32 = 1;
            if (!$util.isInteger(message.fixed32))
                return "fixed32: integer expected";
        }
        if (message.fixed64 != null && message.hasOwnProperty("fixed64")) {
            properties._fixed64 = 1;
            if (!$util.isInteger(message.fixed64) && !(message.fixed64 && $util.isInteger(message.fixed64.low) && $util.isInteger(message.fixed64.high)))
                return "fixed64: integer|Long expected";
        }
        if (message.sfixed32 != null && message.hasOwnProperty("sfixed32")) {
            properties._sfixed32 = 1;
            if (!$util.isInteger(message.sfixed32))
                return "sfixed32: integer expected";
        }
        if (message.sfixed64 != null && message.hasOwnProperty("sfixed64")) {
            properties._sfixed64 = 1;
            if (!$util.isInteger(message.sfixed64) && !(message.sfixed64 && $util.isInteger(message.sfixed64.low) && $util.isInteger(message.sfixed64.high)))
                return "sfixed64: integer|Long expected";
        }
        if (message.bool != null && message.hasOwnProperty("bool")) {
            properties._bool = 1;
            if (typeof message.bool !== "boolean")
                return "bool: boolean expected";
        }
        if (message.bytes != null && message.hasOwnProperty("bytes")) {
            properties._bytes = 1;
            if (!(message.bytes && typeof message.bytes.length === "number" || $util.isString(message.bytes)))
                return "bytes: buffer expected";
        }
        if (message.cypress != null && message.hasOwnProperty("cypress")) {
            properties._cypress = 1;
            switch (message.cypress) {
            default:
                return "cypress: enum value expected";
            case 0:
            case 1:
                break;
            }
        }
        return null;
    };

    /**
     * Creates an OopsAllTypes message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OopsAllTypes
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OopsAllTypes} OopsAllTypes
     */
    OopsAllTypes.fromObject = function fromObject(object) {
        if (object instanceof $root.OopsAllTypes)
            return object;
        let message = new $root.OopsAllTypes();
        if (object.int32 != null)
            message.int32 = object.int32 | 0;
        if (object.int64 != null)
            if ($util.Long)
                (message.int64 = $util.Long.fromValue(object.int64)).unsigned = false;
            else if (typeof object.int64 === "string")
                message.int64 = parseInt(object.int64, 10);
            else if (typeof object.int64 === "number")
                message.int64 = object.int64;
            else if (typeof object.int64 === "object")
                message.int64 = new $util.LongBits(object.int64.low >>> 0, object.int64.high >>> 0).toNumber();
        if (object.uint32 != null)
            message.uint32 = object.uint32 >>> 0;
        if (object.uint64 != null)
            if ($util.Long)
                (message.uint64 = $util.Long.fromValue(object.uint64)).unsigned = true;
            else if (typeof object.uint64 === "string")
                message.uint64 = parseInt(object.uint64, 10);
            else if (typeof object.uint64 === "number")
                message.uint64 = object.uint64;
            else if (typeof object.uint64 === "object")
                message.uint64 = new $util.LongBits(object.uint64.low >>> 0, object.uint64.high >>> 0).toNumber(true);
        if (object.sint32 != null)
            message.sint32 = object.sint32 | 0;
        if (object.sint64 != null)
            if ($util.Long)
                (message.sint64 = $util.Long.fromValue(object.sint64)).unsigned = false;
            else if (typeof object.sint64 === "string")
                message.sint64 = parseInt(object.sint64, 10);
            else if (typeof object.sint64 === "number")
                message.sint64 = object.sint64;
            else if (typeof object.sint64 === "object")
                message.sint64 = new $util.LongBits(object.sint64.low >>> 0, object.sint64.high >>> 0).toNumber();
        if (object.fixed32 != null)
            message.fixed32 = object.fixed32 >>> 0;
        if (object.fixed64 != null)
            if ($util.Long)
                (message.fixed64 = $util.Long.fromValue(object.fixed64)).unsigned = false;
            else if (typeof object.fixed64 === "string")
                message.fixed64 = parseInt(object.fixed64, 10);
            else if (typeof object.fixed64 === "number")
                message.fixed64 = object.fixed64;
            else if (typeof object.fixed64 === "object")
                message.fixed64 = new $util.LongBits(object.fixed64.low >>> 0, object.fixed64.high >>> 0).toNumber();
        if (object.sfixed32 != null)
            message.sfixed32 = object.sfixed32 | 0;
        if (object.sfixed64 != null)
            if ($util.Long)
                (message.sfixed64 = $util.Long.fromValue(object.sfixed64)).unsigned = false;
            else if (typeof object.sfixed64 === "string")
                message.sfixed64 = parseInt(object.sfixed64, 10);
            else if (typeof object.sfixed64 === "number")
                message.sfixed64 = object.sfixed64;
            else if (typeof object.sfixed64 === "object")
                message.sfixed64 = new $util.LongBits(object.sfixed64.low >>> 0, object.sfixed64.high >>> 0).toNumber();
        if (object.bool != null)
            message.bool = Boolean(object.bool);
        if (object.bytes != null)
            if (typeof object.bytes === "string")
                $util.base64.decode(object.bytes, message.bytes = $util.newBuffer($util.base64.length(object.bytes)), 0);
            else if (object.bytes.length >= 0)
                message.bytes = object.bytes;
        switch (object.cypress) {
        default:
            if (typeof object.cypress === "number") {
                message.cypress = object.cypress;
                break;
            }
            break;
        case "TEST":
        case 0:
            message.cypress = 0;
            break;
        case "OTHER":
        case 1:
            message.cypress = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from an OopsAllTypes message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OopsAllTypes
     * @static
     * @param {OopsAllTypes} message OopsAllTypes
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OopsAllTypes.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.int32 != null && message.hasOwnProperty("int32")) {
            object.int32 = message.int32;
            if (options.oneofs)
                object._int32 = "int32";
        }
        if (message.int64 != null && message.hasOwnProperty("int64")) {
            if (typeof message.int64 === "number")
                object.int64 = options.longs === String ? String(message.int64) : message.int64;
            else
                object.int64 = options.longs === String ? $util.Long.prototype.toString.call(message.int64) : options.longs === Number ? new $util.LongBits(message.int64.low >>> 0, message.int64.high >>> 0).toNumber() : message.int64;
            if (options.oneofs)
                object._int64 = "int64";
        }
        if (message.uint32 != null && message.hasOwnProperty("uint32")) {
            object.uint32 = message.uint32;
            if (options.oneofs)
                object._uint32 = "uint32";
        }
        if (message.uint64 != null && message.hasOwnProperty("uint64")) {
            if (typeof message.uint64 === "number")
                object.uint64 = options.longs === String ? String(message.uint64) : message.uint64;
            else
                object.uint64 = options.longs === String ? $util.Long.prototype.toString.call(message.uint64) : options.longs === Number ? new $util.LongBits(message.uint64.low >>> 0, message.uint64.high >>> 0).toNumber(true) : message.uint64;
            if (options.oneofs)
                object._uint64 = "uint64";
        }
        if (message.sint32 != null && message.hasOwnProperty("sint32")) {
            object.sint32 = message.sint32;
            if (options.oneofs)
                object._sint32 = "sint32";
        }
        if (message.sint64 != null && message.hasOwnProperty("sint64")) {
            if (typeof message.sint64 === "number")
                object.sint64 = options.longs === String ? String(message.sint64) : message.sint64;
            else
                object.sint64 = options.longs === String ? $util.Long.prototype.toString.call(message.sint64) : options.longs === Number ? new $util.LongBits(message.sint64.low >>> 0, message.sint64.high >>> 0).toNumber() : message.sint64;
            if (options.oneofs)
                object._sint64 = "sint64";
        }
        if (message.fixed32 != null && message.hasOwnProperty("fixed32")) {
            object.fixed32 = message.fixed32;
            if (options.oneofs)
                object._fixed32 = "fixed32";
        }
        if (message.fixed64 != null && message.hasOwnProperty("fixed64")) {
            if (typeof message.fixed64 === "number")
                object.fixed64 = options.longs === String ? String(message.fixed64) : message.fixed64;
            else
                object.fixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.fixed64) : options.longs === Number ? new $util.LongBits(message.fixed64.low >>> 0, message.fixed64.high >>> 0).toNumber() : message.fixed64;
            if (options.oneofs)
                object._fixed64 = "fixed64";
        }
        if (message.sfixed32 != null && message.hasOwnProperty("sfixed32")) {
            object.sfixed32 = message.sfixed32;
            if (options.oneofs)
                object._sfixed32 = "sfixed32";
        }
        if (message.sfixed64 != null && message.hasOwnProperty("sfixed64")) {
            if (typeof message.sfixed64 === "number")
                object.sfixed64 = options.longs === String ? String(message.sfixed64) : message.sfixed64;
            else
                object.sfixed64 = options.longs === String ? $util.Long.prototype.toString.call(message.sfixed64) : options.longs === Number ? new $util.LongBits(message.sfixed64.low >>> 0, message.sfixed64.high >>> 0).toNumber() : message.sfixed64;
            if (options.oneofs)
                object._sfixed64 = "sfixed64";
        }
        if (message.bool != null && message.hasOwnProperty("bool")) {
            object.bool = message.bool;
            if (options.oneofs)
                object._bool = "bool";
        }
        if (message.bytes != null && message.hasOwnProperty("bytes")) {
            object.bytes = options.bytes === String ? $util.base64.encode(message.bytes, 0, message.bytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes) : message.bytes;
            if (options.oneofs)
                object._bytes = "bytes";
        }
        if (message.cypress != null && message.hasOwnProperty("cypress")) {
            object.cypress = options.enums === String ? $root.OopsAllTypes.Cypress[message.cypress] === undefined ? message.cypress : $root.OopsAllTypes.Cypress[message.cypress] : message.cypress;
            if (options.oneofs)
                object._cypress = "cypress";
        }
        return object;
    };

    /**
     * Converts this OopsAllTypes to JSON.
     * @function toJSON
     * @memberof OopsAllTypes
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OopsAllTypes.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for OopsAllTypes
     * @function getTypeUrl
     * @memberof OopsAllTypes
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OopsAllTypes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/OopsAllTypes";
    };

    /**
     * Cypress enum.
     * @name OopsAllTypes.Cypress
     * @enum {number}
     * @property {number} TEST=0 TEST value
     * @property {number} OTHER=1 OTHER value
     */
    OopsAllTypes.Cypress = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TEST"] = 0;
        values[valuesById[1] = "OTHER"] = 1;
        return values;
    })();

    return OopsAllTypes;
})();

export { $root as default };
