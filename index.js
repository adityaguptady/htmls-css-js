//"use strict";
console.log(6)

// console.info("This is information")

// console.error("This is information")

//console = 10

// let height = 165
// console.log(height)

// let height = 165
// console.log(height)

// var length = 155
// console.log(length)

// var length = 210
// console.log(length)

// length = 1000
// console.log(length)

// let height = 180
// let anotherHeight = height
// console.log(height) // -> 180
// console.log("height")   //height

// console.log("height:"+height)

// console.log(anotherHeight) // -> 180

// let weight      //Declaration

// weight = 100    //initialisation
// console.log(weight)     //accessing the variable

// count = 10
// console.log(count)
// count = count + 100
// console.log(count)

// console.log(weight)
// weight = "100"
// console.log(weight)

// weight = weight + count
// console.log(weight)
// console.log(count + weight)

// const name = "Aditya"
// console.log("Constant: ", name)

// name = "Sandeep"
// console.log("Constant: ", name)

// const age = 20
// console.log("Age: ", age)

// //Programming
// let counter;
// console.log(counter); // -> undefined
// {   //local scope // Programming block
//     counter = 1;
//     {
//         console.log(counter); // -> 1
//     }
//     let count = 2   //let defins the local variable
//     console.log("Count: ", count)

//     var number = 10 // defins all the variable as global for whole file
//     console.log("Number: ", number)
// }
//count = 3
//console.log("Count: ", count)   // erroneous

//number = 12
// console.log("Number: ", number) // not erroneous


// counter = counter + 1;
// console.log(counter); // -> 2

// let height = 180
// {
//    let weight = 70
//    console.log(height) // -> 180
//    console.log(weight) // -> 70   
// }
// console.log(height) // -> 180
// console.log(weight) // -> Uncaught ReferenceError: weight

// function helloWorldFunction()
// {
//     console.log("Hello") // -> Hello
//     console.log("World") // -> World
// }

// console.log("let's begin:") // -> let's begin:
// helloWorldFunction()        //Calling / Invoking a function
// console.log("and again:") // -> and again:
// helloWorldFunction()
// console.log("and once more:") // -> and once more:
// helloWorldFunction()

// let counter = 100
// console.log("Count: ", counter)     //100
// {
//     let counter = 10
//     console.log("Count: ", counter) //10
// }

// console.log("Count: ", counter)     //100

// var counter = 100
// function printCounter()
// {
//     let counter = 200                   //shadow variable
//     console.log("Counter: ", counter)   // 200
// }

// console.log("Counter: ", counter)       // 100
// printCounter()
// console.log("Counter: ", counter)       // 100


//Hoisting -> Javascript

// console.log("Counter: ", counter)

// var counter = 100

// console.log("Counter: ", counter)
// printCounter()

// function printCounter()
// {
//     let counter = 200                   //shadow variable
//     console.log("Counter: ", counter)   // 200
// }

// let year = 1990
// console.log("Year: ", year)

// console.log("Type of Year variable is: ", typeof year)

// let month
// console.log("Month: ", month)
// console.log("Type of Month variable is: ", typeof month)

// let name = "Aditya"
// console.log("name: ", name)

// let typeOfName = typeof name

// console.log("Type of name variable is: ", typeof name)
// console.log("typeOfName: ", typeOfName)

// function a()
// {
    
// }

// console.log(typeof a)

// let isDataValid = true;
// let isStringTooLong = false;
// let isGameOver = false;
// continueLoop = true;

// console.log(false); // -> false
// console.log(typeof false); // -> boolean
// console.log(isDataValid); // -> true
// console.log(typeof isDataValid); // -> boolean


// const year = 1991
// let delayInSeconds = 0.00016
// let area = (16 * 3.14)
// let halfArea = area / 2
// console.log(year) // -> 1991
// console.log(typeof year) // -> number
// console.log(typeof delayInSeconds)

// let a = 10; // decimal - default 
// let b = 0x10; // hexadecimal 
// let c = 0o10; // octal 
// let d = 0b10; // binary 
// console.log(a); // -> 10 
// console.log(b); // -> 16 
// console.log(c); // -> 8 
// console.log(d); // -> 2 
// let x = 9e3;
// let y = 123e-5;
// console.log(x); // -> 9000
// console.log(y); // -> 0.00123

let a = 1 / 0
let b = -Infinity
console.log(a) // -> Infinity
console.log(b) // -> -Infinity
console.log(typeof a) // -> number
console.log(typeof b) // -> number
let s = "it's definitely not a number"
let n = s * 10
console.log(n) // -> NaN
console.log(typeof n) // -> number
