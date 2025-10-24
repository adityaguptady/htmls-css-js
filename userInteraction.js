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

// let gate = prompt("Choose gate: a, b, or c");
// let win = false
// switch(gate) 
// {
//     case 1:
//     case "1":
//     case "A":
//     case "a":
//         alert("Gate A: empty")
//         break
//     case 2:
//     case "2":
//     case "B":
//     case "b":
//         alert("Gate B: main prize")
//         win = true
//         break
//     case 3:
//     case "3":
//     case "C":
//     case "c":
//         alert("Gate C: empty")
//         break
//     default:
//         alert("No gate " + String(gate))
// }
// if (win) 
// {
//     alert("Winner!");
// }
    

// let temperatures;
// let sum;
// let meanTemp;
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// for (let i = 0; i < temperatures.length; i++) 
// {
//     sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`);
// getMenTemp(temperatures)
// console.log("---------------")
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// sum = 0;
// for (let i = 0; i < temperatures.length; i++) 
// {
//     sum += temperatures[i];
// }
// meanTemp = sum / temperatures.length;
// console.log(`mean: ${meanTemp}`);
// getMenTemp(temperatures)

// function getMenTemp(temperatures)
// {
//     sum = 0;
//     for (let i = 0; i < temperatures.length; i++) 
//     {
//         sum += temperatures[i]
//     }
//     meanTemp = sum / temperatures.length
//     console.log(`mean: ${meanTemp}`)
// }

// showName()
// function showName() 
// {
//     console.log(name)
// }
//let name = "Alice"
//var name = "Alice"

// let name = "Alice"
// function showName()
// {
//     console.log(name);
// }
// showName()

// function sayHello()
// {
//   	console.log("Hello, world!");
// }
// console.log("About to call the function...");
// sayHello(); 
// console.log("Function call finished.");
// function showMessage() 
// {
//     alert( 'Hello everyone!')
// }
// showMessage();

// let userName = 'John';
// function showMessage() 
// {
//   let message = 'Hello, ' + userName
//   console.log("Message: ", message)
// }
// showMessage()
// //console.log("Message: ", message)
// console.log("userName: ", userName)

// function showMsg()
// {
//     console.log("message 2")
//     return
//     console.log("message 3")
// }
// console.log("message 1")
// showMsg()
// console.log("message 4")

// function getTrue() 
// {
//    	return true
// }
// let test = getTrue()
// console.log(test)
// if(test)
// {
//     console.log("Yay!")
// }
// else
// {
//     console.log("Oh No!")
// }
// let temperatures;
// let sum;
// let meanTemp;
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// console.log("Mean Temp: ", getMenTemp(temperatures))    //temperatures -> argument
// console.log("---------------")
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
// meanTemp = getMenTemp(temperatures)
// console.log("Mean Temp: ", meanTemp)

// function getMenTemp(temp)   //temp -> parameter
// {
//     let a = 0;
//     sum = 0;
//     for (let i = 0; i < temp.length; i++) 
//     {
//         sum += temp[i]
//     }
//     //meanTemp = sum / temperatures.length
//     return sum / temp.length
// }

// function add(first, second) 
// {
//     console.log("First Param: ", first)
//     console.log("Second Param: ", second)
//   	return first + second
// }
// let result = add(7, 5)
// console.log(result)

// function checkAge(name, age, contact)
// {
//     console.log("Name : ", name)
//     console.log("age : ", age)
//     console.log("contact : ", contact)
//     if(age>=18)
//     {
//         console.log("You can vote now!")
//     }
//     else
//     {
//         console.log("Oh no, you have to wait to vote!")
//     }
// }
// checkAge(10, 9876543210, "Aditya")
// checkAge("Aditya", 10, 9876543210)

// let names = ["Alice", "Bob", "Eve", "John"];
// let name = getElement(names, 2)
// console.log(name); 

// function getElement(array, index)
// {
//     return array[index]
// }

// let count = 0
// console.log("count from global: ", count)
// syaHello()
// console.log("count from global: ", count)
// function syaHello()
// {
//     let count = 10  // shadows the global variable inside the function
//     console.log("count from function: ", count)
// }

// function add(first, second) 
// {
//     return first + second
// }
// let first = 10, second = 20, third = 40, fourth = 80
// console.log(add(first, second))//
// console.log(add(second, third))
// console.log(add(third, fourth))

// let a = 100, b = 200, c = 300;
// //global scope -> parent
// function test(a) 
// {
//     //local scope -> child
//     let b = 10;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// test(1)
// console.log(a);
// console.log(b); 
// console.log(c); 

// function showMessage(message) 
// {
//     console.log(`Message: ${message}`);
// }
// console.log(showMessage)

// let sm = showMessage
// console.log("sm: ", sm)
// sm("sm")
// showMessage("Show Message")

// function doNothing() 
// {
//     return undefined
// }

// let a = doNothing(); // assign result of function call
// let b = doNothing;   // assign a function
// console.log(typeof a); // -> undefined
// console.log(typeof b); // -> function

function add(a, b) 
{
    if (typeof a !== "number" || typeof b !== "number") 
    {
        return "Invalid input: numbers expected";
   	}
  	return a + b;
}
console.log(operation(add, "ten", 20))
console.log(operation(add, 10, "Twenty"))
function multiply(a, b) 
{
 	return a * b;
}
function operation(func, first, second) 
{
 	return func(first, second);
}
console.log(operation(add, 10, 20))//30 
console.log(operation(function(a,b)
{
    return a + b
}, 40, 60))//30 
console.log(operation(multiply, 10, 20))//200


//Named function expression
// let myAdd = function(a, b) 
// {
//     return a + b;
// }

// console.log(myAdd(20, 40))

// function getMeanTemp(temperatures) 
// {
//     if (!(temperatures instanceof Array)) 
//     {
//         return NaN;
//     }
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) 
//     {
//     	sum += temperatures[i];
//     }
//    	return sum / temperatures.length;
// }
// console.log(getMeanTemp([10, 20, 30])); 
// console.log(getMeanTemp("not an array")); 
