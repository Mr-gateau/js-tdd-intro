// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    if(this.a = this.b){
      console.log('its true')
      return true;
    }else{
      console.log('its false')
      return false;
    }
  }

  getArea() {
    const area = this.a * this.b;
    return area
  }

  getPerimeter() {
    const long = this.a * 2;
    const haut = this.b * 2;
    return long + haut;

  }
}

module.exports = Rectangle;
