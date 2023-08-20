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






// Outer Variable 

// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John




// Can also effect outer variable

// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// console.log( userName ); // John before the function call

// showMessage();

// console.log( userName ); // Bob, the value was modified by the function




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




// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer
  
//     console.log( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
//   // the value of "from" is the same, the function modified a local copy
//   console.log( from ); // Ann





// function add7(number){
//     return number + 7
// }

// console.log(add7(7))





// function multiply(num1,num2){
//     return num1 * num2
// }

// console.log(multiply(7,7))





// function captitalize(str){
//     let lowered = str.toLowerCase()
//     let strArray = lowered.split('')
//     strArray[0] = strArray[0].toUpperCase('')
//     return strArray.join('')
// }

// console.log(captitalize("HELLO"));
// console.log(captitalize("wOrLd"));
// console.log(captitalize("pRogRammers"));






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





// function lastLetter(str){
//     return str[str.length - 1]
// }

// console.log(lastLetter("Hello"))
// console.log(lastLetter("world"))
// console.log(lastLetter("astronomy"))





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



// let ask =(question,yes,no) => {
//     if(confirm(question)) {
//         yes();
//     }
//     no();
// }

// ask("Do you agree?", function() {alert("You agreed")}, function(){alert("You disagree")})



// let ask =(question,yes,no) => confirm(question) ? yes() : no()

// ask("Do you agree?", function() {alert("You agreed")}, function(){alert("You disagree")})



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





// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */




// .unshift("element") adds new first elements and "unshift" the rest of the elements forward

// const animals = ["cat", "dog", "hamster", "crocodile"]

// animals.unshift("eagle")

// console.log(animals) // ['eagle', 'cat', 'dog', 'hamster', 'crocodile']





// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */




// array[index] use to change element

// const animals = ["cat", "dog", "hamster", "crocodile"]

// animals[0] = "Oyen"

// console.log(animals) // ['Oyen', 'dog', 'hamster', 'crocodile'] // cat changed to Oyen





// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */



// delete array[index] will leave undefined/empty in the index chosen, unlike shift() and unshift()
// Note : better use shift() or unshift(). 

// const animals = ["cat", "dog", "hamster", "crocodile"]

// delete animals[0]

// console.log(animals) // [empty, 'dog', 'hamster', 'crocodile'] 





// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */




// arrayOne.concat(arrayTwo , arraythree)   // use for merging 2 (or more) arrays together


// 2 arrays example
// const animals = ["cat", "dog", "hamster", "crocodile"]
// const fruits = ["apple", "orange", "banana", "watermelon"]

// console.log(animals.concat(fruits)) // ['cat', 'dog', 'hamster', 'crocodile', 'apple', 'orange', 'banana', 'watermelon']




// 3 arrays example 

// const animals = ["cat", "dog", "hamster", "crocodile"]
// const fruits = ["apple", "orange", "banana", "watermelon"]
// const tools = ["hammer", "screw", "wrench", "drill"]

// console.log(animals.concat(fruits,tools)) // ['cat', 'dog', 'hamster', 'crocodile', 'apple', 'orange', 'banana', 'watermelon', 'hammer', 'screw', 'wrench', 'drill']


// console.log(animals.concat("Oyen")) // Adds last element to last index, just like  .push()





// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */



// .flat() merge all sub arrays in array

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();


// console.log(myArr) // [Array(2), Array(2), Array(2)]  = 
// console.log(newArr) // [1, 2, 3, 4, 5, 6]






// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */





// .splice(index to start imsert, elements from previous index to remove, add any element here, additional element here)

// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]
// animals.splice(2, 0, "sheep", "rabbit");

// console.log(animals) // ['cat', 'dog', 'sheep', 'rabbit', 'hamster', 'crocodile', 'fox', 'fish', 'deer', 'snake', 'lizard']

// // starting index 2 ("hamster"), added "sheep" will be index 2, followed by "rabbit" in index 3,
// // the 0 show how many elemnts to be deleted from said index. Since it's 0, none is deleted






// if its 3 to be deleted

// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]
// animals.splice(2, 3, "sheep", "rabbit");

// console.log(animals) // ['cat', 'dog', 'sheep', 'rabbit', 'fish', 'deer', 'snake', 'lizard']

// // starting at index 2 "hamster" , followed by "crocodile" and "fox" , removed, 
// // replaced with "sheep" in index 2 and "rabbit" in index 3.









// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */





// .slice(index to start (include), index to stop(exclude))  // to slice out pieces of array
// NOTE : .slice() creates new array && didn't remove any elements that was excluded from source array.


// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.slice(1,3)) // ["dog", "hamster"] // starting from index 1 ("dog") exclude index 3 (crocodile) and onwards




// if only have starting index, it'll take the rest
// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.slice(6)) // starting at index 6 ("deer") and onwards













// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */




// .sort() arrage array by alphabatical  
// NOTE : .sort() is used for string only.
// NOTE : for numbers, need to use .sort(function {a - b}) , example below


// for string
// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.sort())




// for numbers (must be a function, including arrow function)
// const num =  [90, 56, 23, 43, 35, 3, 10]

// num.sort((a,b) => {
//      return a - b;       // ascending order
//     // return b - a     //for descending order
// } )

// console.log(num) // [3, 10, 23, 35, 43, 56, 90]





// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */






// .reverse() will reverse the order of array from last index to first index

// const animals = ["cat", "dog", "hamster", "crocodile", "fox", "fish" , "deer", "snake", "lizard"]

// console.log(animals.reverse()) // ['lizard', 'snake', 'deer', 'fish', 'fox', 'crocodile', 'hamster', 'dog', 'cat']










// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */




function addNumber(a, b){
    return a + b
}

console.log(addNumber("Helllo",8))







const addTwoNums = (a,b) => {
    return a + b
}

console.log(addTwoNums("Hello" , " World"))