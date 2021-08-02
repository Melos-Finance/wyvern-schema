"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
const index_3 = require("./bsc/index");
const index_4 = require("./bsc_testnet/index");
exports.schemas = {
    rinkeby: index_2.schemas,
    main: index_1.schemas,
    bsc_mainnet: index_3.schemas,
    bsc_testnet: index_4.schemas,
};
//# sourceMappingURL=index.js.map