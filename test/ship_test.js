const expect = require('chai').expect
// test suite
describe('Check for Ship', ()=>{
    //add directory route
    const checkForShip = require("../game_logic/ship_logic").checkForShip

    // unit test
    it("Should correctly report no ship at a given players coordinate", function(){
        expect(checkForShip(player, [9, 9])).to.be.false
    });
})