const {ethers} = require('hardhat')
const {assert, expect} = require('chai')

describe("SimpleStorage", ()=>{
    let SimpleStorage, SimpleStorageFactory
    beforeEach(async function(){
        SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
        SimpleStorage = await SimpleStorageFactory.deploy()

    })
    it("Current number should return 0",async function(){
        const currentNumber = await SimpleStorage.retrieve()
        // console.log('hey',currentNumber)
        const expectedNumber = "0"
        assert.equal(currentNumber.toString(),expectedNumber)
    })
})