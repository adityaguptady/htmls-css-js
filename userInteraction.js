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