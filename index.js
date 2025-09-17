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

// let a = 1 / 0
// let b = -Infinity
// console.log(a) // -> Infinity
// console.log(b) // -> -Infinity
// console.log(typeof a) // -> number
// console.log(typeof b) // -> number
// let s = "it's definitely not a number"
// let n = s * 10
// console.log(n) // -> NaN
// console.log(typeof n) // -> number


// let big = 1234567890000000000000n
// let big2 = 1n
// console.log(big) // -> 1234567890000000000000n
// console.log(typeof big) // -> bigint
// console.log(big2) // -> 1n
// console.log(typeof big2) // -> bigint
// console.log(7n / 4n); // -> 1n

// let big3 = 1000n + 20

// let big4 = 1000n / 0n

// let country = "Malawi"
// let continent = 'Africa'
// console.log(country); // -> Malawi
// console.log(typeof country); // -> string
// console.log(continent); // -> Africa
// console.log(typeof continent); // -> string

// let dialog = "He said then 'How are you?' and the scene ended!"
// let dialog1 = 'He said then "How are you?" and the scene ended!'
// console.log(dialog)
// console.log(dialog1)

// let message1 = 'The vessel \'Mars\' called at the port.'
// let message2 = "Cyclone \"Cilida\" to pass close to Mauritius."
// console.log(message1); // -> The vessel 'Mars' called at the port.
// console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.
// let path = "C:\\Windows"
// console.log(path); // -> C:\Windows

// let path = "C:\\Windows" - "Windows"
// console.log(path) // -> NaN
// let test = "100" - "10"
// console.log(test); // -> 90
// console.log(typeof test); // -> number

// test = "100" + "10"
// console.log(test); // -> 90
// console.log(typeof test); // -> number

// test = "100" * "10"
// console.log(test); // -> 90
// console.log(typeof test); // -> number

// test = "100" / "10"
// console.log(test); // -> 90
// console.log(typeof test); // -> number

// let country = "Malawi"
// let continent = "Africa"
// let sentence = `${country} is located in ${continent}.`
// let sentence1 = country+" is located in "+continent+"."
// console.log(sentence) // -> Malawi is located in Africa.
// console.log(sentence1)

// function myFunction()
// {

// }

// myFunction()

// console.log(console)

// console.time()
// console.log("test console") // -> test console
// console.timeEnd() // -> default: 0.108154296875 ms

// let river = "Mekong"
// let character = river.charAt(2)
// console.log(character); // -> k

// let str = "My name is Aditya Gupta!"
// let str1 = "My-name-is-Aditya-Gupta!"

// console.log(str.length)
// console.log("--"+str.slice(3,7)+"--")
// console.log("--"+str.slice(3)+"--")
// console.log(str1.split("-"))
// console.log(str.split(" "))
// console.log(str.split("a"))
// console.log(str.split("A"))

// let declaredVar
// console.log(typeof declaredVar) // -> undefined
// declaredVar = 5;
// console.log(typeof declaredVar) // -> number
// declaredVar = undefined;
// console.log(typeof declaredVar) // -> undefined
// //The undefined value can also be returned by the typeof operator when a non-existent variable is used as an argument.
// console.log(typeof notDeclaredVar); // -> undefined
// console.log(notDeclaredVar); // -> Uncaught ReferenceError:

// let someResource
// console.log(someResource) // -> undefined
// console.log(typeof someResource) // -> undefined
// someResource = null
// console.log(someResource) // -> null
// console.log(typeof someResource) // -> object

// const str = String()
// const num = Number()
// const bool = Boolean()
// console.log("str: ", str) // ->
// console.log("Type of str: ", typeof str) // ->
// console.log("num: ", num) // -> 0
// console.log("Type of num: ", typeof num) // ->
// console.log("bool: ", bool) // -> false
// console.log("Type of bool: ", typeof bool) // ->
// const big1 = BigInt(42)
// console.log(big1) // -> 42n
// console.log("Type of big1: ", typeof big1) // ->
// const big2 = BigInt()   // -> Uncaught TypeError: Cannot convert undefined to a BigInt


// const num = 42
// console.log("num: ", num)
// const strFromNum1 = String(num)
// console.log("strFromNum1: ", strFromNum1)
// console.log("typeof strFromNum1: ", typeof strFromNum1)
// const strFromNum2 = String(8)
// console.log("strFromNum2: ", strFromNum2)
// console.log("typeof strFromNum2: ", typeof strFromNum2)
// const strFromBool = String(true)
// console.log("strFromBool: ", strFromBool)
// console.log("typeof strFromBool: ", typeof strFromBool)
// const numFromStr = Number("312")
// console.log("numFromStr: ", numFromStr)
// console.log("typeof numFromStr: ", typeof numFromStr)
// const boolFromNumber = Boolean(0)
// console.log("boolFromNumber: ", boolFromNumber)
// console.log("typeof boolFromNumber: ", typeof boolFromNumber)

// console.log(Number(42)); // -> 42
// console.log(Number("11")); // -> 11
// console.log(Number("0x11")); // -> 17 -> 11 => 1 * 16 + 1 * 1
// console.log(Number("0o11")); // -> 9
// console.log(Number("0b11")); // -> 3
// console.log(Number("12e3")); //  -> 12000
// console.log(Number("Infinity"));// -> Infinity
// console.log(Number("text")); // -> NaN
// console.log(Number(14n)); // -> 14
// console.log(Number(123456789123456789123n)); // - >  123456789123
// console.log(Number(true)); // -> 1
// console.log(Number(false)); // -> 0
// console.log(Number(undefined)); //  -> NaN
// console.log(Number(null));// -> 0

// console.log(Boolean(true)) // -> true
// console.log(Boolean(42)) // -> true
// console.log(Boolean(1)) // -> true
// console.log(Boolean(0)) // -> false
// console.log(Boolean(NaN)) // -> false
// console.log(Boolean("text")) // -> true
// console.log(Boolean("")) // -> false
// console.log(Boolean(" "))
// console.log(Boolean(undefined)) // -> false
// console.log(Boolean(null)) // -> false

// console.log(BigInt(11)); // -> 11n
// console.log(BigInt(0x11)); // -> 17n
// console.log(BigInt(11e2)); // -> 1100n
// console.log(BigInt(true)); // -> 1n
// console.log(BigInt("11")); // -> 11n
// console.log(BigInt("0x11")); // -> 17n
// console.log(BigInt("hello"))
// console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt
// console.log(BigInt(undefined)) // -> Uncaught TypeError: Cannot convert undefined to a BigInt
// console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

// const str1 = "42" + "1"
//"value1" operation[arithmatic] value2
//-, *, /   
//+ -> concatination
// console.log(str1);        // -> 421
// console.log(typeof str1); // -> string
// const str2 = "42" - "1"
// console.log(str2);        // -> 41
// console.log(typeof str2); // -> number

// const str3 = 42 - "1t"
// console.log(str3);        // -> 41
// console.log(typeof str3); // -> number

// let testObj = {
//     nr: 600,
//     str: "My text"
// }
// console.log("testObj: ", testObj)
// console.log(typeof testObj) // -> object

// console.log("nr: ", testObj.nr)
// console.log("str: ", testObj.str)

// let student_aditya = {
//     name: "Aditya",
//     course: "React",
//     contact: 9876543210,
//     email: "sdif@fjk.com"
// }

// let student_diksha = {
//     name: "Diksha",
//     course: "HTML",
//     contact: 98765439009,
//     email: "diksha@gmail.com"
// }

// console.log("Name: ", student_aditya.name)
// console.log("course: ", student_aditya.course)
// console.log("contact: ", student_aditya.contact)
// console.log("email: ", student_aditya.email)

// console.log("Name: ", student_diksha.name)
// console.log("course: ", student_diksha.course)
// console.log("contact: ", student_diksha.contact)
// console.log("email: ", student_diksha.email)

// student_aditya.contact = 8899776655
// student_aditya.email = "aditya@gmail.com"

// console.log("Name: ", student_aditya.name)
// console.log("course: ", student_aditya.course)
// console.log("contact: ", student_aditya.contact)
// console.log("email: ", student_aditya.email)

// student_aditya.age = 20
// console.log("Aditya's age: ", student_aditya.age)

// console.log("Diksha's age: ", student_diksha.age)

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// console.log(days[0]) // -> Sun
// console.log(days[2]) // -> Tue
// console.log(days[5]) // -> Fri
// days[0] = "Sunday"
// console.log(days[0]) // -> Sunday
// let emptyArray = []
// console.log(emptyArray[0]) // -> undefined

// let animals = []
// console.log(animals[0]) // -> undefined
// animals[0] = "dog"
// animals[2] = "cat"
// console.log(animals[0]) // -> dog
// console.log(animals[1]) // -> undefined
// console.log(animals[2]) // -> cat

// let values = ["Test", 7, 12.3, false]
// console.log(typeof values)
// console.log(values[0])
// console.log(values[1])
// console.log(values[2])
// console.log(values[3])

// let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]]

// console.log("names: ", names)
// let myArray = names[0]
// console.log(names[0])
// console.log(myArray)
// console.log(names[0][0])
// console.log(names[0][3])
// console.log(names[1][2])

// let user1 = {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@teleworm.us"
//  }
//  let user2 = {
//     name: "Mateus",
//     surname: "Pinto",
//     age: 21,
//     email: "MateusPinto@dayrep.com"
//  }
//  let objArray = [user1, user2]
//  console.log(objArray)
//  console.log(objArray[1])
//  console.log(objArray[1].surname)

//  objArray[2] = {
//     name: "Aditya",
//     surname: "Gupta",
//     age: 20,
//     email: "aditya@gmail.com"
//  }
 
//  console.log(objArray)

//  console.log(objArray[2].name)


// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// let day = "Sunday"
// console.log(typeof days)
// console.log(typeof day)
// console.log(days instanceof Array)
// console.log(day instanceof Array)

// console.log("Days length: ",days.length)
// console.log("objArray length: ", objArray.length)

// days[7] = "Someday" //not a good way

// console.log("Days length: ",days.length)

// console.log("index of wednesday: ", days.indexOf("Wed"))
// console.log("index of wednesday: ", days.indexOf("Wednesday"))

// let names = ["Olivia", "Emma", "Mateo", "Samuel"]
// console.log(names.length)
// names.push("Amelia")        //insert at the end of the array
// console.log(names.length)
// console.log(names)


// let names = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.indexOf("Mateo"))
// console.log(names.indexOf("Victor"))

// names.unshift("Victor")
// console.log(names.indexOf("Victor"))
// console.log(names)

// let names= ["Olivia", "Emma", "Mateo", "Samuel"]
// console.log(names.length)
// let name = names.pop()
// console.log(names.length)
// console.log(name)
// console.log(names)

// console.log(names.length)
// name = names.shift()
// console.log(names.length)
// console.log(name)
// console.log(names)

// let names = ["Olivia", "Emma", "Mateo", "Samuel"]
// console.log(names)
// names.reverse()
// console.log(names)


//let names = ["Olivia", "Emma", "Mateo", "Samuel"]
// let n1 = names.slice(2)
// console.log(n1)
// let n2 = names.slice(1,3)
// console.log(n2)
// let n3 = names.slice(0, -1)
// console.log(n3)
// let n4 = names.slice(-1)
// console.log(n4)
// let n5 = names.slice(-2)
// console.log(n5)
// console.log(names)

// let name1 = ["Aditya", "George", "Sandeep"]
// //names = names.concat(name1)
// name1 = name1.concat(names)
// console.log(name1)

// let year = 2050
// let newYear = year = 2051
// console.log("Year: ", year)
// console.log("newYear: ", newYear)

// console.log(2 + 2 * 2)
// console.log(2 + (2 * 2))
// console.log((2 + 2) * 2)

// const x = 5
// const y = 2
// console.log("addition: ", x + y)
// console.log("subtraction: ", x - y)
// console.log("multiplication: ", x * y);
// console.log("division: ", x / y)
// console.log("division remainder :", x % y)
// console.log("exponent: ", x ** y)

// let str = "123"
// let n1 = +str
// let n2 = -str
// let n3 = -n2
// let n4 = +"abcd"

// console.log(`${str} : ${typeof str}`); // -> 123 : string
// console.log(`${n1} : ${typeof n1}`); // -> 123 : number
// console.log(`${n2} : ${typeof n2}`); // -> -123 : number
// console.log(`${n3} : ${typeof n3}`); // -> 123 : number
// console.log(`${n4} : ${typeof n4}`); // -> NaN : number


// let a = 10
// console.log("a: ", a)
// console.log("a++: ", a++)
// console.log("a: ", a)
// console.log("++a: ", ++a)

// console.log("a: ", a)
// console.log("a--: ", a--)
// console.log("a: ", a)
// console.log("--a: ", --a)

// console.log(0.2 + 0.1);     // 0.30000000000000004
// console.log(0.2 * 0.1);     // 0.020000000000000004
// console.log(0.3 / 0.1);     // 2.9999999999999996
// x = 10;
// x += 2;
// console.log(x); // -> 12
// x -= 4;
// console.log(x); // -> 8
// x *= 3;
// console.log(x); // -> 24
// x /= 6;
// console.log(x); // -> 4
// x **= 3;
// console.log(x); // -> 64
// x %= 10
// console.log(x); // -> 4

// console.log(true && true); // -> true
// console.log(true && false); // -> false
// console.log(false && true); // -> false
// console.log(false && false); // -> false

// console.log(true || true); // -> true
// console.log(true || false); // -> true
// console.log(false || true); // -> true
// console.log(false || false); // -> false

// console.log(!true); // -> false
// console.log(!false); // -> true

// const a = false;
// const b = true;
// const c = false;
// const d = true;
// console.log(a && b && c || d)
// console.log(a && b && (c || d))

// let nr = 0
// let year = 1970
// let name = "Alice"
// let empty = ""
// console.log(!nr); // -> true
// console.log(!year); // -> false
// console.log(!name); // -> false
// console.log(!empty); // -> true
// console.log(!!nr); // -> false
// console.log(!!name); // -> true

// console.log(true && 1991); // -> 1991
// console.log(false && 1991); // -> false
// console.log(2 && 5); // -> 5
// console.log(0 && 5); // -> 0
// console.log("Alice" && "Bob"); // -> Bob
// console.log("" && "Bob"); // -> empty string
// console.log(true || 1991); // -> true
// console.log(false || 1991); // -> 1991
// console.log(2 || 5); // -> 2
// console.log(0 || 5); // -> 5
// console.log("Alice" || "Bob"); // -> Alice
// console.log("" || "Bob"); // -> Bob

// let x = 0
// let y = 0
// console.log(x++ && y++)
// console.log(x)
// console.log(y)
// console.log("--------")
// x = 1
// y = 0
// console.log(x++ && y++)
// console.log(x)
// console.log(y)

// let x = 0
// let y = 0
// console.log(x++ || y++)
// console.log(x)
// console.log(y)
// console.log("--------")
// x = 1
// y = 0
// console.log(x++ || y++)
// console.log(x)
// console.log(y)

// let a = true;
// console.log(a)
// a &&= false     // -> a = a && false
// console.log(a)

// let b = false;
// console.log(b)
// b ||= true      // -> b = b || true
// console.log(b)

let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

