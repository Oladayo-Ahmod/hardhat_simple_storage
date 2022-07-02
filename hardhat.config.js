require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

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
    }
  },
    etherscan : {
      apiKey : etherscan_api_key
    }

  
};
