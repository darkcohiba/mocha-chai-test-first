const expect = require('chai').expect

describe("Math Tests", ()=>{
    const addition = require("../algo/math").addition
    it("Addition function should return two numbers summed", ()=>{
        expect(addition(2, 8)).to.be.equal(10);
        expect(addition(8, 8)).to.be.equal(16);
    })
})