//comment out with "//"

// output to console
console.log("Hello World!");

var myStr = `That's a string.`
var myNum = 5;
var myBool = true;

console.log(`My favorite number is ${myNum}.`)

myStr = 5;
var myArr = ["Bob", 5, true];
console.log(myArr);

myArr.push("Tiffany");
console.log(myArr);
myArr.pop();
console.log(myArr);

console.log(myArr.length);
console.log(myArr[0]);

if(myNum > 5){
    console.log("Number is greater than 5");
}
else if(myNum == 5){
    console.log("number is equal to 5");
}
else{
    console.log("Number is less than 5");
}

// for(var index = 0; index < myArr.length; index++){
//     console.log(myArr[index]);
// }

for(var index in myArr){
    console.log(myArr[index]);
}

var num = 0;

while(num < 5){
    console.log(num);
    num++;
}

var myObject = {
    key:"value",
    "key2":"value2",
    "key-3":"value3"
};
console.log(myObject);
console.log(myObject.key);
console.log(myObject['key']);

var User = {
    name: "Ivan",
    age: 27,
    location: "Milwaukee"
}
for(var key in User){
    console.log(User[key]);
}

function SayHello(name){
    console.log(`Hello, ${name}`);
    return
}

SayHello("Bob");
// x = 4   global scope
// def Hello():
//     x = 5   local scope


