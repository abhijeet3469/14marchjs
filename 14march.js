// strings:- 1. primitive data type and 2. used to store textual data.
// Ways of writing strings in Js:-

// let singleQuote = 'Single-Quote';
// let doubleQuote = "Double-Quote";
// let backtick = `Back-Tick`; // we can use variables inside backtick, whatever will be the value of variable that will be
                              // pushed in string. Also it allows us to have multiple line inside the string.

// e.g.
// let amount = 100;
// let billMessage = `Please pay Rs ${amount} here`; // where backtick, $ symbol with curly braces use known as template literals.
// console.log(billMessage);

// e.g
// let guestList = `Guests:
// Abhijeet
// Amit
// Vicky
// Deepu`;
// console.log(guestList);

// In case of single quote and double quote we cannot do multiple lines.
// e.g.
// let guestList = "Guests:
// Amit
// Vicky";
// console.log(guestList); // Uncaught SyntaxError: Invalid or unexpected token

// e.g.
// let guestList = 'Guests
// Amit
// Vicky
// ';
// console.log(guestList); // Uncaught SyntaxError: Invalid or unexpected token

// But we can do multiple lines in single-quote or double quote with \n. Back slash is known as escape character.
// e.g.
// let guestList = 'Guests:\n Abhijeet\n Amit\n Vicky';
// console.log(guestList);

// e.g.
// let guestList = "Guests:\n Abhijeet\n Amit\n Vicky\n"
// console.log(guestList);

// Multiple lines in the code but in console it shows in a single line.
// e.g. using sinle quote
// let str = 'Hello-\
// continuing in 2nd line-\
// now in 3rd line';
// console.log(str);

// e.g. using double quote
// let str = "Hello-\
// continuing in 2nd line-\
// now i am in 3rd line";
// console.log(str);

// e.g. using backtick
// let str = `hello-\
// continuing in 2nd line-\
// now in 3rd line`;
// console.log(str);

// e.g.
// let str1 = "hello\nworld";
// let str2 = `hello
// world`;
// console.log(str1);
// console.log(str2);
// console.log(str1 === str2);

// Escape:- Whenever you want a character to be escaped, you use a backslash before that.
// e.g.
// let str = 'Hello, how\'re you doing?';
// console.log(str);

// e.g.
// let str1 = "Hello that color is 'red'."; // single quote in double quote, we dont have problem.
// console.log(str1);

// let str2 = "Hello that color is \"blue\"."; // here we have to use back slash.
// console.log(str2);

// let str3 = 'Hello that color is \'green\'.'; // here we have to use back slash.
// console.log(str3);

// let str4 = 'Hello that color is "yellow".'; // double quote in single quote, we dont have problem.
// console.log(str4);

// let str5 = `Hello that color is \`violet\`.`; // here we have to use back slash.
// console.log(str5);

// let str6 = `Hello that color will be of 'mine' choice.`; // single quote in back tick, we dont have problem.
// console.log(str6); 

// let str7 = `Hello that color will be now in "pink".`; // double quote in back tick, we dont have problem.
// console.log(str7);

// let str8 = `it\`s, it's, "color".`
// console.log(str8);

// let str9 = `it\`s\`, it's, "color".`
// console.log(str9);

// How to access the length of the string?
// let str = "hello";
// console.log(str.length);

// How to access the character of the string?
// Two ways:- [] or charAt()
// let str1 = "hello";
// console.log(str1[1]);
// let str2 = "world";
// console.log(str2.charAt(2));

// Strings are immutable in JS i.e. we cannot change it
// e.g.
// let str = 'abc';
// str[0] = 'd'; // we cannot change parts of string
// console.log(str);

// e.g.
// let str = "abc";
// str = "apple";
// str[0] = "b"; // we cannot change parts of string
// console.log(str);

// e.g.
// let str = 'orange';
// str = `apple`; // we can re-assign the whole string.
// console.log(str);
// str[0] = 's' // but cannot do modification in string.
// console.log(str);

// Concatenation of string:- two ways:- (1.) usiing + and (2.) using concat, concat works only with string.
// e.g.
// let name1 = "Vijay Pratap Singh";
// let age = 22;
// let statement = name1 + " is " + age + ' years ' + ` old `;
// console.log(statement);

// e.g. using template literal
// let name1 = "Vijay Pratap Singh";
// let age = 22;
// let statement = `${name1} is ${age} years  old `;
// console.log(statement);

// e.g.
// let name1 = "Vijay Pratap Singh";
// let age = 22;
// let statement = name1.concat(" ", age);
// console.log(statement);

// String methods:-
// (1.) indexOf()
// e.g.
// str = "widget with id";
// console.log(str.indexOf('with')); // 7
// console.log(str.indexOf('widget')); // 0
// console.log(str.indexOf('Widget')); // -1 (case sensitive)
// console.log(str.indexOf('id')); // 1
// console.log(str.indexOf('id', 2)); // 2; by using 2nd argument (i.e. index number) from which can search subsequentely further more.

// (2.) includes() - returns a boolean value
// e.g.
// str = "Widget";
// console.log(str.includes("id"));
// console.log(str.includes("W"));
// console.log(str.includes("w"));
// console.log(str.includes("id", 2));

// (3.) slice()
// e.g.
// let str = "stringify";
// // console.log(str.slice(0,5)); // strin
// console.log(str.slice(2)); // ringify
// console.log(str.slice(-4, -1)); // gif

// (4.) substring() - same as slice but it does not work for nagative indices
// e.g.
// let str = 'stringify';
// console.log(str.substring(2, 6)); // ring

// (5.) split() - this method converts your string to an array. split applied on strings only whereas join applied on array.
// e.g.
// let greeting = 'Hi how are you';
// let resultArr = greeting.split(' ');
// console.log(resultArr);
// console.log(resultArr.join('-'));

// e.g.
// let example = "what*are*you*doing";
// let resultArr = example.split('*');
// console.log(resultArr);
// console.log(resultArr.join('-'));

// e.g.
// let str = "Vijay Pratap Singh";
// let resultArr = str.split(' ');
// console.log(resultArr);
// console.log(resultArr.join('\n'));

// split() and join() are chainable-
// let str = 'what*are*you*doing';
// console.log(str.split('*').join('-')); // chainable

// reverse() - works on array
// let greeting = 'hi how are you';
// console.log(greeting.split(' ').reverse().join('-'));

// reverse the each character:-
// e.g.
// let str = 'hello';
// let revStr = '';
// for (let i = 4; i >= 0; i--) {
//     revStr = revStr + str[i];
// }
// console.log(revStr);

// or

// e.g.
// let str = 'hello';
// let revStr = '';
// for (let i = str.length-1; i >= 0; i--) {
//     revStr += str[i];
// }
// console.log(revStr);

// (6.) replace(), replaceAll() -
// e.g.
// const temp = 'John is a good guy. John is working as a developer'; // we cannot re-assign const variable
// console.log(temp.replace('John', 'Rahul')); // replaces only the first occurence
// console.log(temp.replaceAll('John', 'Rahul')); // replaces all occurence
// console.log(temp.split(' ').join('-')); // we can edit the string but cannot re-assign const variable
// in case of array, we have to do by push method -
// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);

// (7.) trim() method- removes the spaces from end and nehind the word as well.
// let str = '                    Abhijeet                    ';
// console.log(str);
// console.log(str.trim());

// (8.) toUpperCase(), toLowerCase() - 
// let str = 'hello';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// -----------------------------STRINGS ARE COMPLETED----------------------------------------------

// -----------------------------INTRO OF OBJECTS---------------------------------------------------

// Objects:- are non-primitive data type. It is denoted by {....some sort of data.....}
// Structure of object:- 
// let user = {
//     key : value // --> key is known as label through which can identify property
// }              // --> key and value together known as key value pair or property.

// e.g.
// let user = {
//     name: 'Abhijeet',
//     isAdmin: true,
//     array: [1, 2, 3, 4],
//     obj: {
//         insideObj: 'This is inside'
//     }
// }
// console.log(user.name);
// console.log(user.obj.insideObj);
// console.log(user.array[2]);

// e.g.
// let str = '12323'; // --> it will automatically convert into number (coercion) and then comparison will done.
// let num = 12323; // --> automatic conversion is not happen
// console.log(num == str, 'double'); // true
// console.log(num === str, 'triple'); // false

// primitive:- which is inbuilt inside language like string, number, boolean value.
// non-primitive:- objects and array can have different type of data like it can have strings, numbers,
                // boolean values. it is made up of primitives types.
                // array:-
               // let arr = [1, 2, 3, 'hi', true] // non-primitive type

              //  objects:-
               // let user = {
                //     name: 'Abhijeet',
                //     isAdmin: true,
                //     array: [1, 2, 3, 4],
                //     obj: {
                //         insideObj: 'This is inside'
                //     }
                // }
                // console.log(user.name);
                // console.log(user.obj.insideObj);
                // console.log(user.array[2]);

// call back function:- by using normal function
// let arr = [1, 2, 3, 4];
// function cb(acc, curr) {
//     acc = acc + curr;
//     return acc;
// }
// console.log(arr.reduce(cb, 0)); // call back function because function inside function

// by using arrow function
// let arr = [1, 2, 3, 4];
//  cb = (acc, curr) => {
//     acc += curr;
//     return acc;
// }
// console.log(arr.reduce(cb, 0)); // call back function because function inside function

// conversion of normal function into arrow function:-
// function xyz(num) { // --> normal function
//     return num * 2;
// }
// let arr = [1, 2, 3];
// let newArr = arr.map(xyz);
// console.log(newArr);

// or

// let xyz = num => num * 2 // --> arrow function
// let arr = [1, 2, 3]; 
// let newArr = arr.map(xyz);
// console.log(newArr);

// or

// let xyz = num => num * 2;
// console.log(xyz);
// let arr = [1, 2, 3];
// let newArr = arr.map(num => num * 2);
// console.log(newArr);

// or

// let xyz = num => num * 2;
// console.log(xyz);
// let arr = [1, 2, 3];
// let newArr = arr.map(xyz);
// console.log(newArr);

// or

// let arr = [1, 2, 3];
// let newArr = arr.map(num => num * 2);
// console.log(newArr);

// or

// let arr = [1, 2, 3];
// let newArr = arr.map(function(num){
//     return num * 2;
// })
// console.log(newArr);

// or

// let anonymous = function(num) {
//     console.log('hi', num);
// }
// anonymous(2);
