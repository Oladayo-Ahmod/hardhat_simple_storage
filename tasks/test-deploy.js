const {ethers} = require('hardhat')

let SimpleStorage, SimpleStorageFactory
describe("simple-storage", ()=>{

    beforeEach(async ()=>{
        SimpleStorage = await ethers.getContractFactory('SimpleStorage')
        SimpleStorageFactory = SimpleStorage.deploy()
    })
    it("Current number should return 0")
})