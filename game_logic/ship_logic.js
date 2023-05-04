function checkForShip( player, coordinates ) {
    // return false
    let shipPresent, ship;


    for(let i = 0; i < player.ships.length; i++){
        ship = player.ships[i];
        // console.log(ship.locations)
        for (let x of ship.locations){
            if (JSON.stringify(x) === JSON.stringify(coordinates)) {shipPresent = true}
            else shipPresent = false
        }
    }
    return shipPresent;
}
player1 = {
    ships: [
        {
            locations : [[0,0]]
        }
    ]
}
// console.log(checkForShip(player1, [9,0]))
module.exports.checkForShip = checkForShip