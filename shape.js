// declare class
class Shape{
    constructor(){
      this.color="black";
    }
    drawShape(){
      console.log("draw Shape");
    }
    calculateArea(){
      console.log("calculateArea in Shape.js");
    }
  }

export default Shape;
  // export class using module.exports