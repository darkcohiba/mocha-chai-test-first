const expect = require('chai').expect

describe('Math 2 Tests', ()=>{
    const mathTwo = require('../algo/math2')

    it("'addition' should add two numbers together", ()=>{
        expect(mathTwo.addition(2, 2)).to.equal(4)
    })
})
