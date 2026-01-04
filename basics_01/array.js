const myArr = [0,1,2,3,4,5,6,true, "hello"];
// single struct with mix datatypes, js has resizable arrays,  not associsative arrays, with copy operation it makes shallow copies

const heroes=["a","b","c"];
const arr2 = new Array(1,2,3,4);
console.log(arr2[2]);

arr2.push(8)//like push_back
arr2.pop()//removes the last value
arr2.unshift(0); //inserts value at first
arr2.shift()//removes the value from the start

console.log(arr2.includes(7));
console.log(arr2.indexOf(3));

const newArr= arr2.join();//converst the array into string
// console.log(newarr);



//slice , splice

////diff btw slice( last value not included, donot manipulate original array) n splice (manipulate original arry , inculde the last value )

const marvel_heroes=["ironman","thor","blackwidow"]
const dc_heroes=["Superman","Flash","batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);//add array into array as array

let array=marvel_heroes.concat(dc_heroes); //combines two or more arrays return new array

const all_heroes=[...marvel_heroes,...dc_heroes]//spread operator(individual values added)

//flat - returns single array form the array in array in array ... need to specify the length arr.flat(..length)

//isArray()
//Array.from("abc")
//array.from({object}) need to specify array of keys or value is needed