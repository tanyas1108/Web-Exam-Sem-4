// (SET - 9)

// 1)

function higherOrderFunc(callback) {
    console.log("Executing higher-order function");
    callback();
   }
   function callbackFunc() {
    console.log("Executing callback function");
}
higherOrderFunc(callbackFunc);

// -------------------------------------------------------

// 2)

function greet(callback) {
    console.log("Hello!");
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet(sayGoodbye);   