#!/usr/bin/node
const Square = require('./5-square');
class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    area () {
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }

    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }
        for (let i = 0; i < this.height; i++) {
            let row = '';
            for (let j = 0; j < this.width; j++) {
                row += c;
            }
            console.log(Square);
        }
    }
}
module.exports = Square;
