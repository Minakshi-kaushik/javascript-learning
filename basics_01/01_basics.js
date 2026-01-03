console.log(2>1);

console.log("2">1);
// js convert the data types into same one and then compare them.
console.log(null>0);
console.log(null==0);//works differently
console.log(null<0);

//strict check ===(this also checks data types. donot do conversion)

console.log("2"===2); //false
//datatypes summary
/*official two types primitive n non primitive iff on the basis of the storage n access form the memory.
primitive 7 types(all call by value) : string, num, bool, null, undefined,symbol, BigInt
reference type(non primitive):array, objects, functions

js isdynamically types lang*/


let myobj={
    name:"Minakshi",
    age:20,
    done:true,
}//object data type


//function
const myfunction = function(){
    console.log("done");
}

console.log(typeof myboj);

//null type of is object
// non primitive  types are mainily functions (functions called object functions)




// stack(primitve type) cope milti hai , heap(non-primitive) reference milta hai,

