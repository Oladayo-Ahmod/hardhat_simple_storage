const {ethers} = require('hardhat')

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
  const deployContract = await SimpleStorageFactory.deploy()
  console.log('deploying ')
  await deployContract.deployed()
  console.log('deployed')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
