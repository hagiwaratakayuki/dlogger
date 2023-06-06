const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const assert = require("node:assert");
require("@nomicfoundation/hardhat-chai-matchers")

function var_dump(value) {
  for (const key in value) {
    console.dir(key);
    console.dir(value[key]);
  }

}

describe("Loger", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    

    
    const [owner, otherAccount] = await ethers.getSigners();

    const Logger = await ethers.getContractFactory("Logger");
    const logger = await Logger.deploy();

    return { logger,  owner, otherAccount };
  }

  describe("Basic", function () {
    it("Should Saved Data is Valid", async function () {
      const { logger,  owner, otherAccount} = await loadFixture(deployOneYearLockFixture);
      await logger.addLog('test');
      await logger.addLog('test2');
      const obj1 = await logger.objects(1)
      assert.equal(obj1['log'], 'test')
      assert.equal(obj1['prev'], BigInt(0))
      const obj2 = await logger.objects(2)
      assert.equal(obj2['log'], 'test2')
      assert.equal(obj2['prev'], BigInt(1))
      
      const ownerAddress = owner.address.toLowerCase();
      

     
      await expect(logger.addLog('test3')).to.emit(logger, "onAddLog").withArgs('test3', ownerAddress, ownerAddress, anyValue, anyValue);
      const res = await logger.readLog(ownerAddress, ownerAddress, 0);
      
      const results = Object.values(res['0']).filter(function(row) {
          return row.log != false
      });
      
      const head = res['1'];

      assert.equal(3, results.length);
      assert.equal('test3', results[0].log);
      assert.equal('test2', results[1].log);
      assert.equal('test', results[2].log);
      assert.equal(BigInt(0) , BigInt(head._hex));
     

     

    });

    

  });

  
});
