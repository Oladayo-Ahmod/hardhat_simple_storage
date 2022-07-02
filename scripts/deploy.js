const {ethers, run, network} = require('hardhat')

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
  const deployContract = await SimpleStorageFactory.deploy()
  console.log('deploying contract ')
  await deployContract.deployed()
  console.log(`deployed to ${deployContract.address}`)
  console.log(network.config)
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
      await deployContract.deployTransaction.wait(6)
      await verify(deployContract.address,[])
  }
}

async function verify(contractAddress, arg){
  console.log('verifying ..')
  try {
      await run('verify:verify',{
        address : contractAddress,
        constructorArguments : arg
      })
  } catch (error) {
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
