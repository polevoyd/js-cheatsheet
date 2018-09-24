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
let [a, b, c, d, e] = arr;	// a = 1, b = 2, c = 3, d = 4, e = 5
let {x, y, z} = object;		// will assign values

// FOREACH - does not change array and return undefined
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
animals.slice(2); 		// ["camel", "duck", "elephant"]

// SPLICE
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');	// inserts at 1st index position
console.log(months);  		// ['Jan', 'Feb', 'March', 'April', 'June']

// SOME - check if SOME of elements is true and return bool
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks if element is even
  return element % 2 === 0;
};


console.log(array.some(even));	// true

// EVERY - check if EVERY of elements is true and return bool
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));	// true

// .CONCAT()
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));		// ["a", "b", "c", "d", "e", "f"]

// .FILTER() - FILTER values with a condition and return array of only ones that TRUE
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);		// [12, 130, 44]

// .MAP()
var array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);	// [2, 8, 18, 32]


// .REDUCE()
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;	// sum is 6
}, 0);

 
// OBJECTS
Object.keys(obj)	// array of keys
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

'string'.trim(); 	// delete spaces on sides
Number.isInteger(); 	// true of false
let num = parseInt('10'); // to Integer
console.log( `My name is ${firstName}` );
5 < 10 ? true : false;

function sum(x, y){
 	return x+y;
}

const sum2 = (x,y) => {
	return x+y;
}

const sum3 = (x,y) => x+y;	// one line doesnt need a return

// c utuba
arr.filter((e, i, l) => l.lastIndexOf(e) == i);
// или es6
Array.from(new Set(arr));


//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from('foo'));		// ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));		// [2, 4, 6]


// The Array.isArray() method determines whether the passed value is an Array.
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

// The concat() method is used to merge two or morvar array1 = ['a', 'b', 'c'];

var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));	// ["a", "b", "c", "d", "e", "f"]
e arrays. This method does not change the existing arrays, but instead returns a new array.

// The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.
var array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between position 3 and 4
console.log(array1.copyWithin(0, 3, 4));	// expected output: Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
console.log(array1.copyWithin(1, 3));		// expected output: Array [4, 4, 5, 4, 5]

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value);	// [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

// The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));	// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));
// expected output: 3

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.
arr1.map(x => [x * 2]);		// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);	// [[2], [4], [6], [8]]

// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));	// expected output: 4








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

for (var [key, value] of myMap) { console.log(key + ' = ' + value); }		// 0 = zero // 1 = one 
for (var key of myMap.keys()) { console.log(key); }				// 0 // 1 
for (var value of myMap.values()) { console.log(value); }			// zero // one 
for (var [key, value] of myMap.entries()) { console.log(key + ' = ' + value); } // 0 = zero // 1 = one

myMap.forEach(function(value, key) { console.log(key + ' = ' + value); });	// "0 = zero" // "1 = one"

// Extra
let exist = myMap.has(key);
