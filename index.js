// alert("HELLO WORLD")
//document.write("Hello Septa People")
//console.log("Hi guys,its cool to learn js")

const Name="Similoluwa"
const Place="ikeja"
const School="LASU"





console.log("My name is"+" "+Name+" "+"I live at"+" "+Place+","+"I attend"+" "+School)

//The var statement declares a variable.

//let is used to declare a variable that is block scoped in JavaScript

//const declaration maintains consnant value,they can only be declared within the blocks and can not be outdated or redeclared

function addition(a,b){
    console.log(a + b)
    console.log(a + "+" + b + "=", a + b)
}

addition(3,2)
addition(2,4)
addition(5,2)
addition(8,2)

function subtraction(a,b){
    console.log(a - b)
    console.log(a + "-" + b + "=", a - b)
}
subtraction(5,3)
subtraction(4,2)
subtraction(8,2)
subtraction(9,5)

function mutiply(a,b){
    console.log(a * b)
    console.log(a + "*" + b * "=", a * b)
}
mutiply(5,3)
mutiply(4,2)
mutiply(8,2)
mutiply(9,5)


let woman = {
    skinColor:"dark skin",
    age:"30",
    Height:"7ft",
};
console.log(woman.age);
woman.skinColor="dark"
console.log(woman.skinColor"dark skin");


//Array
let animal = ["Dog", "Bat"]

let cars = ["Lexus", "Venza", "Corolla", "Micra"];

//access an array
console.log(cars);
console.log(cars[2]);

cars[3] = "Toyota"
console.log(cars);

let person = [

{

  gender:'female',
  ageBracket: '15-20',
  School:"queens college",
  adress: {
    street : "adekunle street",
    city: "lagos"
  }
}
{
   gender:'male',
   ageBracket: '15-20',
   School:"Kings college",
   adress: {
    street : "adekunle street",
    city: "ogun"
}
}
]
console.log(person[0].gender);
console.log(person[1].gender);

person[0].address.city="ogun";
person[1].adress.city="ogun";

person[2]="Simloluwa"




let usersage = prompt("please enter your age");
console.log (usersage)
let citizenship =prompt("Are you a citizen?");
console.log (citizenship)
  
if (usersage =>18 && citizenship == "yes"){
    console.log ("user is eligible to vote")
}
else {
    console.log("user is not eligible to vote")}
    



    let usersage = prompt("please enter your age");
    console.log (usersage);
    let citizenship = prompt("Are you a citizen? (yes or no)");
    console.log (citizenship);
      
    if (usersage >=18 && citizenship === "yes"){
        console.log ("user is eligible to vote");
    }
    else {
        console.log("user is not eligible to vote")}
        
    
            

         




//conditional statements

// if (condition){
//    //code to be executed if the condition is true
//}
18 > 

//!= ==
//!== ===




let age =18;



if ( < 20) {

}