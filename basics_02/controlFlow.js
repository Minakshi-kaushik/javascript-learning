//if
// if(condition){

// }else{

// }
// conditions
// <,>,<=,>=,==,!=,===(also checks type),!==

//short hand notation
// const balance=100;
// if(balance>89) console.log("test");//implicit scope

//nesting and && , ||

//switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;

switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("jan");
        break;
    case 3:
        console.log("jan");
        break;
    default:
        break;
}

//thruthy n falsy values

const userEmail = "abc@gmail.com"

if(userEmail){
    console.log("abc")
}else{

}
//falsy values=> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value=> "0", 'false', " ", [],{},function(){}

//Nullish Coalescing Operator (??):null undefined

let val1 ;
val1= 5 ?? 10//assign 5

val1= null??10//check comapatbility of fucntion with null
val1= undefined??10//check comapatbility of fucntion with null


//terinary operator

// condition ? true: false