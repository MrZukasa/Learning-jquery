//Regular function call can be:
_____________________________________________________________________
//Simple invocation:
function myFunction() {
  console.log(this);
}
myFunction(); // logs global object (window)
_____________________________________________________________________

//Method invocation:
const myObject = {
  method() {
    console.log(this);
  }
};
myObject.method(); // logs myObject
_____________________________________________________________________

//Indirect invocation
function myFunction() {
  console.log(this);
}

const myContext = { value: 'A' };

myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }
_____________________________________________________________________

//Constructor invocation:
function MyFunction() {
  console.log(this);
}

new MyFunction(); // logs an instance of MyFunction
_____________________________________________________________________

//Arrow function as a callback()
const myObject = {
  myMethod(items) {
    console.log(this); // logs myObject
    const callback = () => {
      console.log(this); // logs myObject
    };
    items.forEach(callback);
  }
};

myObject.myMethod([1, 2, 3]); 
_____________________________________________________________________

//Arrow function cant declare a constructor
const Car = (color) => {
  this.color = color;
};

const redCar = new Car('red'); // TypeError: Car is not a constructor 
_____________________________________________________________________

//The Arrow Function have implicit return
const increment = (num) => num + 1;

increment(41); // => 42
_____________________________________________________________________

//define methods on a class (usual way)
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName() {
    console.log(this.heroName);
  }
}

const batman = new Hero('Batman');

//if you search fo "this" value, you will find "undefined" after 1bsec
setTimeout(batman.logName, 1000);
//to have "this" binded to the context you need
setTimeout(batman.logName.bind(batman), 1000);
_____________________________________________________________________

//in arrow function you just need 
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName = () => {
    console.log(this.heroName);
  }
}

const batman = new Hero('Batman');

//after that the value of "this" will be
setTimeout(batman.logName, 1000);
// after 1 second logs "Batman"
_____________________________________________________________________
