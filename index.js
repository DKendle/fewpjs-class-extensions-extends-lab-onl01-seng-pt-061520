// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((total, i) =>  total + i)
    }
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}