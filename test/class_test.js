const expect = require('chai').expect

describe("Class Tests", ()=>{
    const math = require("../algo/class")
    it("should multiply two numbers together and return the number", ()=>{
        expect(math.multiply(4, 4)).to.equal(16)
    })

    it('should return the sum of two numbers', ()=>{
        expect(math.addition(1, 1)).to.equal(2)
    })

    it ('should return the sum of two numbers divided by the third number', ()=>{
        expect(math.square(3, 3, 3)).to.equal(2)
    })

    it ('should return the sum of two numbers divided by the third number', ()=>{
        expect(math.square(3, 3, 3)).to.equal(2)
    })
})

