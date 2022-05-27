// import using require
import Shape from './shape.js';


// declare class
class Circle extends Shape{
  constructor(){
   super();
  }
  calculateArea(){
    console.log("calculateArea inside a Circle");
  }
}
let c=new Circle();
c.calculateArea();
console.log(c.color);
export default Circle;


// export class using module.exports