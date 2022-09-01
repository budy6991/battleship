export class Ship {
    constructor (shipLength, hit, shunk) {
        this.shipLength = shipLength
        this.hit = hit 
        this.shunk = shunk
    }

    hit(num) {
        //Marks that num/position as hit
    }

    isSunk() {
        if (this.shipLength === 0) {
            this.shunk === true
        }
    }
}



