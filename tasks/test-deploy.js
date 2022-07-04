const {ethers} = require('hardhat')
const {assert, expect} = require('chai')
let SimpleStorage, SimpleStorageFactory
describe("simple-storage", ()=>{

    beforeEach(async ()=>{
        SimpleStorage = await ethers.getContractFactory('SimpleStorage')
        SimpleStorageFactory = SimpleStorage.deploy()
    })
    it("Current number should return 0",async ()=>{
        const currentNumber = await SimpleStorage.retrieve()
        const expectedNumber = "0"
        assert.equal(currentNumber.toString(),expectedNumber)
    })
})