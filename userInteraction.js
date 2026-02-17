// All JavaScript code will come here
// console.log("This is a sample JavaScript code inside my webpage!")

// function helloWorld()
// {
//     console.log("Hello World!")
// }

// function confirmDialog()
// {
//     let decision = window.confirm("Is it OK?")
//     console.log(decision)
// }

// function confirmDialog1()
// {
//     let remove = confirm("Remove all data?")
//     let message = remove ? "Deleting Data" : "Cancelled"
//     console.log(message)
// }

// function promptDialogExample()
// {
//     let name = window.prompt("What is your name?", "Aditya")
//     name = name ? name : "anonymous"
//     let age = prompt("Hello " + name + ", how old are you?")
//     alert(name + " is " + age + " years old")
// }

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

// function add(a, b) 
// {
//     if (typeof a !== "number" || typeof b !== "number") 
//     {
//         return "Invalid input: numbers expected";
//    	}
//   	return a + b;
// }
// console.log(operation(add, "ten", 20))
// console.log(operation(add, 10, "Twenty"))
// function multiply(a, b) 
// {
//  	return a * b;
// }
// function operation(func, first, second) 
// {
//  	return func(first, second);
// }
// console.log(operation(add, 10, 20))//30 
// console.log(operation(function(a,b)
// {
//     return a + b
// }, 40, 60))//30 
// console.log(operation(multiply, 10, 20))//200


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

// let inner = function() 
// {
//   	console.log('inner 1')
// }
// let outer = function(callback) 
// {
//  	console.log('outer 1')
//   	callback()
//    	console.log('outer 2')
// }
// console.log('test 1')
// outer(inner)
// console.log('test 2')

// test 1
// outer 1
// inner 1
// outer 2
// test 2

// function calculate(a, b, operation) 
// {
//     return operation(a, b)
// }
// function add(x, y) 
// {
//     return x + y
// }
// function subtract(x, y) 
// {
//    	return x - y
// }
// console.log(calculate(5, 3, add))
// console.log(calculate(5, 3, subtract))

// console.log("Start")
// setTimeout(function() 
// {
//   	console.log("This runs after 1 second");
// }, 1000)
// console.log("End")

/*
Start
End
This runs after 1 second
*/

// let counter = 0
// console.log("Start")
// let intervalId = setInterval(function() 
// {
//    	console.log("Repeating:", ++counter)
// }, 1000)
// setTimeout(function() 
// {
//    	clearInterval(intervalId);
//    	console.log("Stopped");
// }, 5500)
// console.log("End!")

// window.addEventListener("click", function() 
// {
//     console.log("clicked!")
// })

// let evenArray = []
// for(let count = 0; count<array.length; count++)
// {
//     if(array[count] %2 === 0)
//     {
//         evenArray.push(array[count])
//     }
// }
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let evenArray = array.filter(function(element)
// {
//     if(element %2 === 1)
//     {
//         return true
//     }
//     return false
// })

// console.log(array)
// console.log(evenArray)

// let array = ["Aditya", "Sandeep", "Diksha", "George", "Chandresh", "Anjali", "Kuljot"]
//Aditya, Diksha, Chandresh

// let newArray = array.filter(function(element)
// {
//     return element !== "Aditya" && element !== "Diksha" && element !== "Chandresh"
// })
// console.log(newArray)

//Aditya => Aditya Gupta

// let newArray = array.map(function(element)
// {
//     if(element === "Aditya")
//         return "Aditya Gupta"
//     return element+"--"
// })
// console.log(array)
// console.log(newArray)

// let array1= [10, 20, 30, 40, 50, 60, 70]

// let newArray1 = array1.map(function(element)
// {
//     return element+2
// })
// console.log(array1)
// console.log(newArray1)

// function sum(a, b)
// {
//     return a+b
// }

// console.log(sum(5, 3))
// let newSum = (a,b) => 
// { 
//     return a+b 
// }
// console.log(newSum(5, 4))

// let names = ['Alice', 'Eve', 'John']
// function showName(element) 
// {
//     console.log(element)
// }

// let showName = (element) => console.log(element)
// names.forEach(showName) // -> Alice, Eve, John
// showName("Aditya")

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let myFunction = (element) => console.log(element+11)
// array.forEach(myFunction)
// console.log(array)

// let square = x => x * x
// console.log(square(5))

// function factorial(n) 
// {
//     return n > 1 ? n * factorial(n - 1) : 1
// }
// function factorial(n) 
// {
//     let result = 1;
//     while (n > 1) 
//     {
//         result *= n;
//         n--;
//      }
//     return result;
// }
// console.log(factorial(5))
/*
120
n => 5
returns => 5 * 24
               n = 4
               returns => 4 * 6
                              n = 3
                              returns => 3 * 2
                                             n = 2
                                             returns => 2 * 1
                                                            n = 1
                                                            returns => 1
*/

// Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout. 
// Example of use and expected results:1,2,3,4,5,6,7,8,9,10.
// 1-> print consicutive number till 10
// 2-> every number should be printed with 2 sec interval
// 
// for(let count = 1; count<=10; count++)
// {
//     setTimeout(function(){
//         console.log(count)
//     }, 2 * 1000)
// }

// let count = 1
// let intervalID = setInterval(() => {
//     console.log(count++)
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalID)
// }, (10 * 1000)+100);

// try
// {
//     console.log("Starting of Try")
//     let a = 10
//     console.log(a/0)
//     console.log("Ending of Try")
// }
// catch(error)
// {
//     console.log("Hey that crashed, no issues, please check the code again and try!")
// }

// let value = 100 * "xyz";
// console.log("Value: ", value)
// if (isNaN(value)) 
// {
//     console.log("Error: Result is not a number."); 
//     //Try again function
// }

// let array = 1//[1, 2, 3, 4, 5]
// if(array instanceof Array)
// {
//     console.log("Yes, we got the Array")
// }
// else
// {
//     console.log("Error: Not an array!!!")
// }

// let a = -2
// try 
// {
//     a = 2
// } 
// catch(error)
// {
//     if (error instanceof ReferenceError)
//     {
//         console.log("Reference error, reset a to -2")
//         a = -2
//    	}
//     else
//     {
//         console.log("Other error - " + error);
//     }
// }
// console.log(a)

// let a = 10;
// try 
// {
//     a = b;
// }
// catch(error)
// {
//     console.log("Error: ", error)
// }
// finally 
// {
//     console.log("Finally: ", a);
// }
// console.log("Outside:", a)

// let a = 10;
// try 
// {
//     a = b; 
// } 
// catch(error) 
// {
//     try 
//     {
//    	    console.log(b);
//     } 
//     catch(error2)
//     {
//      	console.log("Second catch!", error2); 
//     }
// } 
// finally 
// {
//     console.log("Finally!"); 
// }

// console.log("start");
// throw 100;
// console.log("end");

// console.log("start");
// throw ReferenceError("This is my Custom Reference Error!!!")
// console.log("end");

// console.log("start"); 
// try 
// {
//     throw 100;
// } 
// catch (error) 
// {
//     console.log(error); 
// }
// console.log("end"); 
// function factorial(n) 
// {
//     if (n > 20) 
//     {
//         throw new RangeError("Max value 20");
//     }

//     let result = 1
//     for (; n > 1; n--) 
//     {
//         result = result * n
//    	}
//     return result;
// }

// console.log(factorial(3))
// console.log(factorial(5))
// console.log(factorial(8))
// console.log(factorial(20))
// console.log(factorial(1000))

// function average(a, b) 
// {
//     return a + b / 2;
// }
// console.log(average(2, 10));   
// console.log(average(5, 5)); 

// function largest(a, b, c) 
// {
//     if (a > b && a > c) 
//     {
//         return a;
//     } 
//     else if (b > a && b > c) 
//     {
//         return b;
//     } 
//     else 
//     {
//         return c;
//     }
// }
// console.log(largest(1, 1, 2)); 
// console.log(largest(1, 2, 3)); 
// console.log(largest(3, 2, 1)); 
// console.log(largest(2, 2, 1)); //failed

// console.log("Before debugger");
// debugger;
// console.log("After debugger");
// function outer() 
// {
//     let name = "outer";
//     let str = inner();
//     return str;
// }

// function inner() 
// {
//     let name = "inner";
//     name = "new game"
//     return "Hello !";
// }
// console.log("before outer() call");
// //debugger;
// console.log(outer());
// console.log("after outer() call");

// let part = 0;
// console.time("Leibniz")
// for (let k = 0; k < 10000000; k++) 
// {
//     part = part + ((-1) ** k) / (2 * k + 1)
// }
// console.timeEnd("Leibniz")
// let pi = part * 4;
// console.log(pi); // -> 3.1415925535897915 

// let end = 2; 
// for(let i=1; i<end; i++)
// { 
//     console.log(i); 
// }

// let counter = 0; 
// let maxValue = 10; 
// let result = 1; 
// debugger; 
// for (counter = 0; counter < maxValue; counter++) 
// { 
//     console.log(result); 
//     result *= maxValue - counter - 1; 
// } 
 
// console.log("Final result: ", result);

// console.log(typeof 2.5); 
// console.log(typeof "one two three"); 
// console.log(typeof false);
// let nr = 2.5; 
// nr = nr / 2;
// console.log("nr:", nr);
// console.log(typeof nr);

// let a = [10, 20, "en to tre", true, 50]
// a[4] = a[4] * 2;
// console.log(a[0]);  
// console.log(a[2]);  
// console.log(a[4]);  
// console.log(a)
// console.log(typeof a)

// let sampleObject = 
// {
//     id: 10, 
//     delay: 20,
//     name: "en to tre",
//     isPresent: true,
//     delay: 50
// }
// sampleObject.delay = sampleObject.delay * 2;
// console.log(sampleObject.id);   
// console.log(sampleObject.name); 
// console.log(sampleObject.delay);

// let contact = {}
// console.log("Contact: ", contact)
// console.log(typeof contact)
// contact.tel = "207-662-5412";
// console.log(contact);
// console.log(contact.tel);
// console.log("Contact: ", contact)
// console.log(typeof contact)

// contact["#code"] = 123
// console.log(contact["#code"])//flexibility

// contact["email.work"] = "abc@work.com"
// contact["email.personal"] = "def@work.com"

//console.log(contact"email.work")
// console.log(contact["email.work"])
// console.log(contact["email.personal"])

//contact.first name = "Aditya"
// contact["first name"] = "Aditya"
// console.log(contact["first name"])

// let contact = 
// {
//     email_1: "RonaldSMurphy@freepost.org",
//     email_2: "rsmurphy@briazz.com"
// };
// for(i=1; i<=2; i++) 
// {
//     let key = "email_" + i;
//     console.log(key);
//     console.log(contact[key]);
// }

// let contact = {}
// let email = prompt("Enter email....")
// let count = 1
// while(email)
// {
//     contact["email_"+count] = email
//     count++
//     email = prompt("Enter email....")
// }
// console.log("contact: ", contact)
// for(let count1 = 1; count1<=Object.keys(contact).length; count1++)
// {
//     console.log(contact["email_"+count1])
// }

// let test = 
// {
//     nr: 10, 
//     b: false, 
//     str: "uno dos tres", 
//     arr: [10, 20, 30], 
//     obj: {
//         x: 10, 
//         y: 20
//     }, 
//     fn: function(arg) {console.log(arg)} 
// };
// test.fn(123)
// console.log("1 index:", test.arr[1])
// console.log("Y from object of object: ", test.obj.y)
// console.log("String form object: ", test.str)
// console.log("Number form object: ", test.nr)
// console.log("Boolean form object: ", test.b)

// let point = 
// {
//     x: 0,
//     y: 0,
//     moveHorizontally: function(distance) 
//     {
//         this.x = this.x + distance;
//     },
//     moveVertically: function(distance) 
//     {
//         this.y = this.y + distance;
//     }
// }
// console.log(point.x)
// point.moveHorizontally(30);
// console.log(point.x)

// let contact = 
// {
//     tel: "207-662-5412",
//     email: "RonaldSMurphy@freepost.org"
// };
// console.log("tel:" , contact.tel)
// console.log("email:" , contact.email)
// contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ]
// console.log("email:" , contact.email[0])
// console.log("email:" , contact.email[1])
// contact.email = 
// {
//     private: "RonaldSMurphy@freepost.org",
//     work: "rsmurphy@briazz.com" 
// }
// console.log("Work email:", contact.email.work)
// console.log("Private email:", contact.email.private)
// delete contact.email.work
// console.log("Work email:",contact.email.work)
// console.log("Private email:",contact.email.private)
// if(contact.email.work)
// {
//     console.log("This is if executing")
// }

// if("private" in contact.email)
// {
//     console.log("This is private email: ", contact.email.private)
// }
//primitive
//Falsy values: "", undefined, null, 0, [], {}
//Truthy values: " ", 1, {one: 1}, [1]

// const contact = 
// {
//     tel: "207-662-5412",
//     email: "RonaldSMurphy@freepost.org"
// }
// for(x in contact)
// {
//     // print property name
//    console.log(x)
//    console.log(x+": "+contact[x])
// }
// let propArray = Object.keys(contact)
// console.log("PropArray: ", propArray)

// contact = {
//     tel: "207-662-5412",
//     email: "RonaldSMurphy@freepost.org"
// }
// contact.tel = "+91 9876543210"
// console.log("contact.tel: ", contact.tel)
// contact.name = "Aditya"
// console.log("contact.name: ", contact.name)

// var point1 = {x: 10, y: 20}
// var point2 = {x: 10, y: 20}
// console.log(point1 === point2)
// let point3 = point1 //copying
// console.log(point1 === point3) //true or false?
// point1.x = 30
// console.log("point1.x: ", point1.x)
// console.log("point3.x: ", point3.x)

// let point0 = {x:10, y: 20 };
// let point1 = point0;    // copy reference
// let point2 = {};
// Object.assign(point2, point0);  //  copy properties into the new object
// console.log(point2.x);
// console.log(point2.y);

// point1.x = 30
// point1.y = 50
// console.log("point1.x: ", point1.x);
// console.log("point1.y: ", point1.y);
// console.log("point2.x: ", point2.x);
// console.log("point2.y: ", point2.y);

// console.log(point1 === point0); // true
// console.log(point1 === point2); // false

// let point3 = {};
// Object.assign(point3, point0, {z: 100});
// // console.log(point3.x)
// // console.log(point3.y)
// // console.log(point3.z)
// console.log("point3: ", point3)

// let point4 = {}
// Object.assign(point4, point3, {z: 120, color: "Red"});
// console.log("point4: ", point4)

// let point5 = {}
// point5 = { ...point4}
// console.log("point5: ", point5)
// console.log("point5 === point4: ", point5 === point4)
// //...-> Spread operator
// const arr1 = [1,2]
// const arr2 = [3,4]
// const combinedArray = [ ...arr1, ...arr2]
// console.log("arr1", arr1)
// console.log("arr2", arr2)
// console.log("combinedArray", combinedArray)

// const array1 = [1,2,3,4]
// const resultArray = [ ...array1]
// console.log("array1", array1)
// console.log("resultArray", resultArray)

// let resultArray1 = [ ...array1, 5, 6, 7, 8]
// console.log("resultArray1", resultArray1)

// resultArray1 = [ 5, 6, 7, 8, ...array1]
// console.log("resultArray1", resultArray1)

// resultArray1 = [ 5, 6, ...array1, 7, 8]
// console.log("resultArray1", resultArray1)

// function sum(a, b, c)
// {
//     return a + b +c
// }

// let numbers = [10, 12, 23]
// const result = sum( ...numbers)
// console.log("result:", result)

// const string1 = "Aditya"
// let charArray = [ ...string1]
// console.log("charArray:", charArray)

// let deepClone = function(obj) 
// {
//     let newObj = {...obj};
//     for(property in newObj) 
//     {
//     	if(typeof newObj[property] === "object") 
//         {
//         	newObj[property] = deepClone(newObj[property]);
//     	}
//     }
//     return newObj;
// }

// let obj = {
//     x: 10, 
//     y: 20,
//     z:
//     {
//         a: 100,
//         b: 200
//     }
// }
// let obj1 = {}
// //Object.assign(obj1, obj)
// //obj1 = { ...obj}
// obj1 = deepClone(obj)
// console.log("obj:", obj)
// console.log("obj1:", obj1)
// console.log("obj === obj1:", obj === obj1)

// obj.z.a = 150
// obj.x = 15
// console.log("Changing obj.z.a to 150")
// console.log("Changing obj.x to 15")
// console.log("obj:", obj)
// console.log("obj1:", obj1)

// let circle = 
// {
//     radius: 100,
//     center: 
//     {
//         x:0,
//         y:0
// 	},
//     // getType: function() 
//     // {
//     //    	return "circle";
//  	// }
//     getType() 
//     {
//        	//return "circle";
//         return (typeof this.radius === "number") ? "circle" : "unknown"
//  	},
//     getRadius()
//     {
//         return this.radius
//     }
// };
// console.log("circle.radius: ", circle.radius)
// console.log("circle.center.x: ", circle.center.x)
// console.log("getType(): ", circle.getType())
// console.log("getType(): ", circle["getType"]())
// console.log("getRadius(): ", circle.getRadius())
// let circle1 = {...circle}
// circle1.radius = "abc"
// console.log("getRadius(): ", circle1.getRadius())
// console.log("getType(): ", circle1.getType())
// circle.radius:  100
//circle.center.x:  0
//getType():  circle


// let circle = 
// {
//     radius: 100,
//     center: 
//     {
//         x:0,
//         y:0,
//         show()
//         {
//             console.log(`${this.x}, ${this.y}`)
//         }
//     }
// }

// circle.center.show()
// let user = 
// {
//     name: "Divya",
//     city: "abc",
//     address: 
//     {
//     	city: "Indore",
//     	showCity() 
//         {
//      	    console.log("City is:", this.city);
//    		}
//  	}
// };

// user.address.showCity();

// let contact = 
// {
//     _tel: "207-662-5412",//private
//     get tel() 
//     {
//         console.log("Calling getter for _tel")
//         return this._tel
//     },
//     set tel(t) 
//     { 
//         console.log("Setting tel!")
//         this._tel = t
//     }
// };
// console.log(contact.tel)    //getter is called
// contact.tel = "100-100-1000"    //setter is called
// console.log(contact.tel)    //getter is called
// contact.email = "RonaldSMurphy@freepost.org"
// console.log(contact.email)

// let contact = 
// {
//     _age: 36,
//     _firstName : "David",
//     _lastName : "Taylor",
//     get fullName() 
//     {
//         return `${this._firstName} ${this._lastName}`;
//     },
//     get age()
//     { 
//         return this._age
//     },
//     set age(a) 
//     { 
//         if( a > 0) 
//             this._age = a
//         else
//             console.log("Setting age with invalid number is not allowed!")
//     }
// };
// console.log(contact.fullName)
// contact.age = -20
// //contact._age = -20
// console.log(contact.age)

// let contact = 
// {
// 	age: 36,
//     firstName : "David",
//     lastName : "Taylor",
// 	get fullName() {return `${this.firstName} ${ this.lastName}`;},
//     get age() { return this._age;},
// 	set age(a) { if( a > 0) this._age = a;}
// };
// let keys = Object.keys(contact);
// console.log("Keys of contact: ", keys);
// let desc = Object.getOwnPropertyDescriptor(contact, "age");
// console.log("age property descriptor: ", desc);

// Object.defineProperty(contact, "age", 
// {
//     value: 34,
//     writable: true,
//     enumerable: false,
//     configurable: true
// });

// keys = Object.keys(contact)
// console.log("Keys of contact: ", keys)
// desc = Object.getOwnPropertyDescriptor(contact, "age");
// console.log("age property descriptor: ", desc);

// Object.defineProperty(contact, "age", 
// {
//     value: contact.age,
//     writable: false,
//     enumerable: false,
//     configurable: true
// });

// contact.age = 100;
// console.log(contact.age);

// let enumKeys = Object.keys(contact);
// let allKeys = Object.getOwnPropertyNames(contact);
// console.log("enumKeys: ", enumKeys);
// console.log("allKeys: ", allKeys);


// let contact = 
// {
// 	age: 36,
//     firstName : "David",
//     lastName : "Taylor",
// 	get fullName() {return `${this.firstName} ${ this.lastName}`;},
//     get age() { return this._age;},
// 	set age(a) { if( a > 0) this._age = a;}
// };

//let createPoint = (x,y)=> ({x, y})
// = function(x, y) 
// {
//     // let obj = {};
//     // obj.x = x;
//     // obj.y = y;
//     return {
//         x:x,
//         y:y
//     }
// };

// let point1 = createPoint(1,1);
// let point2 = createPoint(2,2);
// console.log("point1: ", point1); // ->  1
// console.log("point2: ", point2); // -> 2

// let createColoredPoint  = function(x, y, color) 
// {
//     let _info = "... object under construction";
//     let _color = color;
//     console.log(_info);
//     return {
//         x,
//         y,
//         getColor()
//         {return _color}
//     }
// };
// let coloredPoint1 = createColoredPoint(1, 1, "red");// -> ... object under construction
// let coloredPoint2 = createColoredPoint(2, 2, "green");// ->...object under construction 
// console.log("coloredPoint1.getColor(): ", coloredPoint1.getColor());	// -> red
// console.log("coloredPoint2.getColor(): ", coloredPoint2.getColor());	// -> green
// console.log("coloredPoint1._color: ", coloredPoint1._color);   // -> undefined !!!


// let ColoredPoint = function(x, y, color) 
// {
//     let _info = "... object under construction";
//     let _color = color;
//     console.log(_info);

//     this.x = x;
//     this.y = y;
//     this.getColor = function() {return _color};
// };
// let coloredPoint1 = new ColoredPoint(1, 1, "red");
// let coloredPoint2 = new ColoredPoint(2, 2, "green"); 
// console.log(coloredPoint1.getColor());	// -> red
// console.log(coloredPoint2.getColor());	// -> green
// console.log(coloredPoint1._color);   // -> undefined !!!
// console.log("coloredPoint.constructor.name: ", coloredPoint1.constructor.name);
// console.log("coloredPoint.constructor: ", coloredPoint1.constructor);
// console.log("typeof coloredPoint.constructor: ", typeof coloredPoint1.constructor);

// let reallyEmptyObject = Object.create(null);
// console.log("reallyEmptyObject: ",reallyEmptyObject);
// console.log("typeof reallyEmptyObject.constructor: ", typeof reallyEmptyObject.constructor);

// let point = {
//     x:0, 
//     y:0,
//     printX()
//     {
//         console.log("getter for x is called")
//         return this.x
//     }
// };
// let coloredPoint = {color: "red"};
// console.log("point: ", point)
// console.log("point.__proto__: ", point.__proto__)
// console.log("coloredPoint: ", coloredPoint)
// console.log("coloredPoint.__proto__: ", coloredPoint.__proto__)
// console.log("Before changing proto of colouredPoint object")
// console.log("coloredPoint.x: ", coloredPoint.x)
// coloredPoint.__proto__ = point;

// console.log("point: ", point)
// console.log("point.__proto__: ", point.__proto__)
// console.log("coloredPoint: ", coloredPoint)
// console.log("coloredPoint.__proto__: ", coloredPoint.__proto__)

// console.log("Object.getOwnPropertyNames(coloredPoint): ", Object.getOwnPropertyNames(coloredPoint));
// console.log("coloredPoint.color: ", coloredPoint.color);
// console.log("coloredPoint.x: ", coloredPoint.x);	

// coloredPoint.x = 100;   // new property
// console.log(coloredPoint.x);//
// console.log(point.x);//
// console.log(Object.getOwnPropertyNames(coloredPoint));	

// point.y = 200;
// console.log(coloredPoint.y);//
// console.log(point.y);
// console.log(point.printX())
// console.log(coloredPoint.printX())

// let figure = 
// {
//     getType: function() 
//     {
//         return this.type ? this.type : "unknown";
//     }
// };

// let circle = 
// {
//     type: "circle",
//     center: {x:0, y:0},
//     radius: 100
// };
// //circle.__proto__ = figure;//deprectaed
// let proto = Object.getPrototypeOf(circle);
// console.log("proto of circle:", proto)
// Object.setPrototypeOf(circle, figure);//modern / new solution
// proto = Object.getPrototypeOf(circle);
// console.log("proto of circle:", proto)
// console.log(circle.getType());
// console.log(1+(-"2"))  //  12 => 2 | 1=>3
// console.log("2"+1)  //  21 => 3| 3 =>0

// console.log(4*"2")

// let testString = new String("unu doi trei");
// console.log("testString.length: ", testString.length);
// console.log("testString.toUpperCase(): ", testString.toUpperCase())

// String.prototype.hi = function(){
//     console.log("Hi!")
// };
// testString.hi()

// let myString = String()
// console.log(myString)
// console.log(typeof myString)
// var a = 10
// class Student
// {
// 	firstName
//     lastName
// 	age
// 	gender
// 	rollNumber
//     fullName

//     // constructor()
//     // {
//     //     console.log("This this is a constructur called!")
//     // }//Default Constructor
//     constructor(firstName, lastName, age, gender, rollNumber)
//     {
//         console.log("This this is a constructur called!")
//         this.fullName = firstName+" "+lastName
//         this.age = age
//         this.gender = gender
//         this.rollNumber = rollNumber
//     }//Parameterised constructor

//     printStudent()
//     {
//         console.log("Name: ", this.fullName)
//         console.log("Age: ", this.age)
//         console.log("Gender: ", this.gender)
//         console.log("Roll Number: ", this.rollNumber)
//     }
// }

// let aditya = new Student()
// aditya.name = "Aditya Gupta"
// aditya.age = 25
// aditya.gender = "Male"
// aditya.rollNumber = 12

// console.log("Name: ", aditya.name)
// console.log("age: ", aditya.age)
// console.log("gender: ", aditya.gender)
// console.log("rollNumber: ", aditya.rollNumber)


// console.log("Creating a new Object")
// let sandeep = new Student("Sandeep", "Solanki", 20, "Male", 101, "Aditya")
// console.log("Created the Object")
// // sandeep.name = "Sandeep Solanki"
// // sandeep.age = 20
// // sandeep.gender = "Male"
// // sandeep.rollNumber = 121
// console.log("Name: ", sandeep.name)
// console.log("Age: ", sandeep.age)
// console.log("Gender: ", sandeep.gender)
// console.log("Roll Number: ", sandeep.rollNumber)
//sandeep.printStudent()

// let aditya = new Student("Aditya",21, "Male", 102)
// aditya.printStudent()

// class Vehicle
// {
// 	transportMode
// 	weight
// 	capacity
// 	color

//     print()
//     {
//         console.log("transportMode: ", this.transportMode)
//         console.log("weight: ", this.weight)
//         console.log("capacity: ", this.capacity)
//         console.log("color: ", this.color)
//     }
// }

// class MotorBike extends Vehicle
// {
// 	maxSpeed
// 	fuelType
// 	peopleCapacity
// 	average

//     print()
//     {
//         super.print()
//         console.log("maxSpeed: ", this.maxSpeed)
//         console.log("fuelType: ", this.fuelType)
//         console.log("peopleCapacity: ", this.peopleCapacity)
//         console.log("average: ", this.average)
//     }
// }

// class Car extends Vehicle
// {
// 	maxSpeed
// 	fuelType
// 	peopleCapacity
// 	average
// 	gears
// 	canReverse

//     print()
//     {
//         super.print()
//         console.log("maxSpeed: ", this.maxSpeed)
//         console.log("fuelType: ", this.fuelType)
//         console.log("peopleCapacity: ", this.peopleCapacity)
//         console.log("average: ", this.average)
//         console.log("gears: ", this.gears)
//         console.log("canReverse: ", this.canReverse)
//     }
// }

// let honda = new Car()
// honda.transportMode = "Road"
// honda.weight = "150 Kgs"
// honda.capacity = "2.5l"
// honda.color = "Yello"
// honda.maxSpeed = "220 Kmps"
// honda.fuelType = "Disel"
// honda.peopleCapacity = "6"
// honda.average = "18Kmpl"
// honda.gears = "5"
// honda.canReverse = true
// //console.log("honda: ", honda)
// honda.print()
// console.log("------")

// let motorBike = new MotorBike()
// motorBike.transportMode = "Road"
// motorBike.weight = "100 Kgs"
// motorBike.capacity = "1.5l"
// motorBike.color = "Red"
// motorBike.maxSpeed = "150 KMPS"
// motorBike.fuelType = "Petrol"
// motorBike.peopleCapacity = 2
// motorBike.average = "50 KMPL"
// //console.log("motorBike: ", motorBike)
// motorBike.print()

// console.log("type: motorBike"+motorBike+".")
// console.log(typeof motorBike)
// if(motorBike instanceof MotorBike)
// {
//     console.log("motorBike is the instance of MotorBike class")
// }

// console.log("Date.now(): ", Date.now())

// class Test
// {
//     name
//     description
//     marking
//     rank
// }
// let physicsTest = new Test()
// physicsTest.name = "Physics Test"
// physicsTest.description = "adwgblwbv lijvb iqwebj"
// physicsTest.marking = "50"
// physicsTest.rank = 100

// console.log("physicsTest:", physicsTest)
// let { name, marking, rank} = physicsTest
// console.log("name:", name)
// console.log("marking:", marking)
// console.log("rank:", rank)


// console.log("motorBike:", motorBike)

// let { transportMode, weight, fuelType} = motorBike
// console.log("transportMode: ", transportMode)
// console.log("weight: ", weight)
// console.log("fuelType: ", fuelType)

// let Vehicle = function({id, latitude, longitude})
// {
//     this.setPosition = function(latitude, longitude) 
//     {
//         this.time = Date.now();
//         this.longitude = longitude;
//         this.latitude = latitude;
//     };

//     this.getPosition = function() 
//     {
//         return {latitude: this.latitude, longitude: this.longitude}
//     };

//     this.id = id;
//     this.status = "unavailable";
//     this.setPosition(latitude, longitude);
// }
// let car = new Vehicle({id:"XE9", latitude: 12.9090909, longitude: 24.4979457})
// console.log("car:", car)
// console.log("Lat Long:", car.getPosition())
// let {latitude, longitude} = car.getPosition()
// console.log("latitude:", latitude)
// console.log("longitude:", longitude)

// class Vehicle
// {
//     constructor({id, latitude, longitude})
//     {
//    		this.id = id;
//         this.status = "unavailable";
//    		this.setPosition({latitude, longitude});
//     };
//     setPosition({latitude, longitude}) 
//     {
//         this.time = Date.now();
//         this.longitude = longitude;
//         this.latitude = latitude;
//     }
//     getPosition() 
//     {
//         return{
//             latitude: this.latitude,
//             longitude: this.longitude
//         };
//     };
// };
// let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
// vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
// console.log(vehicle.getPosition())

// function namedFunction() 
// { 
//     console.log("I'm nj, I hope ..") 
// }
// let anonymousFunction = function() 
// {
//     console.log("I'm a bit anonymous ...")
// }
// let notExactlyAnonymousFunction = function anotherNamedFunction() 
// {
//     console.log("I'm confused ...")
// }
// namedFunction();	// -> I'm named, I hope ...
// anonymousFunction();	// -> I'm a bit anonymous ...
// notExactlyAnonymousFunction();	// -> I'm confused …

// let AlmostEmptyClass = class
// {
//     constructor(sth) 
//     {
//         console.log(sth)
//     }
//     sayHi() 
//     {
//         console.log("Hi!")
//     }
// }
// let almostEmptyObject = new AlmostEmptyClass(120) // 120
// almostEmptyObject.sayHi() // -> Hi!

// console.log("almostEmptyObject instanceof AlmostEmptyClass: ", almostEmptyObject instanceof AlmostEmptyClass) // -> true
// console.log("almostEmptyObject instanceof String", almostEmptyObject instanceof String); // -> false
// let str = new String("test me")
// console.log("str instanceof String: ", str instanceof String); // -> true

// class ABC
// {
//     a
// }

// class DEF extends ABC
// {
//     b
// }

// class GHI extends DEF
// {
//     c
// }

// let abc = new ABC()
// let def = new DEF()
// let ghi = new GHI()

// console.log("abc instanceof ABC:", abc instanceof ABC)
// console.log("def instanceof DEF:", def instanceof DEF)
// console.log("ghi instanceof GHI:", ghi instanceof GHI)

// console.log("ghi instanceof DEF:", ghi instanceof DEF)
// console.log("ghi instanceof ABC:", ghi instanceof ABC)
// console.log("ghi instanceof object:", ghi instanceof Object)

// console.log("def instanceof GHI:", def instanceof GHI)

// console.log(abc.a)  //getting the value
// abc.a = 25          //setting the value
// console.log(abc.a)  //getting the value

// let myObject = {
//     a: 1,
//     b: 2,
//     c: "C"
// }

// console.log("myObject: ", myObject)
// console.log("a: ", myObject.a)
// console.log("b: ", myObject.b)
// console.log("c: ", myObject.c)

// let {a, c} = myObject        //desctruction

// console.log("a: ", a)
// //console.log("b: ", b)
// console.log("c: ", c)

// class Vehicle 
// { 
//     id
//     position
//     status
//     time
//     #latitude
//     #longitude
//     constructor({id, latitude, longitude})
//     {
//         this.id = id
//         this.position = {latitude, longitude}
//         this.status = "unavailable"
//     }
//     set position({latitude, longitude}) 
//     { 
//         console.log("Setting position values!")
//         this.time = Date.now()
//         this.#longitude = longitude
//         this.#latitude = latitude
//     }
//     get position() 
//     {
//         console.log("Getting Position now!")
//         return{ 
//             latitude: this.#latitude,
//             longitude: this.#longitude
//         }
//     }
//     print()
//     {
//         console.log("id:", this.id)
//         console.log("Position:", this.position)
//         console.log("Time:", this.time)
//     }
// }

// let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"})

// vehicle.position = {longitude: 18.193121, latitude: 59.378654}

// console.log(vehicle.position)
// console.log("vehicle.latitude:",vehicle.latitude)   //undefined

// console.log("----------")
// vehicle.print()

// class Car extends Vehicle
// {
//     color
//     gears
//     constructor({color, gears, id, latitude, longitude})
//     {
//         super({id, latitude, longitude})     //inheriting
//         this.color = color
//         this.gears = gears
//     }
//     print()
//     {
//         super.print()       //shadowing
//         console.log("color:", this.color)
//         console.log("gears:", this.gears)
//     }
// }
// console.log("==========")//
// let toyota = new Car({color: "Black", gears: 6, id: "ABC", latitude: 12.9875653, longitude: 14.87654765})
// toyota.print()


// let AlmostEmpty = function(sth) 
// { 
//     console.log(sth)
//     this.sayHi = function() 
//     { 
//         console.log("Hi!") 
//     }
// }
// class ExtendedClass extends AlmostEmpty 
// {
//     constructor(name) 
//     {
//         super("I'm super ...")
//         this.name = name
//     }
//     sayHi()
//     { 
//         console.log(`Hi ${this.name}!`)
//     }
// }
// let obj = new ExtendedClass("Bob")
// obj.sayHi()    // -> Hi Bob!

// class AlmostEmptyClass 
// {
//     constructor(sth) 
//     {
//         console.log(sth)
//     }
//     sayHi() 
//     {
//         console.log("Hi!")
//     }
//     static sayHello() 
//     {
//         console.log("Hello!")
//     }
// }
// let almostEmptyObject = new AlmostEmptyClass(120) // 120
// almostEmptyObject.sayHi() // -> Hi!
// //almostEmptyObject.sayHello() // error
// AlmostEmptyClass.sayHello() // -> Hello!


// class Vehicle 
// {
//     constructor({id, latitude, longitude})
//     {
//         this.id = id
//         this.status = "unavailable"
//         this.setPosition({latitude, longitude})
//     }
//     setPosition({latitude, longitude})
//     {
//         this.time = Date.now()
//         this.longitude = longitude
//         this.latitude = latitude
//     }
//     getPosition() 
//     {
//         return{
//             latitude: this.latitude,
//             longitude: this.longitude
//         }
//     }
//     // static isSameId(v1, v2)
//     // {
//     //     return v1.id === v2.id
//     // }

//     static isSameLongitude(v1, v2)
//     {
//         return v1.longitude === v2.longitude
//     }
// }

// Vehicle.isSameId =  function(v1, v2) 
// {
//     return v1.id === v2.id
// }


// let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"})
// let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"})
// let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"})
// console.log("Vehicle.isSameId(vehicle1, vehicle2)", Vehicle.isSameId(vehicle1, vehicle2)) // -> true
// console.log("Vehicle.isSameId(vehicle1, vehicle3)", Vehicle.isSameId(vehicle1, vehicle3)) // -> false
// console.log("Vehicle.isSameLongitude(vehicle1, vehicle2)", Vehicle.isSameLongitude(vehicle1, vehicle2))
// console.log("Vehicle.isSameLongitude(vehicle1, vehicle3)", Vehicle.isSameLongitude(vehicle1, vehicle3))

// class Student 
// {
//     property1
//     property2
//     constructor()
//     {
//     }
//     method1()
//     {
//     }
//     method2()
//     {
//     }
// }//classical way of creating a class

// //child class
// class Monitor extends Student
// {

// }

// let Student = function()
// {
//     property1
//     property2
//     let method1 = function()
//     {
//     }
//     let method2 = function()
//     {
//     }
// }//class expression & Constructor function

// let Monitor = Object.create(Student)
// let adtya = new Student()

// class TestClass 
// { 
//     constructor(arg) 
//     {
//         this.arg = arg
//         console.log(this.arg)
//     }
//     showSth() 
//     { 
//         console.log("I'm prototyped!")
//     }
//     static showSth() 
//     { 
//         console.log(`Hi, I'm static!`)
//     }  
// } 

// let TestClass = function(arg) 
// { 
//     this.arg = arg
//     console.log(this.arg)
// }

// TestClass.prototype.showSth = function() 
// { 
//     console.log("I'm prototyped!")
// }
    
// TestClass.showSth = function() 
// { 
//     console.log(`Hi, I'm static!`)
// }

// let test = new TestClass("Hello")
// test.showSth() // -> I'm prototyped!
// TestClass.showSth() // -> I'm static!
// console.log(test instanceof TestClass)


// console.log("0.1 + 0.2 == 0.3 => ", 0.1 + 0.2 == 0.3)
// console.log("0.3 == 0.3 => ", 0.3 == 0.3)
// console.log("0.3 === 0.3 => ", 0.3 === 0.3)

// let nrStr1 = (11).toString()
// let nrStr2 = (11).toString(16)
// console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`) // -> nrStr1 : string : 11
// console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`) // -> nrStr1 : string : b

// let nr2 = 2.55
// console.log(nr2.toFixed(1))
// console.log(nr2.toFixed(2))
// //console.log(nr2.toFixed(20)) 
// //console.log(((nr2 * 10).toFixed(0) / 10))
// let nr1 = 10.55
// console.log(nr1.toFixed(1)) 
// console.log(nr1.toFixed(2)) 
// // console.log(nr1.toFixed(20))
// // console.log(nr1.toFixed(0)) 
// // console.log(nr1.toFixed(3)) 

// let n = 4.55
// console.log(n.toFixed(1)) 

// let n1 = 7.55
// console.log(n1.toFixed(1)) 

// let n2 = 7.55
// console.log(n1.toFixed(2)) 

// let n = 1.55
// console.log("n: ", n.toFixed(1))

// let n1 = 2.55
// console.log("n1: ", n1.toFixed(1))

// let n2 = 3.55
// console.log("n2: ", n2.toFixed(1))

// let n3 = 4.55
// console.log("n3: ", n3.toFixed(1))

// let n4 = 5.55
// console.log("n4: ", n4.toFixed(1))

// let n5 = 6.55
// console.log("n5: ", n5.toFixed(1))

// let n6 = 7.55
// console.log("n6: ", n6.toFixed(1))

// let n7 = 8.55
// console.log("n7: ", n7.toFixed(1))

// let n8 = 9.55
// console.log("n8: ", n8.toFixed(1))

// let n9 = 10.55
// console.log("n9: ", n9.toFixed(1))

// let n10 = 31.55
// console.log("n10: ", n10.toFixed(1))

// let n11 = 32.55
// console.log("n11: ", n11.toFixed(1))

// let nr = 123456.789
// console.log(nr.toLocaleString("en-GB")) //-> 123,456.789
// console.log(nr.toLocaleString("fr-FR")) //-> 123·456,789
// console.log(nr.toLocaleString("de-DE")) //-> 123.456,789
// console.log(nr.toLocaleString("ar-EG")) //-> ١٢٣٬٤٥٦٫٧٨٩
// console.log(nr.toLocaleString("hi-IN"))
// console.log(nr.toLocaleString("sa-IN"))
// console.log(nr.toLocaleString("pu-IN"))
// console.log(nr.toLocaleString({
//     style: "currency",
//     currency: "EUR"
// })) //-> 123.456,79 €

// console.log(nr.toLocaleString())


// console.log("Number.MAX_VALUE: ", Number.MAX_VALUE)
// console.log("Number.MIN_VALUE: ", Number.MIN_VALUE)
// console.log("Number.MAX_SAFE_INTEGER: ", Number.MAX_SAFE_INTEGER)
// console.log("Number.MIN_SAFE_INTEGER: ", Number.MIN_SAFE_INTEGER)

// let numbers = [2e100, 200000, 1.5, Infinity]
// for(let i=0; i<numbers.length; i++) 
// {
//     console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`)
//     console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`)
//     console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`)
// }

// console.log(Number.parseFloat("123.12.12")) // -> 123.12
// console.log(Number("123.12.12")) // -> NaN
// console.log(Number.parseInt("1204ab123")) // -> 1204
// console.log(Number("1204px")) // -> NaN

// let a = "this is my name: \"Aditya\" "
// console.log(a)
// a = "this is my name: 'Aditya' Aditya "    //premitive
// console.log(a)
// console.log(a.length)
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a.charAt(3))
// console.log(a.charAt(56))
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// let ab = new String("this is my name: 'Aditya' ")   //Wrapper object
// console.log(ab)
// console.log(ab.length)

// console.log(a.split(" "))
// console.log(a.split(" ")[1])
// console.log(a)
// console.log(a.replace("Aditya", "Kuljot"))
// console.log(a)
// console.log(a.replaceAll("Aditya", "Chandresh"))

// let text = "Lorem, ipsum, dolor, ...."
// let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ')
// console.log(words)
// console.log(words.length) // -> 30

//let batch = "JavaScript + ReactJS"
// console.log("Includes example: ", batch.toLowerCase().includes("reactjs"))
// console.log("Indexof example: ", batch.toLowerCase().indexOf("a"))
// console.log("Indexof example: ", batch.toLowerCase().lastIndexOf("a"))
// console.log("Indexof example: ", batch.toLowerCase().charAt(15))
// console.log("Indexof example: ", batch.toLowerCase().charAt(batch.toLowerCase().lastIndexOf("a")))
// console.log("Includes example: ", batch.includes("REactjs"))
// console.log("Includes example: ", batch.includes("REActjs"))
// console.log("Includes example: ", batch.includes("Reactjs"))

// console.log("substr check:", batch.substr(4, 6))
// console.log("substr check:", batch.substr(4, 1))
// console.log("substring check:", batch.substring(4, -2))
// console.log("slice check:", batch.slice(4, -2))

// let num = "1234567890"
// console.log("Includes example: ", num.includes("5"))

// let numbers = [100, 5, 66]
// for(let i=0; i<numbers.length; i++) 
// {
//     console.log(String(numbers[i]).padStart(10, '0').padEnd(15, '-'))
//     console.log(String(numbers[i]).padStart(10, 'abc').padEnd(15, '-'))
//     console.log(String(numbers[i]).padStart(10).padEnd(15, '-'))
// }

// let city = " Bergen  "
// let street = "\t Dokkeboder\n"  // one tab = 8 spaces
// console.log("Actual City String: --"+city+"--")
// console.log("Length of City String: --"+city.length+"--")
// console.log("Actual Street String: --"+street+"--")
// console.log("Length of Street String: --"+street.length+"--")
// console.log("Trim Left City String: --"+city.trimStart()+"--")
// console.log(city.trimStart().length) // -> 8 -> "Bergen  "
// console.log("Trim Rigth City String: --"+city.trimEnd()+"--")
// console.log(city.trimEnd().length) // -> 7 -> " Bergen"
// console.log("Trim City String: --"+city.trim()+"--")
// console.log(city.trim().length) // -> 6 -> "Berge"
// console.log("Trim Street String: --"+street.trim()+"--")
// console.log(street.trim().length) // -> 10 -> "Dokkeboder"

// console.log("a" < "b") // -> true
// console.log("abc" < "acd") // -> true
// console.log("b" < "acd") // -> false

// console.log("4" < "5") // -> true
// console.log("2" < "12") // -> false
// console.log("34" < "332") // -> false

// console.log("brettesnes" < "Sundsfjord") // -> false
// console.log("Brettesnes" < "Sundsfjord") // -> true

// console.log("Ørnes" < "Sundsfjord") // -> false

// console.log("Ørnes".localeCompare("Sundsfjord", "nn")) // -> 1
// console.log("Ørnes".localeCompare("Brettesnes", "nn")) // -> 1

// console.log(Date.now())
// console.log(new Date())
// console.log(new Date().toLocaleString())
// console.log(Date.now().toLocaleString())

// let date1 = new Date(0)
//  let date2 = new Date(1000*60*60*10)
// // console.log(date1.toUTCString()) // -> Thu, 01 Jan 1970 00:00:00 GMT
// // console.log(date2.toUTCString()) // -> Thu, 01 Jan 1970 10:00:00 GMT

// console.log(date2.getTimezoneOffset()) // -> 0
// console.log(date2.toLocaleString()) // -> 01/01/1970, 10:00:00
// console.log(date2.toISOString()) // -> 1970-01-01T10:00:00.000Z
// console.log(date2.toUTCString()) // -> Thu, 01 Jan 1970 10:00:00 GMT

// let date3 = new Date("2026-02-02T20:20:00.000")
// let date4 = new Date("2026-02-02T20:20:00.000Z")
// console.log(date3.toLocaleString()) // -> 02/02/2020, 20:20:00
// console.log(date3.toISOString()) // -> 2020-02-02T19:20:00.000Z
// console.log(date3.toUTCString()) // -> Sun, 02 Feb 2020 19:20:00 GMT

// console.log(date4.toLocaleString()) // -> 02/02/2020, 21:20:00
// console.log(date4.toISOString()) // -> 2020-02-02T20:20:00.000Z
// console.log(date4.toUTCString()) // -> Sun, 02 Feb 2020 20:20:00 GMT

// console.log(date3.getTime()) // -> 1580671200000
// console.log(date4.getTime()) // -> 1580674800000
// console.log(date4.getTime() - date3.getTime()) // -> 3600000

// let nowObj = new Date()
// console.log(nowObj.toLocaleString())

// let now = Date.now() // timestamp
// let nowObj1 = new Date(now)
// console.log(`now : ${typeof now} : ${now}`)
// console.log(`now : ${typeof nowObj1} : ${nowObj1}`)

// let date1 = new Date(2020, 6)
// let date2 = new Date(2020, 6, 8)
// let date3 = new Date(2020, 6, 8, 10)
// let date4 = new Date(2020, 6, 8, 10, 20, 45)

// console.log(date1.toLocaleString()) // -> 01/07/2020, 00:00:00
// console.log(date2.toLocaleString()) // -> 08/07/2020, 00:00:00
// console.log(date3.toLocaleString()) // -> 08/07/2020, 10:00:00
// console.log(date4.toLocaleString()) // -> 08/07/2020, 10:20:45

// let date1 = new Date("2020-07-08")
// let date2 = new Date("2020-07-08T10:20:00")
// let date3 = new Date("2020-07-08T10:20:00Z")

// console.log(date1)
// console.log(date2)
// console.log(date3)

// let date1 = new Date("Mon Mar 02 2020 10:00:00")
// console.log(date1)
// let date2 = new Date("Mon March 2 2020 10:00")
// console.log(date2)
// let date3 = new Date("Mar 02 2020 10:00:00")
// console.log(date3)
// let date4 = new Date("2 March 2020, 10:")
// console.log(date4)

// let date5 = new Date("3.2.2020")
// console.log(date5)
// let date6 = Date("03/02-2020, 10:00")
// console.log(date6)
// let date7 = new Date("2020, 10:00")
// console.log(date7)
// let date8 = new Date("2020 march-02, 10:00")
// console.log(date8)

// let date9 = new Date("3.2.2020 GMT+0400")
// console.log(date9)
// let date10 = new Date("Mon Mar 02 2020 10:00:00 UTC-4")
// console.log(date10)

// let date1 = new Date(2020, 6, 8, 10, 20, 0)
// let date2 = new Date(2020, 6, 9, 10, 20, 0)
// let milliDiff = date2.getTime() - date1.getTime()
// let seconds = milliDiff / 1000
// let minutes = seconds / 60
// let hours = minutes / 60
// let days = hours / 24
// console.log("Days:", days)
// console.log("hours:", hours)
// console.log("minutes:", minutes)
// console.log("seconds:", seconds)

// let startTime = Date.now()
// for(i=0; i<10000000; i++)
// {}
// let endTime = Date.now()
// console.log(endTime - startTime) 
// let milliDiff = endTime - startTime
// let seconds = milliDiff / 1000
// let minutes = seconds / 60
// let hours = minutes / 60
// let days = hours / 24
// console.log("Days:", days)
// console.log("hours:", hours)
// console.log("minutes:", minutes)
// console.log("seconds:", seconds)

// let date = new Date("2020-07-08T10:20:00")
// console.log(date.getMonth()) // -> 6 
// console.log(date.getDay()) // -> 3
// console.log(date.getDate()) // 8
// console.log(date.getHours()) // -> 10
// date.setHours(12)
// console.log(date.getHours()) // -> 12

// console.log(date.toLocaleDateString()) // -> 08/07/2020
// console.log(date.toLocaleTimeString()) // -> 10:20:00

// let array1 = [] 
// console.log(array1)
// let array2 = [2, 4, "six"] 
// console.log(array2)
// let array3 = new Array()
// console.log(array3)
// let array4 = new Array(2) // let array5 = new Array(2, 4, "six")
// console.log(array4)
// let array5 = new Array("2") 
// console.log(array5)
// console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`) 
// console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`) 

// function toConsole(item, index, array)
// {
//     console.log(`${index} : ${item}`)
// }
//let array1 = [2, 4, "six"] 
// array1.forEach(function toConsole(item, index, array)
// {
//     console.log(`${index} : ${item}`)
// }) 

// array1.forEach((item, index, array)=> console.log(`${index} : ${item}`) )

// const nestedArray = [1, 2, [3, 4], [5, [6, 7]]]
// const flattenedArray = nestedArray.flat() 
// console.log(flattenedArray)
// const deeplyFlattenedArray = nestedArray.flat(Infinity) 
// console.log(deeplyFlattenedArray)

// const array = [1, 2, 'a', true]
// const stringRepresentation = array.toString () 
// console. log(stringRepresentation) 
// const nestedArray = [1, [2, 3], [4, [5, 6]]] 
// const nestedStringRepresentation = nestedArray.toString() 
// console.log(nestedStringRepresentation)

// const array = [1, 2, 'a', true]
// const joinedString = array.join()
// console.log(joinedString)
// const customSeparator = array.join(' -') 
// console.log(customSeparator) 
// const noSeparator = array.join('') 
// console.log(noSeparator) 

// let array1 = ["90", "80", "10", "20", "30","100", "dog"]
// let anyNumberPresent = array1.some( item => typeof item === "number")
// console.log("anyNumberPresent: ", anyNumberPresent)

// let array2 = [90, 80, 10, 20, 30, 100, 50, -1]
// let allPositive = array2.every(item => item > 0)
// console.log("allPositive: ", allPositive)

// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]
// console.log(array1.length) 
// console.log(array1) 
// let numbers = array1.filter(item => typeof item === "number")
// console.log(numbers.length) 
// console.log(numbers) 
// console.log(array1.length) 

// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]
// let squarePower = array1
//   .filter(item => typeof item === "number")
//   .map(item => item * item)

// console.log(squarePower)

// let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]
// let numbers = array1.filter(item => typeof item === "number") 
// console.log(numbers)
// numbers.sort((first, second) => 
// {
//     if( first < second) 
//     {
//         return -1
//     } 
//     else if(first == second) 
//     {
//         return 0
//     } 
//     else 
//     {
//         return 1
//     }
// }) 
// console.log(numbers)

let numbers = [10, 20, 30, 50, 80, 90, 100] 
// let sum = numbers.reduce((accumulator, item) => accumulator + item, 100)
// console.log(sum)
// let strangeObj = numbers.reduce((accumulator, item, index) => 
// {
//     accumulator[item] = index
//     return accumulator
// } , {})
// console.log(strangeObj)

// let obj = {}
// obj.key1 = "my Value"

// obj["key2"] = "My Another value"
// console.log(obj)

// console.log("numbers[0]: ", numbers[0]) 
// console.log("numbers: ", numbers) 
// numbers.reverse()
// console.log("numbers[0]: ", numbers[0]) 
// console.log("numbers: ", numbers) 
// numbers.reverse() 
// console.log("numbers[0]: ", numbers[0])
// console.log("numbers: ", numbers) 

//let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"]
// myPets.reverse()
// console.log(myPets)
// myPets.reverse()

// console.log(myPets.find(item => item.length > 3)) // -> hamster
// console.log(myPets.find(item => item.includes("og"))) // -> dog
// console.log(myPets.find(item => item.includes("fish"))) // -> undefined

// console.log(myPets.findIndex(item => item.length > 3)) // -> 2
// console.log(myPets.findIndex(item => item.includes("og"))) // -> 1
// console.log(myPets.findIndex(item => item.includes("fish"))) // -> -1

// let p1 = myPets.slice(3) // ->  ["canary", "shark", "cat", "dog"]
// console.log(p1)
// let p2 = myPets.slice(3, 5) // -> ["canary", "shark"]
// console.log(p2)
// let p3 = myPets.slice(-3) // -> ["shark", "cat", "dog"]
// console.log(p3)
// let p4 = myPets.slice(-3, -1) // -> ["shark", "cat"]
// console.log(p4)

// let removedPets = myPets.splice(2, 3) 
// console.log(myPets) // -> ["cat", "dog", "cat", "dog"]
// console.log(removedPets) // -> ["hamster", "canary", "shark"]

// myPets.splice(2, 0, "rabbit", "guinea pig")
// console.log(myPets) 

// let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"]
// let [pet1,, pet3,, pet4] = myPets
// console.log(pet1) // -> cat
// console.log(pet3) // -> hamster
// console.log(pet4) // -> hamster

// let myPets = [,"cat", "dog"]
// // let [pet1, , pet3] = myPets
// // console.log(pet1)
// // console.log(pet3)

// let [pet1 = "fish", , pet3 = "fish"] = myPets
// console.log(pet1)
// console.log(pet3)


// let array1 = [100, 200, 300]
// let array2 = [1000, 2000]
// let array3 = [10, 20, ...array1, 500, ...array2] 

// console.log(array3)
// console.log(array1)
// console.log(array2)

// let testFn = (a, b, c, d) => a + b + c + d
// let array = [10, 20, 30, 40]
// console.log(testFn(...array))

// let emptySet = new Set()
// console.log(emptySet.size)
// console.log(emptySet)
// let petsSet = new Set(["cat", "dog", "cat"]) 
// console.log(petsSet.size)
// console.log(petsSet)
// petsSet.add("cat")
// console.log(petsSet)
// petsSet.add("Cat")
// console.log(petsSet)
// petsSet.add("cat1")
// console.log(petsSet)

//let petsSet = new Set(["cat", "dog"])
// console.log("petsSet.has(cat)", petsSet.has("cat"))
// console.log("petsSet.has(shark)", petsSet.has("shark"))

// console.log("petsSet.size: ", petsSet.size)
// petsSet.add("shark")
// petsSet.add("hamster")
// console.log("petsSet.size: ", petsSet.size)
// console.log("petsSet.has(shark): ", petsSet.has("shark"))
// petsSet.delete("dog")
// petsSet.delete("dog")
// console.log("petsSet.size: ", petsSet.size)
// petsSet.clear()
// console.log("petsSet.size: ", petsSet.size)


// let petsSet = new Set(["cat", "dog", "hamster"]) 
// // petsSet.forEach(value => console.log(value)) 

// // petsSet.forEach((value, key) => console.log(`(${value}:${key})`))

// // let petsIterator = petsSet.values()
// // console.log(petsIterator.next().value) // -> cat
// // console.log(petsIterator.next().value) // -> dog
// // console.log(petsIterator.next().value) // -> hamster
// // console.log(petsIterator.next().value)

// let petsIterator = petsSet.values()
// let result = petsIterator.next()
// while (!result.done) 
// {
//  	console.log(result.value) // -> cat -> dog -> hamster
//  	result = petsIterator.next()
// }

let petsSet = new Set(["cat", "dog", "hamster"])
console.log("petsSet: ", petsSet)
console.log(petsSet instanceof Set)
let petsArray = [...petsSet]
console.log("petsArray: ", petsArray)
console.log(petsArray instanceof Array)
