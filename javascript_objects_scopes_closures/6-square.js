#!/usr/bin/node
const SquareR = require('./5-square');
// class Rectangle {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     area () {
//         return this.height * this.width;
//     }
// }

class Square extends SquareR {
    // constructor(size) {
    //     super(size, size);
    //     this.size = size;
    // }

    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }
        for (let i = 0; i < this.height; i++) {
            let g = '';
            for (let j = 0; j < this.width; j++) {
                g += c;
            }
            console.log(g);
        }
    }
}

module.exports = Square;