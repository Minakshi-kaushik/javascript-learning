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