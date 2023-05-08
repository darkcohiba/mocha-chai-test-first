function checkForShip( player, coordinates ) {
    // return false
    let shipPresent, ship;


    for(let i = 0; i < player.ships.length; i++){
        ship = player.ships[i];

        shipPresent = ship.locations.filter( (coord)=>{
            return (coord[0] === coordinates[0]) && (coord[1] === coordinates[1])
            // return JSON.stringify(coord) === JSON.stringify(coordinates)
        })[0]
        // console.log(ship.locations)
        // for (let x of ship.locations){
        //     if (JSON.stringify(x) === JSON.stringify(coordinates)) {shipPresent = true}
        //     else shipPresent = false
        // }
        if (shipPresent){
            return true;
        }
    }

    return false;

}
player1 = {
    ships: [
        {
            locations : [[0,0]]
        }
    ]
}
// console.log(checkForShip(player1, [0,0]))
module.exports.checkForShip = checkForShip