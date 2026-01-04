// two types to declare object as literals and constructor
// singleton - by constructor

// object literals
// to use as symbol

const mysym= Symbol("key1")
const jsUser = { 
    name:"Minakshi",//as key value pair
    [mysym]:"key1",//symbol
    age:99,
    location:"delhi",
    isLoggedIn:false,
    lastLogin:["Monday","Tuesday","Wednesday"]
}

//to access
console.log(jsUser.location);
console.log(jsUser["location"]);//for keys like"full name" must be used through the sq bracs


jsUser.location="Jaipur";

//to freeze the values
// Object.freeze(jsUser)//after this no change

console.log(jsUser);

jsUser.greetings= function(){
    console.log("Hello , I'm here");
}
//  to access the functions of object
console.log(jsUser.greetings());
//if used as jsUser.greetings the will return a function

//as string interpolation
jsUser.greet= function(){
    console.log(`Hello,${this.name}`);
}
console.log(jsUser.greet())

//using constructor
const abcUser= new Object();

abcUser.id="123abc";
abcUser.name="blue";

const regularUser={
    email:"user@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abc",
            lastname:"bhk"
        }
    }
}

//to access 
console.log(regularUser.fullname.userfullname.lastname)

//to combine objects
const obj={1:"a",2:"b"};
const obj1={3:"w",4:"n"};

const obj2=Object.assign({},obj,obj1)//curly bracs not important but it act as source n other  act as target
console.log(obj2);

const obj3={...obj,...obj1};//spread values

//to access the keys or values iuse Objects.keys/value(obj)
// to find if value exist or not obj.hasOwnProperty(name)


//destructuring of object
const course = {
    courseName:"name",
    price:"999",
    courseInstructor:"abs"
}

const {courseInstructor:Instructor} = course;// extracting the value of courseInstructor from instructor
console.log(Instructor)//obj destructuring

//apis values in form of json

// {
//     "name":"abc",
//     "age":"100",
//     "isLogedIn":false  //json format or amy we get complex array
// }


