const {ethers} = require('hardhat')
const {assert, expect} = require('chai')

describe("SimpleStorage", ()=>{
    let SimpleStorage, SimpleStorageFactory
    beforeEach(async ()=>{
        SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
        SimpleStorage = await SimpleStorageFactory.deploy()

    })
    it("Current number should return 0",async ()=>{
        const currentNumber = await SimpleStorage.retrieve()
        // console.log('hey',currentNumber)
        const expectedNumber = "0"
        assert.equal(currentNumber.toString(),expectedNumber)
    })
    // it("it should store number", asn)
})