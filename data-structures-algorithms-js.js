// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼
//               ARRAY
// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼
// Insert Head	O(n)
// Insert Index	O(n)
// Insert Tail	O(1)
 
// Remove Head	O(n)
// Remove Index	O(n)
// Remove Tail	O(1)

// Find Index	  O(1)
// Find Object	O(n)

/*    Use for

> Simple storage
> Adding but not deleting
> Serialization
> Quick lookups by index
> Easy conversion to C-style arrays
> Efficient traversal (contiguous CPU caching)

  Do not use for

> Insertion/deletion in the middle of the list
> Dynamically changing storage
> Non-integer indexing

*/

let array = []; 
 	
// Insert head, index, tail
let headIns =   a.unshift(value);	   
let indexIns =  a.splice(index, 0, value);
let tailIns =   a.push(value);		

// Access head, index, tail
let headAcc =   a[0];	
let indexAcc =  a[index];	
let tailAcc =   a[a.length-1];

// Remove head, index, tail
let removeHead =  a.shift();	
let removeIndex = a.splice(index, 1);
let removeTail =  a.pop();

// Extra
let pos =   a.indexOf(value);
let subAr = a.slice(0, 3);
let subst = a.splice(index, amountOfElementsToRemove, whatToPutInstead);
let temp =  a.slice();

//                     [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.reverse();        // [9, 8, 7, 6, 5, 4, 3, 2, 1]
a.sort();           // [1, 2, 3, 4, 5, 6, 7, 8, 9] (sorting by first digit)
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
a.forEach(function(element, index, array){
  array[index] = element * 2; 			// will modify array in place
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
months.splice(1, 0, 'Feb');	// ['Jan', 'Feb', 'March', 'April', 'June'] 		

// SOME - check if SOME of elements is true and return bool
array1.some( element => element % 2 === 0 );	// true

// EVERY - check if EVERY of elements is true and return bool
array1.every(currentValue < 50);	// true

// .CONCAT - concat arrays and return array
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

array1.concat(array2);		// return ["a", "b", "c", "d", "e", "f"]

// .FILTER - FILTER values with a condition and return array of only ones that TRUE
[12, 5, 8, 130, 44].filter( element => element > 5);

// .MAP() - changing each element and return modified array
const map1 = array.map(element => element * 2);

// .REDUCE() - reducing array and return one element
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) 
{
  return accumulator + currentValue;	// sum is 6
}, 0);  // starting value

 
// OBJECTS
Object.keys(obj)	  // array of keys
Object.values(obj);	// array of values


'string'.trim();          // delete spaces on sides
Number.isInteger();       // true of false
parseInt('10'); // to Integer

// remove duplicates from array
arr.filter((element, index, array) => array.lastIndexOf(element) === index);
// construct an new array from a set of arr - removes duplicates
Array.from(new Set(arr));

//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
Array.from('foo');      // ["f", "o", "o"]
Array.from([1, 2, 3], x => x + x);  // [2, 4, 6] - can pass a callback to set each element to something 

// The Array.isArray() method determines whether the passed value is an Array.
Array.isArray([1, 2, 3]);  // true

// The concat() method is used to merge two or morvar array1 = ['a', 'b', 'c'];

var array2 = ['d', 'e', 'f'];

array1.concat(array2);	// ["a", "b", "c", "d", "e", "f"]


// The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.
var array1 = [1, 2, 3, 4, 5];

// place at position 0 the element between position 3 and 4
console.log(array1.copyWithin(0, 3, 4));	// expected output: Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
console.log(array1.copyWithin(1, 3));		// expected output: Array [4, 4, 5, 4, 5]

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

var array1 = ['a', 'b', 'c'];
var iterator1 = array1.entries();

iterator1.next().value;	// [0, "a"]
iterator1.next().value; // [1, "b"]

// The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));	// [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1)); // [1, 5, 5, 5]

// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
}); // 12

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

array1.findIndex(findFirstLargeNumber); // 3

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
var arr1 = [1, 2, [3, 4]];
arr1.flat();  // [1, 2, 3, 4]

// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.
arr1.map(x => [x * 2]);		// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);	// [[2], [4], [6], [8]]

// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
array1.includes(2); // true

var pets = ['cat', 'dog', 'bat'];

pets.includes('cat');  // true

pets.includes('at'); // false

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));	// expected output: 4





// Linked List
// In computer science, a linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. 
// It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to 
// the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, 
// allowing efficient insertion or removal from arbitrary element references. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, 
// is not feasible. Arrays have better cache locality as compared to linked lists.

// Linked List


// Time Complexity
// Access	Search	Insertion	Deletion
// O(n)	O(n)	O(1)	O(1)
// Space Complexity
// O(n)

class List {

  /**
   * We start with an empty block of memory which we are going to represent
   * with a normal JavaScript array and we'll store the length of the list.
   *
   * Note that we want to store the length separately because in real life the
   * "memory" doesn't have a length you can read from.
   */

  constructor() {
    this.memory = [];
    this.length = 0;
  }

  /**
   * First we need a way to retrieve data from our list.
   *
   * With a plain list, you have very fast memory access because you keep track
   * of the address directly.
   *
   * List access is constant O(1) - "AWESOME!!"
   */

  get(address) {
    return this.memory[address];
  }

  /**
   * Because lists have an order you can insert stuff at the start, middle,
   * or end of them.
   *
   * For our implementation, we're going to focus on adding and removing values
   * at the start or end of our list with these four methods:
   *
   *   - Push    - Add value to the end
   *   - Pop     - Remove a value from the end
   *   - Unshift - Add value to the start
   *   - Shift   - Remove a value from the start
   */

  /*
   * Starting with "push" we need a way to add items to the end of the list.
   *
   * It is as simple as adding a value in the address after the end of our
   * list. Because we store the length this is easy to calculate. We just add
   * the value and increment our length.
   *
   * Pushing an item to the end of a list is constant O(1) - "AWESOME!!"
   */

  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  /**
   * Next we need a way to "pop" items off of the end of our list.
   *
   * Similar to push all we need to do is remove the value at the address at
   * the end of our list. Then just decrement length.
   *
   * Popping an item from the end of a list is constant O(1) - "AWESOME!!"
   */

  pop() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    // Get the last value, stop storing it, and return it.
    let lastAddress = this.length - 1;
    let value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Also return the value so it can be used.
    return value;
  }

  /**
   * "push" and "pop" both operate on the end of a list, and overall are pretty
   * simple operations because they don't need to be concerned with the rest of
   * the list.
   *
   * Let's see what happens when we operate at the beginning of the list with
   * "unshift" and "shift".
   */

  /**
   * In order to add a new item at the beginning of our list, we need to make
   * room for our value at the start by sliding all of the values over by one.
   *
   *     [a, b, c, d, e]
   *      0  1  2  3  4
   *       ⬊  ⬊  ⬊  ⬊  ⬊
   *         1  2  3  4  5
   *     [x, a, b, c, d, e]
   *
   * In order to slide all of the items over we need to iterate over each one
   * moving the prev value over.
   *
   * Because we have to iterate over every single item in the list:
   *
   * Unshifting an item to the start of a list is linear O(N) - "OKAY."
   */

  unshift(value) {
    // Store the value we are going to add to the start.
    let previous = value;

    // Iterate through each item...
    for (let address = 0; address < this.length; address++) {
      // replacing the "current" value with the "previous" value and storing the
      // "current" value for the next iteration.
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    // Add the last item in a new position at the end of the list.
    this.memory[this.length] = previous;
    this.length++;
  }

  /**
   * Finally, we need to write a shift function to move in the opposite
   * direction.
   *
   * We delete the first value and then slide through every single item in the
   * list to move it down one address.
   *
   *     [x, a, b, c, d, e]
   *         1  2  3  4  5
   *       ⬋  ⬋  ⬋  ⬋  ⬋
   *      0  1  2  3  4
   *     [a, b, c, d, e]
   *
   * Shifting an item from the start of a list is linear O(N) - "OKAY."
   */

  shift() {
    // Don't do anything if we don't have any items.
    if (this.length === 0) return;

    let value = this.memory[0];

    // Iterate through each item...
    for (let address = 0; address < this.length - 1; address++) {
      // and replace them with the next item in the list.
      this.memory[address] = this.memory[address + 1];
    }

    // Delete the last item since it is now in the previous address.
    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

/**
 * Lists are great for fast access and dealing with items at the end. However,
 * as we've seen it isn't great at dealing with items not at the end of the
 * list and we have to manually hold onto memory addresses.
 *
 * So let's take a look at a different data structure and how it deals with
 * adding, accessing, and removing values without needing to know memory
 * addresses.
 */


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

