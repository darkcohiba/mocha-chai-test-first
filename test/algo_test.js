const expect = require('chai').expect

describe("Math Tests", ()=>{
    const math = require("../algo/math")
    it("Addition function should return two numbers summed", ()=>{
        expect(math.addition(8, 8)).to.be.equal(16);
        expect(math.addition(2, 8)).to.be.equal(10);
    })

    it("'Divided' function should return two numbers divided", ()=>{
        expect(math.divide(8, 8)).to.be.equal(1);
        expect(math.divide(16, 8)).to.be.equal(2);
    })




})