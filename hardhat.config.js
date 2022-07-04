require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('./tasks/block-number')
require('hardhat-gas-reporter')

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RpcUrl =  process.env.RINKBY_RPC_URL 
const private_key = process.env.RINKBY_PRIVATE_KEY
const etherscan_api_key = process.env.ETHERSCAN_API_KEY
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: 'hardhat',
  networks : {
    rinkeby : {
      url :RpcUrl,
      accounts : [private_key],
      chainId : 4
    },
    localhost : {
      url : 'http://127.0.0.1:8545/',
      chainId : 31337
    }
  },
    etherscan : {
      apiKey : etherscan_api_key
    },
    gasReporter :{
      enable : true,
      noColors : true,
      outputFile : 'gas-fee-report.txt',
      currency : "USD",
      coinmarketcap : coinmarketcap_api,
    }

  
};
