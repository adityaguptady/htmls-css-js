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

let isUserReady = confirm("Are you ready?"); 
if (isUserReady) 
{ 
    alert("User ready!")
} 
else 
{ 
    alert("User not ready!")
}


