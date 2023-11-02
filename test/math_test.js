const expect = require('chai').expect

describe("Math Tests", ()=>{
    const math = require("../algo/math")
    
    // it("'Addition' function should return two numbers summed", ()=>{
    //     expect(math.addition(8, 8)).to.be.equal(16);
    //     expect(math.addition(2, 8)).to.be.equal(10);
    //     expect(math.addition(20, -12)).to.be.equal(8);
    //     expect(math.addition(2, "8")).to.be.equal("28");
    // })

    it("'Divided' function should return two numbers divided", ()=>{
        expect(math.divide(10, 5)).to.be.equal(2);

    })

    // it("'Subtract' function should return the first number minus the second number", ()=>{
    //     expect(math.subtract(8, 8)).to.be.equal(0);
    //     expect(math.subtract(16, 8)).to.be.equal(8);
    // })

    // it("'Multiply' function should return the first number minus the second number", ()=>{
    //     expect(math.multiply(8, 8)).to.be.equal(64);
    //     expect(math.multiply(2, 2)).to.be.equal(4);
    // })

    // it("'Modulo' function should return the first number minus the second number", ()=>{
    //     expect(math.modulo(8, 3)).to.be.equal(2);
    //     expect(math.modulo(10, 4)).to.be.equal(2);
    // })

    // it("'Exponent' function should return the first number minus the second number", ()=>{
    //     expect(math.exponent(8, 2)).to.be.equal(64);
    //     expect(math.exponent(10, 2)).to.be.equal(100);
    // })




})