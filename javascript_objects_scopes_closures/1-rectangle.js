class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
}

const r1 = new Rectangle(3, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);

const r2 = new Rectangle(3, -3);
console.log(r2);
console.log(r2.width);
console.log(r2.height);

const r3 = new Rectangle(3);
console.log(r3);
console.log(r3.width);
console.log(r3.height);
module.exports = {r1};
module.exports = {r2};
module.exports = {r3};