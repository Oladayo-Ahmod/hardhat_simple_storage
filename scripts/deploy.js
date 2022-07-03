require('dotenv').config()
const {ethers, run, network} = require('hardhat')
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
  const deployContract = await SimpleStorageFactory.deploy()
  console.log('deploying contract ')
  await deployContract.deployed()
  console.log(`deployed to ${deployContract.address}`)
  // console.log(network.config)
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
      console.log('waiting for block txes ...')
      await deployContract.deployTransaction.wait(6)
      await verify(deployContract.address,[])
  }

  // interacting with smart contract
  const currentData = await deployContract.retrieve() // get current data
  console.log(`current data is ${currentData}`)
  const storeData = await deployContract.store(7)
  await storeData.wait(1)
  console.log(`inserted data is ${storeData}`)
  const updatedData = await deployContract.retrieve()
  console.log(`updated data is now ${updatedData.toString()}`)
}

async function verify(contractAddress, arg){
  console.log('verifying ..')
  try {
      await run('verify:verify',{
        address : contractAddress,
        constructorArguments : arg
      })
  } catch (error) {
    console.log(error)
    if (error.toLowerCase().includes('already verified')) {
      console.log('Already verified')
    }
    else{
      console.log(error)
    }
  }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
