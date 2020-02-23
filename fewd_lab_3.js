//3.a) Define a function ( expression) ​ greet ​returning the value ​'Haydo!
function greet(){return "Haydo!"}

//3b) Declare a variable ​salutation​. Call the function ​greet ​and ​assign the result ​of the callto the variable ​salutation​
var salutaion = greet();

//4.Write a function ​echo​ that has a parameter called ​sound ​and return that passedparameter.
function echo(sound){
    return sound;
}

//5.Write a function​ greet ​having a parameter called ​name​. Return ​'Hello <parameter> !'where the parameter variable is concatenated with the ‘Hello’ and ‘!’ strings.
function greet(name){
    return `Hello ${name} !`
}

//8.Write a function ​shout​ that takes a ​string​ and returns this string ​duplicated​. In addition,the return should be ​logged​. The call shout('Fire') should return 'FireFire' and should log'FireFire' for example
function shout(string){
 return string+string;
}
console.log(shout("fire"));

//11.Write a function called ​doSomething​ with a parameter called ​name​, ​return​ the nameparameter. On the next line call the function with a ​value for the name​ ( can be anyname you like ).
function doSomething(name){
    return name
}
console.log(doSomething(false));

//12.Define a function called​ multiplyFive​ which accepts a ​number​ and ​returns ​that numbermultiplied by 5​.
function multiplyFive(number){
    return number*5
};

//13.Define a function called ​myFunction ​that uses the ​alert() ​method​​with a string value“Hello World!”​ inside. ​Call​ myFunction on the next line
function myFunction(){
    alert("Hello World!");
}
//myFunction();

//14.Define a variable called ​isAnswerRight​ and give it a ​true ​value. Use the ​ternaryoperator​ to console.log the ​‘The answer is right!’​ if the value is true and ​‘The answer iswrong!’​ if the value is false.
var isAnswerRight=true;
console.log(isAnswerRight?'The answer is right!':"the answer is wrong!")

//15.Write a function named ​tellFortune​ that: takes ​4 arguments​: number of children,partner's name, geographic location, job title. Output your fortune to the screenlike so:​ "You will be a X in Y, and married to Z with N kids." ​Call that function3 times with 3 different values for the arguments.
function tellFortune(noChildren, partName, geoLoc, jTitle){
    console.log(`You will be a ${jTitle} in ${geoLoc}, and married to ${partName} with ${noChildren} kids`);
}
tellFortune(0,"name1","place1","Job1");
tellFortune(1,"name2","place1","Job1");
tellFortune(2,"name3","place1","Job1");