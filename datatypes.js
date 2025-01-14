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
     * @property {string} id SimpleMessage id
     * @property {string} content SimpleMessage content
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
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
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
        if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
        if (!message.hasOwnProperty("content"))
            throw $util.ProtocolError("missing required 'content'", { instance: message });
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
        if (!$util.isString(message.id))
            return "id: string expected";
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

export const Temperature = $root.Temperature = (() => {

    /**
     * Properties of a Temperature.
     * @exports ITemperature
     * @interface ITemperature
     * @property {number} value Temperature value
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
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
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

export { $root as default };
