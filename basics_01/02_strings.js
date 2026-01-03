const name="Minaskhi"
const age=20

console.log(name+age);

// modern syntax- string interpolation- inject variales

console.log(`hello my name is ${name} and my age is ${age}.`);

const gameName= new String('nocvaz')
// it is a object  have many methods.

console.log(gameName[0]);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4);
console.log(newString)// lsat char not included

const anotherString=gameName.slice(-8,0)// take negative valuea also;

const newstr = "   nocvaz ";
console.log(newstr.trim())//remove the spaces . work on whit spaces n new line characters.

const url="https://abc.com/abc%56blue"

console.log(url.replace('%56','-'))

console.log(url.includes('bac'))//give false

console.log(url.split('-'));//splits the string onn the basis of the given char
