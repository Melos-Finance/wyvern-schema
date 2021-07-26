"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbiType = exports.tokens = exports.schemas = exports.encodeReplacementPattern = exports.encodeDefaultCall = exports.encodeCall = exports.encodeAtomicizedSell = exports.encodeAtomicizedBuy = exports.encodeSell = exports.encodeBuy = void 0;
const Web3 = require("web3");
/* HACK */
// @ts-ignore
Web3.AbiType = {
    Function: 'function',
    Event: 'event',
};
var schemaFunctions_1 = require("./schemaFunctions");
Object.defineProperty(exports, "encodeBuy", { enumerable: true, get: function () { return schemaFunctions_1.encodeBuy; } });
Object.defineProperty(exports, "encodeSell", { enumerable: true, get: function () { return schemaFunctions_1.encodeSell; } });
Object.defineProperty(exports, "encodeAtomicizedBuy", { enumerable: true, get: function () { return schemaFunctions_1.encodeAtomicizedBuy; } });
Object.defineProperty(exports, "encodeAtomicizedSell", { enumerable: true, get: function () { return schemaFunctions_1.encodeAtomicizedSell; } });
Object.defineProperty(exports, "encodeCall", { enumerable: true, get: function () { return schemaFunctions_1.encodeCall; } });
Object.defineProperty(exports, "encodeDefaultCall", { enumerable: true, get: function () { return schemaFunctions_1.encodeDefaultCall; } });
Object.defineProperty(exports, "encodeReplacementPattern", { enumerable: true, get: function () { return schemaFunctions_1.encodeReplacementPattern; } });
var index_1 = require("./schemas/index");
Object.defineProperty(exports, "schemas", { enumerable: true, get: function () { return index_1.schemas; } });
var index_2 = require("./tokens/index");
Object.defineProperty(exports, "tokens", { enumerable: true, get: function () { return index_2.tokens; } });
var web3_1 = require("web3");
Object.defineProperty(exports, "AbiType", { enumerable: true, get: function () { return web3_1.AbiType; } });
//# sourceMappingURL=index.js.map