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
a.reverse();  // [9, 8, 7, 6, 5, 4, 3, 2, 1]
a.sort(); // [1, 2, 3, 4, 5, 6, 7, 8, 9] (sorting by first digit)
a.join(); // '1,2,3,4,5,6,7,8,9'
a.join(''); // '123456789'
a.join('-'); // '1-2-3-4-5-6-7-8-9'
s.splice(startingIndex, amountToRemove, whatToPutInstead);
a.every(condition); // return true if all elements satisfy condition
a.some(condition); // return true of some elements satisfy condition

let arr = [1, 2, 3, 4, 5 ];
let [a, b, c, d, e] = arr;	// a = 1, b = 2, c = 3, d = 4, e = 5
let {x, y, z} = object;		// will assign values


a.forEach(function(element, index, array){  // FOREACH - does not change array and return undefined
  array[index] = element * 2; 			// will modify array in place
});

// STRING
let s = 'Very cool string';

// Slice O(N) (end-start)
s.slice(2);     // 'ry cool string'
s.slice(2, 7);  // 'ry co'

// Split
s.split('');      // ["V", "e", "r", "y", " ", "c", "o", "o", "l", " ", "s", "t", "r", "i", "n", "g"]
s.split(' ');     // ['Very', 'cool', 'string']
s.split(' ', 2);  // ['Very', 'cool']
s.split('r');     // ["Ve", "y cool st", "ing"]

// Splice - w
s.splice(starting_index, amount_to_remove, what_to_put_instead);

// SLICE - slice from some element element
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2); 		// ["camel", "duck", "elephant"] 

// SPLICE
['Jan', 'March', 'April', 'June'].splice(1, 0, 'Feb');	// ['Jan', 'Feb', 'March', 'April', 'June']

// SOME - check if SOME of elements is true and return bool
array1.some( element => element % 2 === 0 );	// true

// EVERY - check if EVERY of elements is true and return bool
array1.every(currentValue < 50);	// true

// .CONCAT - concat arrays and return array
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

array1.concat(array2);		// return new array that is sum

// .FILTER - FILTER values with a condition and return array of only ones that TRUE
[12, 5, 8, 130, 44].filter( element => element > 5);


array.map(element => element * 2);  // .MAP() - changing each element and return modified array

// .REDUCE() - reducing array and return one element
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue)
{
  return accumulator + currentValue;	// sum is 6
}, 0); // starting value


// OBJECTS
Object.keys(obj);   // array of keys
Object.values(obj);	// array of values

'string'.trim(); // delete spaces on sides
Number.isInteger(); // true of false
parseInt('10'); // to Integer

// remove duplicates from array with filter (checking if current element index is a last one)
arr.filter((element, index, array) => array.lastIndexOf(element) === index);
// construct an new array from a set of arr - removes duplicates
Array.from(new Set(arr));

//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
Array.from('foo'); // ["f", "o", "o"]
Array.from([1, 2, 3], x => x + x); // [2, 4, 6] - can pass a callback to set each element to something

// The Array.isArray() method determines whether the passed value is an Array.
Array.isArray([1, 2, 3]); // true

// The concat() method is used to merge two or morvar array1 = ['a', 'b', 'c'];
array1.concat(['d', 'e', 'f']); // ["a", "b", "c", "d", "e", "f"]

// The copyWithin() method shallow copies part of an array to another location
// in the same array and returns it, without modifying its size.
// place at position 0 the element between position 3 and 4
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);	// Array [4, 2, 3, 4, 5]

// place at position 1 the elements after position 3
[1, 2, 3, 4, 5].copyWithin(1, 3);		// expected output: Array [4, 4, 5, 4, 5]

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
var iterator1 = ['a', 'b', 'c'].entries();

iterator1.next().value;	// [0, "a"]
iterator1.next().value; // [1, "b"]

// The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.
// fill with 0 from position 2 until position 4
[1, 2, 3, 4].fill(0, 2, 4);	  // [1, 2, 0, 0]

// fill with 5 from position 1
[1, 2, 3, 4].fill(5, 1);      // [1, 5, 5, 5]

// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
[5, 12, 8, 130, 44].find(function(element) {
  return element > 10;
}); // 12

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
function findFirstLargeNumber(element)
{
  return element > 13;
}

[5, 12, 8, 130, 44].findIndex(findFirstLargeNumber); // 3

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
[1, 2, [3, 4]].flat(); // [1, 2, 3, 4]

// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.
[1, 2, 3, 4].map(x => [x * 2]);		// [[2], [4], [6], [8]]
[1, 2, 3, 4].flatMap(x => [x * 2]); // [2, 4, 6, 8]

// only one level is flattened
[1, 2, 3, 4].flatMap(x => [[x * 2]]);	// [[2], [4], [6], [8]]

// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
array1.includes(2); // true

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
['ant', 'bison', 'camel', 'duck', 'bison'].indexOf('bison'); // 1

// start from index 2
['ant', 'bison', 'camel', 'duck', 'bison'].indexOf('bison', 2);	// 4

// Some classic problems and patterns to solve them

// 1. Frequency counter pattern (anagrams etc)
// Can be done with a maps (add to a map where letter is key and its counter is a value)

// function validAnagram(first, second)
// {
//   if (first.length !== second.length)
//     return false;

//   const lookup = {};

//   for (let i = 0; i < first.length; i++)
//   {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }

//   for (let i = 0; i < second.length; i++)
//   {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter])
//     {
//       return false;
//     }
//     else
//     {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }

// 2. Multiple pointers (usually used to count something)
// One pointer act like a counter and move right if condition happen,
// second pointer run and check for condition
// function countUniqueValues(array) // count unique values in array
// {
//   //   let counter = {};

//   //   for (let i of array)
//   //       if (!counter[i])
//   //           counter[i] = i;

//   //   return Object.keys(counter).length;

//   let counter = 0;
//   let pointer = 1;

//   while (pointer < array.length)
//   {
//     if (array[pointer] === array[counter])
//     {
//       pointer++;
//     }
//     else
//     {
//       counter++;
//       array[counter] = array[pointer];
//     }
//   }
//   return counter !== 0 ? counter+1 : counter;
// }

// 3. Sliding window
// to found longest sequence of elements we can establish window and move it
// by -most left element and + to last one

// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3);


// 4. Divide & Conquer
// Good example is a binary search
// sameFrequency Solution
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;
  
//   let countNum1 = {};
//   let countNum2 = {};
  
//   for(let i = 0; i < strNum1.length; i++) {
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }
  
//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }
  
//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }
 
//   return true;
// }
// areThereDuplicates Solution (Frequency Counter)
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }
// areThereDuplicates Solution (Multiple Pointers)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }
// areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }























// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼
//            Linked List
// ◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼

// Insert Head	O(1)
// Insert Index	O(n)
// Insert Tail	O(1)
// Remove Head	O(1)
// Remove Index	O(n)
// Remove Tail	O(1)
// Find Index	O(n)
// Find Object	O(n)
// Example Code

// Use for

// Insertion into the middle/beginning of the list
// Efficient sorting (pointer swap vs. copying)
// Do not use for

// Direct access

class List
{
  constructor() {
    this.memory = [];
    this.length = 0;
  }

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

// 1.4 List std::list and std::forward_list

// Time Complexity

// Operation	Time Complexity
// Insert Head	O(1)
// Insert Index	O(n)
// Insert Tail	O(1)
// Remove Head	O(1)
// Remove Index	O(n)
// Remove Tail	O(1)
// Find Index	O(n)
// Find Object	O(n)
// Example Code

// std::list<int> l;

// //---------------------------------
// // General Operations
// //---------------------------------

// // Insert head, index, tail
// l.push_front(value);                    // head
// l.insert(l.begin() + index, value);     // index
// l.push_back(value);                     // tail

// // Access head, index, tail
// int head = l.front();                                           // head
// int value = std::list<int>::iterator it = l.begin() + index;    // index
// int tail = l.back();                                            // tail

// // Size
// unsigned int size = l.size();

// // Iterate
// for(std::list<int>::iterator it = l.begin(); it != l.end(); it++) {
//     std::cout << *it << std::endl;
// }

// // Remove head, index, tail
// l.pop_front();                  // head
// l.erase(l.begin() + index);     // index
// l.pop_back();                   // tail

// // Clear
// l.clear();

// //---------------------------------
// // Container-Specific Operations
// //---------------------------------

// // Splice: Transfer elements from list to list
// //	splice(iterator pos, list &x)
// //  	splice(iterator pos, list &x, iterator i)
// //  	splice(iterator pos, list &x, iterator first, iterator last)
// l.splice(l.begin() + index, list2);

// // Remove: Remove an element by value
// l.remove(value);

// // Unique: Remove duplicates
// l.unique();

// // Merge: Merge two sorted lists
// l.merge(list2);

// // Sort: Sort the list
// l.sort();

// // Reverse: Reverse the list order
// l.reverse();






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

myMap.forEach(function(value, key) { console.log(key + ' : ' + value); });	// "0 : zero" // "1 : one"

// Extra
let exist = myMap.has(key);

