export const chain = {
    "$schema": "../../chain.schema.json",
    "chain_name": "gmrollup",
    "chain_id": "gm",
    "pretty_name": "my gm rollup",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "gm",
    "daemon_name": "gmd",
    "node_home": "$HOME/.gm",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustake", // should this be `stake`?
          "fixed_min_gas_price": 0
        }
      ]
    },
    // "fees": {
    //     "fee_tokens": [
    //       {
    //         "denom": "utia",
    //         "fixed_min_gas_price": 0
    //       }
    //     ]
    //   },
    // "codebase": {
    //   "git_repo": "https://github.com/celestiaorg/celestia-app",
    //   "recommended_version": "v0.12.0",
    //   "compatible_versions": [
    //     "v0.12.0"
    //   ],
    //   "genesis": {
    //     "genesis_url": "https://raw.githubusercontent.com/celestiaorg/networks/master/blockspacerace/genesis.json"
    //   },
    //   "versions": [
    //     {
    //       "name": "v0.12.0",
    //       "recommended_version": "v0.12.0",
    //       "compatible_versions": [
    //         "v0.12.0"
    //       ]
    //     }
    //   ]
    // },
    // "peers": {
    //   "seeds": [
    //     {
    //       "id": "f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f",
    //       "address": "celestia-blockspacerace.seed.brocha.in:30583",
    //       "provider": "Brochain"
    //     }
    //   ]
    // },
    "apis": {
      "rpc": [
        {
          "address": "http://localhost:26657",
          "provider": "JCS"
        }
      ],
      "rest": [
        {
          "address": "http://localhost:1317",
          "provider": "JCS"
        }
      ]
    },
    "beta": true,
    // "explorers": [
    //   {
    //     "kind": "Mintscan",
    //     "url": "https://testnet.mintscan.io/celestia-incentivized-testnet",
    //     "tx_page": "https://testnet.mintscan.io/celestia-incentivized-testnet/txs/${txHash}"
    //   }
    // ]
  }