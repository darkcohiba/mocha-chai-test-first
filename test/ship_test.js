const expect = require('chai').expect
// test suite
describe('Check for Ship', ()=>{
    //add directory route
    const checkForShip = require("../game_logic/ship_logic").checkForShip

    // unit test
    it("Should correctly report no ship at a given players coordinate", function(){

        player = {
            ships: [
                {
                    locations : [[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [9, 9])).to.be.false
    });

    it("Should correctly report a ship at a given players coordinate", function(){

        player = {
            ships: [
                {
                    locations : [[0,0]]
                }
            ]
        }
        expect(checkForShip(player, [0, 0])).to.be.true
    });

    it("Should handle ship at more than one coordinate", function(){

        player = {
            ships: [
                {
                    locations : [[0,0], [0, 1]]
                }
            ]
        }
        expect(checkForShip(player, [0, 0])).to.be.true
        expect(checkForShip(player, [0, 1])).to.be.true
        expect(checkForShip(player, [9, 9])).to.be.false
    });
})