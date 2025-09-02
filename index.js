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

function helloWorldFunction()
{
    console.log("Hello") // -> Hello
    console.log("World") // -> World
}

console.log("let's begin:") // -> let's begin:
helloWorldFunction()        //Calling / Invoking a function
console.log("and again:") // -> and again:
helloWorldFunction()
console.log("and once more:") // -> and once more:
helloWorldFunction()

let counter = 100
console.log("Count: ", counter)
{
    let counter = 10
    console.log("Count: ", counter)
}

console.log("Count: ", counter)


