"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
const index_3 = require("./bsc_mainnet/index");
const index_4 = require("./bsc_testnet/index");
exports.tokens = {
    rinkeby: index_2.rinkebyTokens,
    main: index_1.mainTokens,
    bsc_mainnet: index_3.bscTokens,
    bsc_testnet: index_4.bscTestnetTokens,
};
//# sourceMappingURL=index.js.map