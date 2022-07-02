const {ethers, run} = require('hardhat')

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
  const deployContract = await SimpleStorageFactory.deploy()
  console.log('deploying contract ')
  await deployContract.deployed()
  console.log(`deployed to ${deployContract.address}`)
}

async function verify(contractAddress, arg){
  console.log('verifying ..')
  try {
      await run('verify:verify',{
        address : contractAddress,
        constructorArguments : arg
      })
  } catch (error) {
    if (error.includes('already verified')) {
      console.log('Already verifies')
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
