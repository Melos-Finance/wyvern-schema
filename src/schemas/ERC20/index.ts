import { BigNumber } from '@0xproject/utils';
import * as Web3 from 'web3';

import {
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../types';

export interface FungibleTradeType {
  address: string;
  quantity: BigNumber;
}

export const ERC20Schema: Schema<FungibleTradeType> = {
  version: 1,
  deploymentBlock: 0, // Not indexed (for now; need asset-specific indexing strategy)
  name: 'ERC20',
  description: 'Items conforming to the ERC20 spec, using transferFrom.',
  thumbnail: 'https://opensea.io/static/images/opensea-icon.png',
  website: 'https://github.com/ethereum/eips/issues/20',
  fields: [
    {name: 'Address', type: 'address', description: 'Asset Contract Address'},
    {name: 'Quantity', type: 'uint256', description: 'Quantity to transfer'},
  ],
  assetFromFields: (fields: any) => ({
    address: fields.Address,
    quantity: fields.Quantity,
  }),
  assetToFields: asset => ({
    Address: asset.address,
    Quantity: asset.quantity,
  }),
  formatter:
    async asset => {
      return {
        title: 'ERC20 Asset at ' + asset.address,
        description: 'Trading ' + asset.quantity.toString(),
        url: '',
        thumbnail: '',
        properties: [],
      };
  },
  functions: {
    transfer: asset => ({
      type: Web3.AbiType.Function,
      name: 'transferFrom',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_from', type: 'address'},
        {kind: FunctionInputKind.Replaceable, name: '_to', type: 'address'},
        {kind: FunctionInputKind.Count, name: '_value', type: 'uint256', value: asset.quantity },
      ],
      outputs: [],
    }),
    countOf: asset => ({
      type: Web3.AbiType.Function,
      name: 'balanceOf',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_owner', type: 'address'},
      ],
      outputs: [
        {kind: FunctionOutputKind.Count, name: 'balance', type: 'uint'},
      ],
      assetFromOutputs: (outputs: any) => outputs.balance,
    }),
    assetsOfOwnerByIndex: [],
  },
  events: {
    transfer: [],
  },
  hash: asset => asset.address,
};
