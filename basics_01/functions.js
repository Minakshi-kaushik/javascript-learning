// function addNum(num1, num2){
// console.log(num1+num2);//it is not returned
// }

function addNum(num1,num2){
    let result = num1+num2;
    return result
}
const result = addNum(3,6);
//problem arises when null or other dtypes is passed

function loginUserMessage(username="default value"){
    return `${username} just logged in`
}

 console.log(loginUserMessage("abc"))//if nothing is passed then it gives undefined...undefined is treated as false in conditons n loops


 //unknown num of arguments
//  ...rest operator


 function cartPrice(...num1){
//  take all undefinite num of the parameters
 }
//to pass obj in the functions
function handleObj(obj){
    //take parameters using the . n [ ] n string interpolation
}
// to pass the arrays same concept as the objs  ..both can be passed using the name or direct


// Scope
let a = 10;
const b = 20
var c = 3//donot work for the block scope
//{} scope of the program
//console.log(aor b )will not work but c will work

//block scope & global scope

//scope level and hoisting
function one(){
    const username = "abc"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    //console.log(website); gives error as parent function cannot access the vars of the child function

     two();
}

one();

//same in if else ...outer condition cannot access the inner condition variables...it is called closure



//+++++++++++++++++++++++++++++++interesting

function addone(num){
    return num+1;
}

addone(7);

const addTwo = function(num){//called expression...in JS variablws are very powerfull can hold json values or functions
    return num+2;
}

addTwo(8);

//hoisting if stored in expression cannot be used before declaration but in normal declaration it can be used before declaration

//Arrow Function...This

const user = {
    username:"abc",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome towebsite.`)
        console.log(this)//current context is object
    }
}

user.welcomeMessage()
user.username= "avh"
user.welcomeMessage()


console.log(this)//current context is empty object

//in browser this is window


// function one(){
//     let username ="abc"
//     console.log(this.username);//donot work will show undefined
// }

//arrow function
const one=()=>{
    let username ="abc"
    console.log(this);//also donot work will show undefined
}

//()=>{} arrow function basic syntax


// const addnum = (num1, num2)=>{
//     return num1+num2
// }

//implicit return
const addnum = (num1,num2)=> num1+num2
//or
const addtwo = (num1,num2)=> (num1+num2)

//to return object
const add = () => ({user:"name"}) //donot use curly braces

//Immediately Invoked Function Expression (IIFE)

(function two(){
    let username ="abc"
    console.log(this);//also donot work will show undefined
})();//synatx of IIFE...first ()is function definitiion ...()is fucntion call...used to save fucntion from global pollution..to end use ;

((name)=>{
    console.log(`User name is ${name}`)
})('abc');

