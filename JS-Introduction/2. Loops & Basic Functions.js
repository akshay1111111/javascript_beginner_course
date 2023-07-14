'use strict';

// let hasDriverLicense =  false;
// const passTest = true

// if(passTest) hasDriverLicense = true;

// if(hasDriverLicense) console.log("I can drive")
//---------------------------------------------------
//Functions 
//create one function, return some data and call it outside
// function foodProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `This juice made up of ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const juiceDeatils = foodProcessor(5,3);
// console.log(juiceDeatils)
//----------------------------------------------------
//Function Expression - Where we doesn't name a function, we directly stored in a varible

// const calSum = function(a,b){
//     const sum = a+b;
//     return sum;
// }
// console.log(calSum(10,10))
//-----------------------------------------------------------
//Arrow Function
//Calculate total no of years left for retirement
// const yearsLeftForRetirment = (age, firstName) => {
//     const yearsLeft = 60-age;
//     console.log(`${yearsLeft} years left to retire for ${firstName}`)
// }

// yearsLeftForRetirment(23, 'Akshay')
//-----------------------------------------------------

//Arrays
//create array of friends
// const friends = ['Akshay', 'Sandesh', 'Yash']
// console.log(friends)//[ 'Akshay', 'Sandesh', 'Yash' ]

// //Another way to creating array
// const newFriends = new Array('Akshay', 'Sandesh', 'Yash')

// console.log(newFriends)//[ 'Akshay', 'Sandesh', 'Yash' ]
// console.log(newFriends.length) //3

// newFriends[1] = 'Adwait'
// console.log(newFriends) //[ 'Akshay', 'Adwait', 'Yash' ]

// //Some basic methods
// //1. Push Elements
// newFriends.push('Sandesh')
// console.log(newFriends) //[ 'Akshay', 'Adwait', 'Yash', 'Sandesh' ]

// //2. Add element to the beginneing
// newFriends.unshift('Akash')
// console.log(newFriends) //[ 'Akash', 'Akshay', 'Adwait', 'Yash', 'Sandesh' ]

// //3. Pop out element
// newFriends.pop();
// console.log(newFriends) //[ 'Akash', 'Akshay', 'Adwait', 'Yash' ]

// //4. Remove first element
// newFriends.shift();
// console.log(newFriends) //[ 'Akshay', 'Adwait', 'Yash' ]

// //5. Return index of element
// console.log(newFriends.indexOf('Adwait')) //1

// //6. Check given element is present or not
// console.log(newFriends.includes('Akshay')) //true
// console.log(newFriends.includes('Mayur')) //false

//--------------------------------------------------------------------------

//Objects
//create an objects of myDetails
// const myDetails = {
//     firstName : 'Akshay',
//     lastName : 'Birajdar',
//     age : 23,
//     job : 'Software Engineer',
//     friends : ['Adwait', 'Bhushan'],
// }

// console.log(myDetails)

// //Add function into an object
// const myDetails1 = {
//     firstName : 'Akshay',
//     lastName : 'Birajdar',
//     job : 'Software Engineer',
//     friends : ['Adwait', 'Bhushan'],
//     calAge : function(birthYear){
//         return 2023-birthYear;
//     }
// }
// const ageCaclulated = myDetails1.calAge(2000);
// console.log(ageCaclulated)
// console.log(myDetails1['calAge'](2000))
// console.log("Hi Akshay")
//------------------------------------------------------------
//for loop

// const myDetails = [
//     'Akshay',
//     'Birajdar',
//     23, 
//     'Software Engineer',
//      ['Adwait', 'Bhushan']
// ]

// for(let i=0; i<myDetails.length;i++){
//     console.log(myDetails[i])
// }
//--------------------------------------------------------------