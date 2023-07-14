// let a = "amazing";

// console.log(10+10-10)

// let age = null
// console.log(age)

// let country = Symbol("India");
// console.log(country)
// console.log(typeof(country))

// //lets see difference between let, const and var
// age = 30; //it already declared at top, but we can still 
//             //reassign it for let
// console.log(age) //30

// const firstName = "India"
// console.log(firstName)

// //Lets see OPERATORS
// let m = 10;
// let n = 20;
// let q = 3;
// let j = "10";
// console.log(m+n) //30
// console.log(n-m)//10
// console.log(m*n)//200
// console.log(n/m)//2
// console.log(m%n)//0
// console.log(m**q) //1000

// console.log(m>n)//false
// console.log(m<n)//true
// console.log(m<=n)//true
// console.log(m>=n)//false

// console.log(m==j) //true - It does not check data types

// //"===" operator
// let x = 10;
// let y = 10;
// console.log(x===y) //true

// let z = "10";
// console.log(x===z)//false - Data types are different

// //Strings
// const name1 = "Akshay"
// const job = "Software Engineer"
// const birthYear = 2000

// const details = "I'm " + name1 + " ,a " + job + " and birthyear is "+birthYear;
// console.log(details)

// //Now, above statement can be done more simplier by using Template Literal
// //Just to get rid of + sign
// const newDetail = `I'm ${name1}, a ${job} and birthyear is ${birthYear}`;
// console.log(newDetail)

// //Exercise - Check person is able to take driving license
// // const age1 = 17

// // if(age1 >= 18){
// //     console.log("Able to apply for driving license")
// // }
// // else {console.log("Sorry, Please wait for "+(18-age1)+ " years")}

// console.log("----------------------")
// //Data type conversion
// const number1 = 10
// //convert Numebr it to string, symbol, bigint
// const newNumberString = String(number1)
// console.log(typeof newNumberString)//String

// const newNumberSymbol = Symbol(number1)
// console.log(typeof newNumberSymbol) //Symbol

// const newNumberBigint = BigInt(number1)
// console.log(typeof newNumberBigint)//bigInt

// //Note, we cannot convert it to Boolean, Null and undefined

// //Convert String to int
// const string1 = '10'
// const newStringNumber = Number(string1)
// console.log(typeof newStringNumber) //number

// const string2 = 'Akshay'
// const newString2Number = Number(string2)
// console.log(newString2Number) //NaN (Not a number)
// console.log(typeof newString2Number) //type of Nan is Number only


// //Truthy and Falsy values
// //There are 5 falsy values (0, '', undefined, null, NaN) - Means if we try to convert them into Boolean, will result False
// //Other all are truthy values

// console.log(Boolean(undefined))//false
// console.log(Boolean(0))//false
// console.log(Boolean("Akshay"))//true
// console.log(Boolean(1))//true

// //try one example
// const money = 0;
// if(money){
//     console.log("You have zero money")
// }else console.log("You have so much money") //This will print as Booleaan(0) is false

// //== vs ===

// const no1 = 10
// if(no1== '10') console.log("Number is 10")

// const no2 = 10
// if(no2 === '10'){
//     console.log("Value is 10")
// }else console.log("Value is not 10")

// //switch statement
// const day = prompt("Enter the day")

// switch(day){

//     case 'monday':
//         console.log("You entered monday")
//         break;
//     case 'tuesday':
//         console.log("You entered tuesday")
//         break;
//     case 'wednesday':
//         console.log("You entered wednesday")
//         break;
//     default:
//         console.log("You entered something different")
    
// }

//conditional operator

const newAge = 18;
const value1 = newAge>=18 ? console.log("You are above 18 ") :
    console.log("You are not above 18")