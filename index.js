// Follow along with the examples here

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");

  }
  sayHelloToGuadalupe();

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }

  sayHelloToLiz();
  sayHelloToSamip();

  //arguements into functions
  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");//passing the arguement into the function

//   parameter example
// function sayHelloTo(firstName) //firstname is the parameter
// {
//     console.log(`Hello, ${firstName}!`);// we can access the value using the parameter name, interpolate it into a string and log the string to the terminal
//   }
  
//   sayHelloTo("Guadalupe"); // "Hello, Guadalupe!" //the value of the arguement (guadalupe) gets stored in the parameter firstname
//   sayHelloTo("Jane"); // "Hello, Jane!"
//   sayHelloTo("R2-D2"); // "Hello, R2-D2!"
//   sayHelloTo(1); // "Hello, 1!"

  //console.log(firstName);// variable scope (it will bring an error because if a varaiable is defined inside a parameter or body function it can only be accessed inside that function)

  // added something new 
  // function say(greeting, firstName) {
  //   console.log(`${greeting}, ${firstName}!`);
  // }

  // say("Goodbye", "Julio");

  //order of arguements
  // function say(greeting, firstName) {
  //   console.log("firstName: ", firstName);
  //   console.log("greeting: ", greeting);
  //   console.log(`${greeting}, ${firstName}!`);
  // }

  say("Julio", "hello");

  // return values in javascript
  function add(x, y) {
    return x + y;
  }
  console.log(add(80, 9000));

  // example 2
  // function say(greeting, firstName) {
  //   return `${greeting}, ${firstName}!`;
  // }

  // console.log(say("Hello", "Liz")); //call a function 

  // log our function 
  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`); 
  }

  console.log(say("Hello", "Liz")); //log the function

  // return function and log a string
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
 
  }

  console.log(say("Howdy", "partner"));