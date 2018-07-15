// Data Structures & Algorithms JavaScript
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

// let array = []; 

// // Insert head, index, tail
// let headIns = a.unshift(value);	   
// let indexIns = a.splice(index, 0, value);
// let tailIns = a.push(value);		

// // Access head, index, tail
// let headAcc = a[0];	
// let indexAcc = a[index];	
// let tailAcc = a[a.length-1];

// // Remove head, index, tail
// let removeHead = a.shift();	
// let removeIndex = a.splice(index, 1);
// let removeTail = a.pop();

// // Extra
// let pos = a.indexOf(value);
// let subAr = a.slice(0, 3);
// let subst = a.splice(index, amountOfElements, whatToPutInstead);
// let temp = a.slice();

// a.reverse();
// a.sort();
// a.join(); // -> 1,2,3,4,5
// a.join(''); // -> 12345
// a.join('-'); // -> 1-2-3-4-5
// a.every(condition); // return true if all elements satisfy condition
// a.some(condition); // return true of some elements satisfy condition

// let arr = [1, 2, 3, 4, 5 ];
// let [a, b, c, d, e] = arr;  // a = 1, b = 2, c = 3, d = 4, e = 5
// let {x, y, z} = object; // will assign values

// // FOREACH
// // does not change array and return undefined
// a.forEach(function(item, index, array){
// 	// do something
// });

// a.forEach(element => console.log(element)); // print each element

// // MAP
// // execute on each element and return new array
// a = a.map(function(num){
// 	return num * 2;
// });

// a = a.map( num => num * 2);

// // FILTER
// // check and return elements that true for condition

// a = a.filter(function(num){
// 	return (num < 10);
// });

// a = a.filter( num => num < 10 );

//  'string'.trim(); // delete spaces on sides
// Number.isInteger(); // true of false
// let num = parseInt('10'); // to Integer
// console.log( `My name is ${firstName}` );
// Condition ? true : false;

// function sum(x, y){
// 	return x+y;
// }

// const sum2 = (x,y) => {
// 	return x+y;
// }

// const sum3 = (x,y) => x+y; // one line doesnt need a return

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




// FOREACH
// does not change array and return undefined
a.forEach(function(item, index, array){
	// do something
});

a.forEach(element => console.log(element)); // print each element

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
Condition ? true : false;

function sum(x, y){
	return x+y;
}

const sum2 = (x,y) => {
	return x+y;
}

const sum3 = (x,y) => x+y; // one line doesnt need a return



Insert	O(1)
Access by Key	O(1)
Remove by Key	O(1)




//---------------------------------
// General Operations
//---------------------------------

// Insert
m.insert(std::pair<std::string, std::string>("key", "value"));

// Access by key
std::string value = m.at("key");

// Size
unsigned int size = m.size();

// Iterate
for(std::map<int>::iterator it = m.begin(); it != m.end(); it++) {
    std::cout << *it << std::endl;
}

// Remove by key
m.erase("key");

// Clear
m.clear();

//---------------------------------
// Container-Specific Operations
//---------------------------------

// Find if an element exists by key
bool exists = (m.find("key") != m.end());



// Insert head, index, tail
let head = m.set(key, value);
let head = a.splice(index, 0, value);
let head = a.push(value);		

// Access head, index, tail
let head = a[0];	
let index = a[index];	
let tail = a[a.length-1];

// Remove head, index, tail
let removeAtHead = a.shift();	
let removeAtIndex = a.splice(index, 1);
let removeAtTail = a.pop();

// Extra


 var keyString = 'a string', keyObj = {}, keyFunc = function() {}; // setting the values myMap.set(keyString, "value associated with 'a string'"); myMap.set(keyObj, 'value associated with keyObj'); myMap.set(keyFunc, 'value associated with keyFunc'); myMap.size; // 3 // getting the values myMap.get(keyString); // "value associated with 'a string'" myMap.get(keyObj); // "value associated with keyObj" myMap.get(keyFunc); // "value associated with keyFunc" myMap.get('a string'); // "value associated with 'a string'" // because keyString === 'a string' myMap.get({}); // undefined, because keyObj !== {} myMap.get(function() {}) // undefined, because keyFunc !== function () {}


 myMap.set(0, 'zero'); myMap.set(1, 'one'); for (var [key, value] of myMap) { console.log(key + ' = ' + value); } // 0 = zero // 1 = one for (var key of myMap.keys()) { console.log(key); } // 0 // 1 for (var value of myMap.values()) { console.log(value); } // zero // one for (var [key, value] of myMap.entries()) { console.log(key + ' = ' + value); } // 0 = zero // 1 = one

Iterating Maps with forEach()

Maps can be iterated using the forEach()method:

myMap.forEach(function(value, key) { console.log(key + ' = ' + value); }); // Will show 2 logs; first with "0 = zero" and second with "1 = one"




◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼

◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼
