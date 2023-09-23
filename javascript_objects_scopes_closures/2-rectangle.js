#!/usr/bin/node
const Rectangle = require('./2-rectangle');
class Rectangle {
    constructor(w, h) {
        if ( w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            return {};

        } else {
            this.width = w;
            this.height = h;
        }
    }
}
