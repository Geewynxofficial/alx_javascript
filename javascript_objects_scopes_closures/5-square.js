class Square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
        this.name = "Square";
    }

    get area() {
        return this.height * this.width;
    }
}

module.exports = Rectangle;