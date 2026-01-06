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
