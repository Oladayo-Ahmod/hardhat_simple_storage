const {task} = require('hardhat/config')

task('blockNumber','Print the current block number')
.setAction(
    async (taskArgs, hre) =>{
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`current blocknumber : ${blockNumber}`)
    }
)

module.exports = {}