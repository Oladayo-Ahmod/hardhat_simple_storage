const {ethers} = require('ethers')

async function main() {
  const SimpleStorageFactory = await ethers.ContractFactory('')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
