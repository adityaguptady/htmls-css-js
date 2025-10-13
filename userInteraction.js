// All JavaScript code will come here
console.log("This is a sample JavaScript code inside my webpage!")

function helloWorld()
{
    console.log("Hello World!")
}

function confirmDialog()
{
    let decision = window.confirm("Is it OK?")
    console.log(decision)
}

function confirmDialog1()
{
    let remove = confirm("Remove all data?")
    let message = remove ? "Deleting Data" : "Cancelled"
    console.log(message)
}

function promptDialogExample()
{
    let name = window.prompt("What is your name?", "Aditya")
    name = name ? name : "anonymous"
    let age = prompt("Hello " + name + ", how old are you?")
    alert(name + " is " + age + " years old")
}

// let isUserReady = confirm("Are you ready?")
// console.log(isUserReady)
// if(isUserReady)
// {
//     alert("User ready!")
// }

// let unitPrice = 10
// let pieces = prompt("How many pieces do you order?", 0);
// if (pieces > 0) 
// { 
//     let total = unitPrice * pieces
//     console.log(total)
// }
// console.log(total)

// let userAge = prompt("Enter your age:")
// let isFemale = false
// let points = 703
// let cartValue = 299
// let shippingCost = 9.99
// if(userAge > 21)
// { 
//     if (cartValue >= 300 || points >= 500) 
//     { 
//         shippingCost = 0
//     }
// } 
// if(userAge > 21 && (cartValue >= 300 || points >= 500))
//     shippingCost = 0
// alert("Shipping cost: "+shippingCost)

// let num = -1
// if(num >= 0)
// {
//     console.log("The number is positive.")
// }
// else 
// {
//     console.log("Negative")
// }

// let isUserReady = confirm("Are you ready?"); 
// if (isUserReady) 
// { 
//     alert("User ready!")
// } 
// else 
// { 
//     alert("User not ready!")
// }


// let age = prompt("Enter your age:");
// if(age >= 18)       //condition #1
// {
// 	alert("You are able to vote now!");
// } 
// else                //condition #2
// {
//     alert("You are a minor, not eligible to vote");
// }

// let age = prompt("Enter your age:")
// if(age >= 18)       //condition #1
// {
// 	alert("You are able to vote now!")
// } 
// else if(age >= 13)  //condition #2
// {
//     alert("You are a Teenager, welcome to teenage!")
// }
// else
// {
//     alert("You are a minor, not eligible to vote")
// }

// let number = prompt("Enter a number", 0); 
// if (number < 10)
// {
//     alert("<10")
// } 
// else if (number < 30) 
// {
//     alert("<30")
// } 
// else if (number < 60) 
// { 
//     alert("<60")
// }
// else if(number<80)
// {
//     alert("<80")
// }
// else if (number < 90)
// {
//     alert("<90");
// } 
// else if (number < 100) 
// { 
//     alert("<100"); 
// } 
// else if (number == 100) 
// {
//     alert("100")
// } 
// else
// { 
//     alert(">100") 
// }

// let price = 48
// let shippingCost = price > 50 ? 0 : 5
// console.log(`price = ${price}, shipping = ${shippingCost}`)


// let start = confirm("Start?")
// let message = start ? "Here we go!" : "Aborted"
// alert(message)

// let age = 20
// let message = (age >= 18) ? "You are an adult." : "You are a minor."
// console.log("Checking adult age: ", message)

// let number = 7
// let result = (number % 2 === 0) ? "Even" : "Odd"
// console.log("Checking 7 is even or odd : ", result)

// let isLoggedIn = true
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in."
// console.log("Login check: ", welcomeMessage)

// let score = 85
// let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F"
// console.log("Grade: ", grade)

// let gate = prompt("Choose gate: a, b, or c")
// let win = false
// switch(gate) 
// { 
//     case "a": 
//         alert("Gate A: empty")
//  		break
//  	case "b":
//         alert("Gate B: main prize")
//         win = true
//         break
//     case "c": 
//         alert("Gate C: empty")
//         break
//     default: 
//         alert("No gate " + String(gate))
// }
// if(win) 
// { 
//     alert("Winner!")
// }

// let number = 16
// switch (number) 
// { 
//     case 1: 
//         console.log("One")
//         break; 
//     case 2: 
//         console.log("Two")
//         break; 
//     case 3: 
//         console.log("Three")
//         break;
//     default: 
//         console.log("Unknown number"); 
// }


// console.log(0)
// console.log(10)
// console.log(20)
// console.log(30)
// console.log(40)
// console.log(50)
// console.log(60)
// console.log(70)
// console.log(80)
// console.log(90)

// let n = 0
// console.log(n) 
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n)
// n += 10
// console.log(n) 
// n += 10;
// console.log(n)
// n += 10;
// console.log(n)
// n += 10;
// console.log(n)
// n += 10;
// console.log(n)
// n += 10;

// let n = 0           //initialised
// while(n < 91)       //loop -> condition
// {
//     console.log(n)  //console
//     n += 10         //increment
// }

// let isOver = false
// let counter = 1
// while(isOver != true)
// {
//     let continueLoop = confirm(`[${counter}] Continue the loop?`)
//     isOver = continueLoop === true ? false : true
//     counter = counter + 1
// }
// while (!isOver) 
// {
//     isOver = !confirm(`[${counter++}] Continue the loop?`)
// }

// alert("Completed the loop!")

// let fruits = ["apple", "banana", "mango", "Grapes", "Orange"]
// let index = 0
// let myLine = ""
// while (index < fruits.length) 
// {
//     //console.log(fruits[index])
//     //myLine += fruits[index]+" "
//     document.write(fruits[index]+" ")
//     index++
// }
//console.log(myLine)
//console.log(fruits.join(" "))
// let num = 0
// let str = ""
// while(num < 20)
// {
//     num += 2
//     str += num
//     str+= " "
//     //console.log("Num: ", num += 2)
//     // 2->4->6->8...20->22
// }
// console.log(str)

// let num = 20
// while(num >=2)
// {
//     console.log("Num", num)
//     num -= 2
// }

// let isOver
// let counter = 1
// do
// {
//     isOver = !confirm(`[${counter++}] Continue the loop?`)
// }
// while(!isOver);

// let condition = false
// while(condition)
// {
//     console.log("A while loop iteration.") // never executed
// }

// do 
// {
//     console.log("A do ... while loop iteration.") // executed once
// } 
// while (condition);

// console.log("Out of the loop")

// let text = "Divya"
// let i = 0
// do 
// {
//     console.log(text[i])
//     i++
// } 
// while (i < text.length);

// for(let i = 0; i <= 10; i++) 
// { 
//     console.log(i)
// }
// let values = [10, 30, 50, 100]
// let sum = 0
// for(let index = 0; index < values.length; index++) 
// {
//     sum += values[index]
// }					
// console.log(sum)  // 190


// let numbers = [2, 5, 8, 11, 14, 15, 16, 21, 101, 102]
// let evenCount = 0
// for (let i = 0; i < numbers.length; i++) 
// {
//    	if(numbers[i] % 2 === 0) 
//     {
//         evenCount++
//     }
// }
// console.log("Even numbers count:", evenCount)

// let fruits = ["apple", "banana", "mango", "grape"]
// for(let i = fruits.length-1; i >= 0; i--) 
// {
//     console.log(fruits[i])
// }

// let names = []
// let isOver = false
// while (!isOver) 
// {
//     let name = prompt("Enter another name or press cancel.")
//     if (name != null) 
//     {
//         names.push(name)
//     } 
//     else 
//     {
//         isOver = true
//     }
// }
// for (let i = 0; i < names.length; i++)
// {
//     console.log(names[i])
// }

// let values = [10, 30, 50, 100, 110, 200, 250, 300]
// console.log("--------forward--------")
// for (let i = 0; i < values.length; i++) 
// {
//     console.log(values[i]); // -> 10, 30, 50, 100
// }
// console.log("--------Backward--------")
// for (let i = values.length - 1; i > 0; i--) 
// {
//     console.log(values[i]); // -> 100, 50, 30, 10
// }
// console.log("--------Alternatvie--------")
// for (let i = 0; i < values.length; i += 2) 
// {
//     console.log(values[i]); // -> 10, 50
// }


// let values = [10, 30, 60, 100]
// let sum = 0

// for(let number of values) 
// {
//     console.log("number: ",  number)
// }
// // for (let i = 0; i < values.length; i++) 
// // {
// //     sum += values[i];
// // }
// for(let number of values) 
// {
//     sum += number
// }
// console.log(sum); 

// let cities = [
//     { name: "New York", population: 18.65e6 },
//     { name: "Cairo", population: 18.82e6 },
//     { name: "Mumbai", population: 19.32e6 },
//     { name: "São Paulo", population: 20.88e6 },
//     { name: "Mexico City", population: 21.34e6 },
//     { name: "Shanghai", population: 23.48e6 },
//     { name: "Delhi", population: 25.87e6 },
//     { name: "Tokyo", population: 37.26e6 }
// ];

// for(let city of cities)
// {
//     if(city.population > 20e6)
//         console.log("City: "+city.name+" | Population: "+city.population)
// }

// let myObject = {
//     abc: "ABC"
// }

// let key = "abc"

// myObject.abc

// let user = 
// {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@teleworm.us"
// };
// for(let key in user) 
// {
//   	console.log("Key: ", key)
//     console.log("Value: ", user[key])
// };

// let user = 
//     { 
//         name: "Swati", 
//         age: 25 
//     }
// for(let key in user) 
// { 
//     console.log(`${key}: ${user[key]}`)
// }

// const array1 = ["a", "b", "c"]
// for(element of array1)
// {
//   	console.log(element)
// }

// let i = 0
// while(true)
// {
//     console.log(i)
//     i++
//     console.log("...")
//     if(i >= 5) 
//     {
//         console.log("now Breaking")
//         break
//         console.log("Breaked now!")
//     }
// }
// console.log('Exited the loop with break')

// for(let i = 0; i < 10; i++) 
// {
//     if(i == 3)
//     {
//         continue
//     }
//     console.log("i: ", i)
// }

// let fruits = ["apple", "banana", "mango", "orange", "grapes"]
// for(let i = 0; i < fruits.length; i++) 
// {
//     if (fruits[i] === "mango") 
//     {
//         console.log("Mango found at index " + i)
//         break
//     }
//     console.log("Fruit: ", fruits[i])
// }
// console.log("Outside the loop!")

// for (let i = 1; i <= 10; i++) 
// {
//     if (i % 2 !== 0) 
//     {
//         continue
//     }
//     console.log("i: ", i)
// }

let gate = prompt("Choose gate: a, b, or c");
let win = false
switch(gate) 
{
    case 1:
    case "1":
    case "A":
    case "a":
        alert("Gate A: empty")
        break
    case 2:
    case "2":
    case "B":
    case "b":
        alert("Gate B: main prize")
        win = true
        break
    case 3:
    case "3":
    case "C":
    case "c":
        alert("Gate C: empty")
        break
    default:
        alert("No gate " + String(gate))
}
if (win) 
{
    alert("Winner!");
}
    

