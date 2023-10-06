// .toString()     // Convert number to string

// let num = 123;
// let convertString = num.toString()
// console.log(convertString)           // "123"
// console.log(typeof convertString)    // String











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










//Number(variable inside)      // Covert String to Number

// let str = "123"
// let converNum = Number(str)
// console.log(converNum)           // 123
// console.log(typeof converNum)    // Number










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// .length     // Find out the length of characters

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length) // 26










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// .slice(start,end)    // Extracts parts of string


//EX1
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13); // .slice(include, exclude)
// console.log(part) //Banana


//EX2
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7); // .slice(start till end)
// console.log(part) //Banana, Kiwi



//EX3
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12); // .slice(backwards / from end of string)
// console.log(part)


//EX4
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// console.log(part)










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// .substr (start, length)      // Same as slice, but second parameter is the length

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 4);  //Start from index 7, but only give length of 4 after it.
// console.log(part) // Bana











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// .replace("first match", "changed")    // Replace string  // Also case sensitive   
// use /word/g for global, and /word/i for insensitive case

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText) // "Please visit W3Schools"










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// .toUpperCase() and .toLowerCase()   // Convert lower case string to upper case and vice versa


// Uppercase
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2) // "HELLO WORLD!"


// Lowercase
// let text1 = "Hello World!";       
// let text2 = text1.toLowerCase();
// console.log(text2) //"hello world!"










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// .trim()   // Removes whitespace from both side of string

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2)


//Note : trimStart() and trimEnd() exist. Both removes white space from start of string or end of string respectively.










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// .charAt(string index)    // To show specific character based on index

// let text = "HELLO WORLD";
// let char = text.charAt(6);
// console.log(char) // W



 // or use property access with []


// let text = "HELLO WORLD";
// let char = text[6];
// console.log(char)










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// .split("")    // Split for each character
// .split(" ")   // Split on space (each word)          // Convert string into arrays
// .split(",")   // Split on commas  (One index)


// let text = "HELLO WORLD";
// let char = text.split(" ");
// console.log(char) // ["HELLO", "WORLD"]










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// .indexOf()     // Returns position of substring in main string, -1 if not found

// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index) // 7



// .lastIndexOf()   // Last occurence instead.

// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index); // 21










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// .search()     // More versatile to search index, but no 2nd parameter

// let text = "Please locate where 'locate' occurs!";
// let textSearch = text.search("locate");
// let textIndex = text.indexOf("locate")
// console.log(textSearch) // 7
// console.log(textIndex) // 7










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */








// .match("word")    // look for a match in string, returns the index

// let text = "The rain in SPAIN stays mainly in the plain";
// let match = text.match("ain");
// console.log(match)











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// .includes("word", starting index)   // Returns true (or false) if string contains specific value.
// also case sensitive
// also check startsWith() and endsWith(). return true for first and last word respectively

// let text = "Hello world, welcome to the universe.";
// let include = text.includes("world");
// console.log(include) // true











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// Terniary operator   // (If condition true) ? (result if true) : (result if false)

// let age = 25

// let result = age >=25 ? "Time to start thinking" : "Nope"

// console.log(result)



//Multiple else in terniary

// let age = prompt('age?',18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';1000
// console.log( message );















/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// Functions

// Local variable


// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     console.log( message );
//   }
  
//   showMessage(); // Hello, I'm JavaScript!
  
//   console.log( message ); // <-- Error! The variable is local to the function









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// Outer Variable (Global) 

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// // Can also effect global variable

// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// console.log( userName ); // John before the function call

// showMessage();

// console.log( userName ); // Bob, the value was modified by the function










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// The outer variable is only used if there’s no local one.

// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   console.log(message);
// }

// // the function will create and use its own userName
// showMessage();

// console.log( userName ); // John, unchanged, the function did not access the outer variable










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer
  
//     console.log( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
//   // the value of "from" is the same, the function modified a local copy
//   console.log( from ); // Ann








/**
 * 
 * 
 * 
 * 
 * 
 * 
 */








// function add7(number){
//     return number + 7
// }

// console.log(add7(7))










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// function multiply(num1,num2){
//     return num1 * num2
// }

// console.log(multiply(7,7))










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// function captitalize(str){
//     let lowered = str.toLowerCase()
//     let strArray = lowered.split('')
//     strArray[0] = strArray[0].toUpperCase('')
//     return strArray.join('')
// }

// console.log(captitalize("HELLO"));
// console.log(captitalize("wOrLd"));
// console.log(captitalize("pRogRammers"));











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// function captitalizeArr(str){

//        let lowered = str.toLowerCase()
//        let strArray = lowered.split('')

//        for(i = 0 ; i < strArray.length ; i++){
//         if(i === 0){
//             strArray[i]= strArray[i].toUpperCase();
//         }
//        }
//        return strArray.join('')

// }

// console.log(captitalizeArr("HELLO"))
// console.log(captitalizeArr("tHe"))
// console.log(captitalizeArr("aS pEr ma emilAA"))










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// function lastLetter(str){
//     return str[str.length - 1]
// }

// console.log(lastLetter("Hello"))
// console.log(lastLetter("world"))
// console.log(lastLetter("astronomy"))










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// function lastLetterSlice(str){
//     return str.slice(-1)
// }

// console.log(lastLetterSlice("Hello"))
// console.log(lastLetterSlice("world"))
// console.log(lastLetterSlice("astronomy"))


// const lastLetter = (str) => {
//     return str.slice(-1)
// }

// console.log(lastLetter("hello"))









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// let ask =(question,yes,no) => {
//     if(confirm(question)) {
//         yes();
//     }
//     no();
// }

// ask("Do you agree?", function() {alert("You agreed")}, function(){alert("You disagree")})



// let ask =(question,yes,no) => confirm(question) ? yes() : no()

// ask("Do you agree?", function() {alert("You agreed")}, function(){alert("You disagree")})









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// const fizzBuzz = () => {
//     const num = 100
//     for(i = 0; i <= num; i++){
//         if( i % 3 === 0){
//             console.log(i + " Fizz")
//         } else if( i % 5 === 0){
//             console.log(i+ " Buzz")
//         } else if ( i % 3 === 0 && i % 5 === 0 ){
//             console.log(i+" FizzBuzz")
//         }else{
//             console.log(i)}
//         }

//     }

// fizzBuzz()


// const fizzBuzz = (num) => {
//     num % 3 === 0 && num % 5 === 0 ? console.log(num + " FizzBuzz") : 
//     num % 5 === 0 ? console.log(num + " Buzz") : 
//     num % 3 === 0 ? console.log(num + " Fizz") : 
//     console.log(num)
// }

// fizzBuzz(15)
// fizzBuzz(5)
// fizzBuzz(3)
















/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









/////////////// ARRAY //////////////


// first element is index 0

// const cars = ["Proton", "Perodua", "Toyoya", "Nissan"]
// cars[0] = "Ferrari"

// console.log(cars)









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// Array methods

// .length     // Number of elements in array

// const animals = ["cat", "dog", "hamster", "crocodile"]

// console.log(animal.length) // 4










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// .join() to join all array element and specify a separator in the brackets with double quote  eg. (" * ") , (" "), (" - ")
//  Note, spaces applied too.


// const animals = ["cat", "dog", "hamster", "crocodile"]

// console.log(animals.join(" * ")) // cat * dog * hamster * crocodile
// console.log(animals.join(" - ")) // cat - dog - hamster - crocodile
// console.log(animals.join(" + ")) // cat + dog + hamster + crocodile












/**
 * 
 * 
 * 
 * 
 * 
 * 
 */








// toString() separate array with commas

// const animals = ["cat", "dog", "hamster", "crocodile"]

// console.log(animals.toString())  // cat,dog,hamster,crocodile












/**
 * 
 * 
 * 
 * 
 * 
 * 
 */












// .pop() removes last element of array 

// const animals = ["cat", "dog", "hamster", "crocodile"]

// animals.pop() // removes last element = crocodile

// console.log(animals) // ["cat", "dog", "hamster"]  











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// .push("element") adds new element to last index

// const animals = ["cat", "dog", "hamster", "crocodile"]

// animals.push("Oyen")

// console.log(animals) //  ['cat', 'dog', 'hamster', 'crocodile', 'Oyen']











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// .shift() removes first element of array, and "shifts" all elements to a lower index instead of making first elemnt null

// const animals = ["cat", "dog", "hamster", "crocodile"]

// animals.shift()

// console.log(animals) //  ['dog', 'hamster', 'crocodile']













/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// .unshift("element") adds new first elements and "unshift" the rest of the elements forward

// const animals = ["cat", "dog", "hamster", "crocodile"]

// animals.unshift("eagle")

// console.log(animals) // ['eagle', 'cat', 'dog', 'hamster', 'crocodile']













/**
 * 
 * 
 * 
 * 
 * 
 * 
 */












// array[index] use to change element

// const animals = ["cat", "dog", "hamster", "crocodile"]

// animals[0] = "Oyen"

// console.log(animals) // ['Oyen', 'dog', 'hamster', 'crocodile'] // cat changed to Oyen












/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// delete array[index] will leave undefined/empty in the index chosen, unlike shift() and unshift()
// Note : better use shift() or unshift(). 

// const animals = ["cat", "dog", "hamster", "crocodile"]

// delete animals[0]

// console.log(animals) // [empty, 'dog', 'hamster', 'crocodile'] 













/**
 * 
 * 
 * 
 * 
 * 
 * 
 */












// arrayOne.concat(arrayTwo , arraythree)   // use for merging 2 (or more) arrays together


// 2 arrays example
// const animals = ["cat", "dog", "hamster", "crocodile"]
// const fruits = ["apple", "orange", "banana", "watermelon"]

// console.log(animals.concat(fruits)) // ['cat', 'dog', 'hamster', 'crocodile', 'apple', 'orange', 'banana', 'watermelon']










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// 3 arrays example 

// const animals = ["cat", "dog", "hamster", "crocodile"]
// const fruits = ["apple", "orange", "banana", "watermelon"]
// const tools = ["hammer", "screw", "wrench", "drill"]

// console.log(animals.concat(fruits,tools)) // ['cat', 'dog', 'hamster', 'crocodile', 'apple', 'orange', 'banana', 'watermelon', 'hammer', 'screw', 'wrench', 'drill']


// console.log(animals.concat("Oyen")) // Adds last element to last index, just like  .push()













/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// .flat() merge all sub arrays in array

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();


// console.log(myArr) // [Array(2), Array(2), Array(2)]  = 
// console.log(newArr) // [1, 2, 3, 4, 5, 6]














/**
 * 
 * 
 * 
 * 
 * 
 * 
 */












// .splice(index to start imsert, elements from previous index to remove, add any element here, additional element here)

// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]
// animals.splice(2, 0, "sheep", "rabbit");

// console.log(animals) // ['cat', 'dog', 'sheep', 'rabbit', 'hamster', 'crocodile', 'fox', 'fish', 'deer', 'snake', 'lizard']

// // starting index 2 ("hamster"), added "sheep" will be index 2, followed by "rabbit" in index 3,
// // the 0 show how many elemnts to be deleted from said index. Since it's 0, none is deleted











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// if its 3 to be deleted

// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]
// animals.splice(2, 3, "sheep", "rabbit");

// console.log(animals) // ['cat', 'dog', 'sheep', 'rabbit', 'fish', 'deer', 'snake', 'lizard']

// // starting at index 2 "hamster" , followed by "crocodile" and "fox" , removed, 
// // replaced with "sheep" in index 2 and "rabbit" in index 3.

















/**
 * 
 * 
 * 
 * 
 * 
 * 
 */












// .slice(index to start (include), index to stop(exclude))  // to slice out pieces of array
// NOTE : .slice() creates new array && didn't remove any elements that was excluded from source array.


// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.slice(1,3)) // ["dog", "hamster"] // starting from index 1 ("dog") exclude index 3 (crocodile) and onwards




// if only have starting index, it'll take the rest
// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.slice(6)) // starting at index 6 ("deer") and onwards
















/**
 * 
 * 
 * 
 * 
 * 
 * 
 */












// .sort() arrage array by alphabatical  
// NOTE : .sort() is used for string only.
// NOTE : for numbers, need to use .sort(function {a - b}) , example below


// for string
// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.sort())









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// for numbers (must be a function, including arrow function)
// const num =  [90, 56, 23, 43, 35, 3, 10]

// num.sort((a,b) => {
//      return a - b;       // ascending order
//     // return b - a     //for descending order
// } )

// console.log(num) // [3, 10, 23, 35, 43, 56, 90]













/**
 * 
 * 
 * 
 * 
 * 
 * 
 */













// .reverse() will reverse the order of array from last index to first index

// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.reverse()) // ['lizard', 'snake', 'deer', 'fish', 'fox', 'crocodile', 'hamster', 'dog', 'cat']













/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// .filter()    // create new array by removing all elemnts by callback function returns falsy value
// NOTE : USES CALLBACK, if element falsy, it'll be remove, else, keep the element


//EG 1
// const num = [1,2,3,4,5,6]

// const even = num.filter(element => element % 2 === 0)
// const odd = num.filter(element => element % 2 !== 0)

// console.log(even)  // [2, 4, 6]
// console.log(odd)  // [1, 3, 5]










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// EG 2 : Can be use to remove duplicates (with .indexOf())
// NOTE : under callback function, the syntax by order is (ELEMENT, INDEX, ARRAY)

// const num = [1,2,3,2,1,3,3,5,4,6]

// const removeDupes = num.filter((element, index, array) => {
//     return array.indexOf(element) === index
// })

// console.log(removeDupes)
















/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// SPREAD OPERATOR AND REST OPERATOR


// ...array (syntax for both spread and rest)
// NOTE : Spread operator : use to "unbox" the array in console.log with no commas

// Spread operator example 1

// const animals = ["cat", "dog", "hamster", "crocodile"]

// const tools = ["hammer", "screw", "drill", "ruler"]

// console.log(...animals, ...tools) // cat dog hamster crocodile hammer screw drill ruler












/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// NOTE : Spread Operator : can be used to merge two different arrays to one array

// Spread operator example 2


// const animals = ["cat", "dog", "hamster", "crocodile"]

// const tools = ["hammer", "screw", "drill", "ruler"]

// const animalTool = [...animals, ...tools] // put them both in the same box, by order

// console.log(animalTool) // ['cat', 'dog', 'hamster', 'crocodile', 'hammer', 'screw', 'drill', 'ruler']











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// NOTE : Spread operator can be used to create new array (different name) with same element

// Spread operator example 3

// const animalsOutside = ["cat", "dog", "rabbit" , "hamster"]
// const animalsinside = [...animalsOutside, "chicken"]  // Same element, but different array with new name, and can add on new elements

// console.log(animalsinside) // ['cat', 'dog', 'rabbit', 'hamster', 'chicken']
// console.log(...animalsinside) // cat dog rabbit hamster chicken   // "unbox" the array













/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// Rest operator usually used in function argument, boxed it as an array instead of "unboxing" like spread
// If we don't know how many arguments it'll take, there's where Rest Operator comes in

// Rest Operator example 1 (Without rest operator)



// function withoutRest(a,b,c){                // Only 3 arguments passed
//     return a + b + c
// }

// console.log(withoutRest(3,1,6,0,9,4,7))     // Only first 3 will be passed, the rest ignored, thus , 3,1,6 will be passed










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// // Example 1 of rest operator  (single argument)

// function withRest(...a){
//     console.log(a)      // Array created by rest opertor in argument
//     console.log(...a)   // apple ball cat dog elephant    // "unboxed" the array created (basically spread operator here)
// }

// withRest("apple","ball","cat","dog","elephant") // ['apple', 'ball', 'cat', 'dog', 'elephant']   // "boxed" as array










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// Example 2 of rest operator  (multiple arguments)
// NOTE : the rest operator MUST BE THE LAST ARGUMENT if it's multiple arguments


// function withRest(a, b, ...c){
//     console.log(`The value of a is ${a}`) // The value of a is apple
//     console.log(`The value of b is ${b}`) // The value of b is ball
//     console.log(c) // ['cat', 'dog', 'elephant'] 
//     console.log(...c) // cat dog elephant   // Spread operator here
// }

// withRest("apple","ball","cat","dog","elephant") // only the first 2 goes to a and b respectively
//                                                 // "cat" and onwards "boxed" in an array under "...c"












/**
 * 
 * 
 * 
 * 
 * 
 * 
 */











// Exercise from TOP

// Exercise 1

// const removeFromArray = function(array, ...toRemove) {
//       return array.filter(element => !toRemove.includes(element))
//     }
// console.log(removeFromArray([1, 2, 3, 4], 3))









/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// Exercise 2

// const sumAll = function(start, end) {
//     let sum = 0

//     if(start < 0 || end < 0 || typeof start !== "number" || typeof end !== "number") return 'ERROR'
    

//     if(start > end){
//         let temp = start
//         start = end
//         end = temp

//         console.log(start, end)
//     }


//     for(i = start; i <= end; i++){
//         sum+= start
//         start++
//     }
//     return sum
    
// };

// console.log(sumAll(900,23))










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */









// Exercise 3

// const leapYears = function(year) {
//     if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
//         return true
//     }
//     return false
// };

// console.log(leapYears(1996)) //true
// console.log(leapYears(1997)) // false
// console.log(leapYears(34992)) // true
// console.log(leapYears(1900)) // false
// console.log(leapYears(1600)) // true
// console.log(leapYears(700)) // false





// year % 4 === 0   is leap year

// year % 100 !== 0  are not leap year unless its year % 400 === 0
 










/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// Exercise 4





// const convertToCelsius = function(temp) {
//     return Math.round((temp - 32) * (5/9) * 10) / 10
//   };
  
//   const convertToFahrenheit = function(temp) {
//     return Math.round((temp* (9/5) + 32) * 10) / 10
//   };
  
  
//   console.log(convertToCelsius(32))
//   console.log(convertToCelsius(100)) 
//   console.log(convertToCelsius(-100)) 
  
  
//   console.log(convertToFahrenheit(0)) 
//   console.log(convertToFahrenheit(73.2)) 
//   console.log(convertToFahrenheit(-10)) 









 



/**
 * 
 * 
 * 
 * 
 * 
 * 
 */










// DOM - Document Object Model      
// NOTE : This notes and exercises are from FreeCodeCamp : https://www.youtube.com/watch?v=5fb2aPlgoys&ab_channel=freeCodeCamp.org
// NOTE : this is the html for practice in index.html near the bottom

{/* <div id="container">
       <h1 id="main-heading">Favorite Movie Franchise</h1>
       <ul>
        <li class="list-items">The Matrix</li>
        <li class="list-items">Star Wars</li>
        <li class="list-items">Harry Potter</li>
        <li class="list-items">Lord of The Rings</li>
        <li class="list-items">Marvel</li>
       </ul>
    </div> */}



// DOM manipulation 
// Different ways to select elements


// getElementById()     // Used for id only

// const title = document.getElementById('main-heading')

// console.log(title)     // <h1 id="main-heading">Favorite Movie Franchise</h1>



//
//


// getElementbyClassName()      // Used for class name only

// const listItem = document.getElementsByClassName('list-items')

// console.log(listItem)    // HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]




//
//



// getElementByTagName()   // refers to HTML tag name such as "div", "li" , "ul" , etc

// const listItems = document.getElementsByTagName('li')

// console.log(listItems)    // HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]




//
//



// querySelector()      // Can select tag, class, id (any element) 
// but if there's multiple same class nme, Id names, or tag names, it'll select the first one it comes across.
// NOTE : if it's class, use the dot before class name (eg .container , .list-items)
// NOTE : if its ID, use # nefore ID name (eg #container ,  #list-items)

// const container = document.querySelector('.list-items')    // Class select :  <li class = "list-items">The Matrix</li>   // Only first item it comes across
// const container = document.querySelector('#main-heading')    //  ID select : h1#min-heading
// const container = document.querySelector('div')    //  Tag select : <div id="container">...</div>

// console.log(container) 






//
//





// querySelectorAll ()      // Used to select all classname, ID, or tag name available, unlike querySelector() which selects only the 1st one they came across


// const container = document.querySelectorAll('.list-items')    // Class select :  NodeList(10) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items, li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]
// const container = document.querySelectorAll('#main-heading')    //  ID select : NodeList(2) [h1#main-heading, h1#main-heading]   // NOTE : this is just example. IDs need to be different for diffent elements
// const container = document.querySelectorAll('div')    //  Tag select : NodeList(2) [div#container, div#container]


// console.log(container) 






//
//





// styling elements using .style.cssAttributes = "css value" // syntax : variable.style.anyCSSAttributes(eg color, font size, etc) = "set values here like 2px or red"
// NOTE : css attribute in css has a dash (eg font-size), but in javascript, it's camelCase (eg fontSize)

// const title = document.querySelector('#main-heading')

// title.style.color = 'red'
// title.style.fontSize = '70px'

// console.log(title)  // Inline styling created via DOM :   <h1 id="main-heading" style="color:red; font-size: 70px">Favorite Movie Franchise</h1>






//
//





// But selecting more than one elements, it won't work to be an  inline styling, need to loop it

// const listItems = document.querySelectorAll('.list-items')

// //Not working example
// //listItems.styles.fontSize = '2rem' // This won't work. Need to loop through the list first



// // Working example
// // for(i = 0; i < listItems.length ; i++){
// //     listItems[i].style.fontSize = '5rem'         // This works
// // }

// console.log(listItems)





//
//




// BIG EXAMPLE STARTS (uncomment what's relevant to understand the steps)


// // Create elements 
// // NOTE: Attribute is the thing set in HTML tag. Like class, id, style (inline), etc

// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// // Adding elemnts using .append
// ul.append(li)           // Adding li under ul


// // Modifying the text
// li.innerText = 'Spider-Man'  // Text will be included under list


// // Modifying Attributes & Classes  // syntax : variable.setAttribute('id / class / any attributes , 'id name / class name / any attribute properties')
// li.setAttribute('id', 'main-heading')  // id is set as "main-heading, thus following anything h1's css did. 
// li.setAttribute('style', 'color:red')  // added style as sttribute, with color set to red


// // Remove attributes  // syntax : variable.removeAttribute('attribute name like id or class')
// li.removeAttribute('id')  // id atribute remmoved
// li.removeAttribute('style')  // style attribute removed, color is not red anymore


// // Access attributes        // syntax : variable.getAttribute('attribute name like id, or class, etc')

// const title = document.querySelector('#main-heading')

// console.log(title.getAttribute('id'))   //  main-heading



// // Using classList (.add, .remove , .contains)
// // NOTE : Many more methods under classList, but learn  this first

// li.classList.add('list-items')     // classList.add('class name')    // will follow any styling done to that class name in css
// li.classList.remove('list-items')     // classList.remove('class name')     // removes class name and any css styles with it.
// console.log(li.classList.contains('list-items'))  // classList.contains('class name') to check if its true or false. 
//                                                   // In this case, false, since it was removed


// // Remove element   
// li.remove()     // won't appear anymore since it's been removed


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Extra Note : Access the inner contents 
// NOTE : Better use innerText than innerHTML. Security reasons 

// const firstListItem = document.querySelector('.list-items')  // Selects the first list, "Neo The Matrix"

// console.log(firstListItem.innerText)    // Shows the text inside : Neo The Matrix


// console.log(firstListItem.textContent)  // Shows EXACTLY how it is in HTML (move in HTML, it'll move too)
//                                         // Neo
//                                         // The Matrix    


// console.log(firstListItem.innerHTML)    // Shows what's inside the tag, including tags within the selected tags
//                                         // <span>Neo </span>
//                                         // The Matrix


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



// BIG EXAMPLE ENDS





//
//







// Navigate / Traverse the DOM 

// Parent Node Traversal
// NOTE : parentNode will take any parent above the targetted child, regardless it being an element or not
// NOTE : parentElement will take specific element node directly above the targetted child.


// let ul = document.querySelector('ul')

// console.log(ul.parentNode)   // <div id="container"> ... </div>
// console.log(ul.parentElement)   // <div id="container"> ... </div>


// // Get grandparent node
// console.log(ul.parentElement.parentElement)   // <body>...</body>
// console.log(ul.parentElement.parentElement)   // <body>...</body>



// const html = document.documentElement;

// console.log(html.parentNode) // #document      // Still retrieved any parent node, in this case, the document node is above the html node.
// console.log(html.parentElement) // null        // Cause HTML node and Document node aren't the same 





//
//




// Child node Traversal
// NOTE : #text is the white space, tabs, line breaks between nodes

// let ul = document.querySelector('ul')

// console.log(ul.childNodes) // NodeList(11) [text, li.list-items, text, li.list-items, text, li.list-items, text, li.list-items, text, li.list-items, text]
//                            // NOTE : Indentation matter. If the last list is the same line as 2nd last, the NodeList length will be 10 instead of 11
//                            // NOTE : text is one node (text node), li.list-items is one node (li is element node)

// console.log(ul.firstChild) // #text  // referring to ul.childNodes 
// console.log(ul.lastChild)  // #text  // referring to ul.childNodes


// // ul.childNodes.style.backgroundColor = 'blue'     // This won't work. Check the array. 
// ul.childNodes[1].style.backgroundColor = 'blue'     // This works under ul.childNodes


// console.log(ul.children) // HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]
//                          // NOTE : text not included, targets elements

// console.log(ul.firstElementChild)   // <li class = "list-items"><span>Neo </span>The Matrix</li>   // inline style added if you uncomment the blue background earlier
// console.log(ul.lastElementChild)    // <li class = "list-items">Marvel</li>

// // NOTE : firstElementChild takes the first specific element, same goes for lastElementchild takes last specific element






//
//





// Sibling node traversal
// NOTE : Comments in HTML are included as a node.
// NOTE : #text are basically the white space , line breaks between nodes

// let ul = document.querySelector('ul')
// const div = document.querySelector('div')

// console.log(div.childNodes)  // NodeList(7) [text, h1#main-heading.test, text, comment, text, ul, text]

// console.log(ul.previousSibling) // #text, refer to above array, check the ul and see what's previous
// console.log(ul.nextSibling)    // #text, refer to above array, check the ul and see what's next


// console.log(ul.previousElementSibling)    // <h1 id="main-heading" class="test">Favorite Movie Franchise</h1>
//                                           // ul's previous element under div is h1

// console.log(ul.nextElementSibling)    // null   // Because after ul, there's no more element unless added









//
//







// Exercise from TOP

// const body = document.querySelector('body')

// const p = document.createElement('p')
// body.append(p)
// p.innerText = `Hey I'm red!`
// p.style.color = 'red'

// const h3 = document.createElement('h3')
// body.append(h3)
// h3.innerText = `I'm a blue h3!`
// h3.style.color = 'blue'

// const div = document.createElement('div')
// body.append(div)
// div.style.border = '1px solid black'
// div.style.backgroundColor = 'pink'

// const divH1 = document.createElement('h1')
// const divP = document.createElement('p')
// div.append(divH1, divP)
// divH1.innerText = `I'm in a div!`
// divP.innerText = `ME TOO!`

// console.log(body)

// const h4 = document.createElement('h4')

// body.append(h4)

// h4.innerText = 'Just a h4. Nothing special'
// h4.setAttribute('class', 'item-list')
// h4.removeAttribute('class', 'item-list')
// h4.classList.add('hello')
// h4.classList.remove('hello')
// console.log(h4)





//
//





// Events in JavaScript   
// Method 1 i HTML

// Method 2 (refer HTML) 

// const btn = document.getElementById('btn')

// btn.onclick = () => alert('Hello World')






//
//





// Method 3 , use .addEventListener
// NOTE the syntax is   :   variable.addEventListener('event here like click or hover', () => {do something here})

// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     alert("Hello world 2!")
// })






//
//






// Method 4, called from HTML, create a function with the same name as the onclick


// if onclick under HTML tag already has the function name, can use this
// function sayHello(){
//     alert("Helloooooo")
// }






//
//







// Method 5 : getElementById first, create a function after, then make the onclick = functionName()

// const btn = document.getElementById('btn')

// function sayHello(){
//     alert("hey hey heeeey")
// }


// btn.onclick = sayHello      // NOTE : do not put the () after function name if want to use this method








//
//







// Method 6 : use addEventListener, but call a function that was created earlier instead of making it a function inside

// const btn = document.getElementById('btn')

// // Created this first
// function sayHello(){
//     alert("wazzuuuuuuuuupp")
// }


// // Call it inside
// btn.addEventListener('click', sayHello)         // NOTE : again, dont use () after function name in this method








//
//






// The 'e' inside parameter shows all the details of the event (eg if event is "click", it tells you what happeened, where it happened, etc)

// const btn = document.getElementById('btn')

// // Details of event
// btn.addEventListener('click', function (e) {
//    console.log(e);
// });


// // Once e is console.logged , can see the properties of the events, such as target, layerX, etc. e.propertyName to access the detail


// // the .target refers to the element tag itself, in this case , the <button> in HTML
// btn.addEventListener('click', function (e) {
//    console.log(e.target);
// });


// // Because .target is the HTNL element, can access the style property, and access css properties

// btn.addEventListener('click', function (e) {
//     e.target.style.background = "yellow"
//     e.target.style.color = "black"
// });
 








//
//







// // using querySelectorAll('selector')
// // NOTE : use .forEach , then addEventListerner within it

// const buttons = document.querySelectorAll('button')

// // Use forEach method to iterate each buttons
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button.id)
//     })
// })





// NOTE : common useful events : click, dblclick, keydown, keyup








// const para = document.getElementById('keyboard')


// para.addEventListener('keypress', (event) => {
//     console.log(event.key)
//     console.log(event.code)
// })











/**
 * 
 * 
 * 
 * 
 * 
 * 
 */








// Objects     --     syntax :  let user  = {key:value , key:value}     or    let user = new Object() 
// Note : if new Object(), insert it by user.name = "hariz", etc
// Note: inside objects, there's always "keys", such as "name" , "age", and each key must have values, even if its null



// // eg1  object literals
// let userOne = {
//     name: 'hariz',
//     age: 28,
//     isAdmin : true,
//     isStudent : false
// }


// //eg2 object constructor
// let userTwo = new Object();

// userTwo.name = "Akmmal"
// userTwo.age = 27
// userTwo.isAdmin = false

// console.log(userOne) // {name: 'hariz', age: 28}
// console.log(userTwo) // {name: 'Akmmal', age: 27}
// console.log(userOne.name) // hariz      // access specific properties' value



// // Use delete to remove property
// delete userOne.isStudent
// console.log(userOne)











// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */







// // multi word keys need to use quotations

// let userThree = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };

// console.log(userThree)  // {name: 'John', age: 30, likes birds: true}
// // console.log(userThree.likes birds) // Error. Need to use dquare bracket (can autocomplete properly)

// console.log(userThree[`likes birds`]) // Access multiword properties with square brackets, and properly quoted (single, double, backticks)











// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */







// Basic functions with objects

// function makeUser(name, age, isStudent){
//     return {
//         name: name,
//         age: age,
//         isStudent : isStudent
//     }
// }

// let userFive = makeUser("Dragonborn", 45, true)
// console.log(userFive)
// console.log(userFive.name)




// or



// function makeUser(name, age, isStudent){
//     return {
//         name,       // same as "name : name"
//         age,        // same as "age : age"
//         isStudent   // same as "isStudent : isStudent"
//     }
// }

// let userSix = makeUser("Viking", 56, false)
// console.log(userSix)
// console.log(userSix.name)














// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */







// under object, property names can be be reserved keywords
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
  
//   console.log( obj.for + obj.let + obj.return );  // 6















// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */









// // Use "in" to check if properties exist in objects. Gives out true or false     --    syntax :  "propertyname" in objName
// let user = { 
//     name: "John", 
//     age: 30 
// };

// console.log( "age" in user ); // true, user.age exists
// console.log( "occupation" in user ); // false, user.occupation doesn't exist
















// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */








// for...in loop
// Iterate every propertyName inside object.
// Syntaxt : (Create object with properties inside first)  ->  for (let property in objName){ console.log(property) console.log(objName[property])}

// let userSeven = {
//     name : "Sharid",
//     age : 25,
//     isWorking : true
// }

// for (let key in userSeven){
//     console.log(key) // name age isWorking
//     console.log(userSeven[key]) // Sharid 25 true
// }

















// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */







// if property names are in integer form, the result will be in ascending order
// but if its not in integer, it'll listed in creation order

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49  
  }