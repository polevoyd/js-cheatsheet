// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼
// ARRAY
// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼
// Insert Head	O(n)
// Insert Index	O(n)
// Insert Tail	O(1)

// Remove Head	O(n)
// Remove Index	O(n)
// Remove Tail	O(1)

// Find Index	O(1)
// Find Object	O(n)

let array = []; 

// Insert head, index, tail
let headIns = a.unshift(value);	   
let indexIns = a.splice(index, 0, value);
let tailIns = a.push(value);		

// Access head, index, tail
let headAcc = a[0];	
let indexAcc = a[index];	
let tailAcc = a[a.length-1];

// Remove head, index, tail
let removeHead = a.shift();	
let removeIndex = a.splice(index, 1);
let removeTail = a.pop();

// Extra
let pos = a.indexOf(value);
let subAr = a.slice(0, 3);
let subst = a.splice(index, amountOfElementsToRemove, whatToPutInstead);
let temp = a.slice();

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.reverse();        // [9, 8, 7, 6, 5, 4, 3, 2, 1]
a.sort();           // [1, 2, 3, 4, 5, 6, 7, 8, 9]
a.join();           // '1,2,3,4,5,6,7,8,9'
a.join('');         // '123456789'
a.join('-');        // '1-2-3-4-5-6-7-8-9'
s.splice(startingIndex, amountToRemove, whatToPutInstead);
a.every(condition); // return true if all elements satisfy condition
a.some(condition);  // return true of some elements satisfy condition

let arr = [1, 2, 3, 4, 5 ];
let [a, b, c, d, e] = arr;  // a = 1, b = 2, c = 3, d = 4, e = 5
let {x, y, z} = object; // will assign values

// FOREACH
// does not change array and return undefined
a.forEach(function(item, index, array){
  array[index] = item * 2; 			// will modify array in place
});

a.forEach(element => console.log(element));	// print each element

// STRING
let s = 'Very cool string';

// Slice O(N) (end-start)
s.slice(2);       // 'ry cool string'
s.slice(2, 7);    // 'ry co'

// Split
s.split('');      // ["V", "e", "r", "y", " ", "c", "o", "o", "l", " ", "s", "t", "r", "i", "n", "g"]
s.split(' ');     // ['Very', 'cool', 'string']
s.split(' ', 2);  // ['Very', 'cool']
s.split('r');     // ["Ve", "y cool st", "ing"]

// Splice
s.splice(startingIndex, amountToRemove, whatToPutInstead);

// SLICE
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2); 	// ["camel", "duck", "elephant"]

// SPLICE
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');	// inserts at 1st index position
console.log(months);  		// ['Jan', 'Feb', 'March', 'April', 'June']

// SOME
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks if element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

// EVERY
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));	// true

// .CONCAT()
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// .FILTER()
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

// .MAP()
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


// .REDUCE()
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is 6


// OBJECTS
Object.keys(obj);	// array of keys
Object.values(obj);	// array of values


// MAP
// execute on each element and return new array
a = a.map(function(num){
	return num * 2;
});

a = a.map( num => num * 2);

// FILTER
// check and return elements that true for condition

a = a.filter(function(num){
	return (num < 10);
});

a = a.filter( num => num < 10 );

'string'.trim(); // delete spaces on sides
Number.isInteger(); // true of false
let num = parseInt('10'); // to Integer
console.log( `My name is ${firstName}` );
5 < 10 ? true : false;

function sum(x, y){
 	return x+y;
}

const sum2 = (x,y) => {
	return x+y;
}

const sum3 = (x,y) => x+y; // one line doesnt need a return

// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼
// MAP
// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼

// Insert	        O(1)
// Access by Key	O(1)
// Remove by Key	O(1)

let myMap = new Map();

// Insert
myMap.set('key', 'value');

// Access by key
let valueMap = myMap.get('key');

// Remove by key
myMap.delete(key);

// Size
myMap.size;

for (var [key, value] of myMap) { console.log(key + ' = ' + value); } // 0 = zero // 1 = one 
for (var key of myMap.keys()) { console.log(key); } // 0 // 1 
for (var value of myMap.values()) { console.log(value); } // zero // one 
for (var [key, value] of myMap.entries()) { console.log(key + ' = ' + value); } // 0 = zero // 1 = one

myMap.forEach(function(value, key) { console.log(key + ' = ' + value); }); // "0 = zero" // "1 = one"

// Extra
let exist = myMap.has(key);
