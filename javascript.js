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