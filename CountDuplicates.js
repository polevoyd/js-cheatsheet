// ar - array with some duplicates in it
function sockMerchant(n, ar) {

    // Basically, it asks to count duplicate pairs:
    // Creating a empty map and counting occurences or each character
    // if it is already in map - remove it and increment counter
    
    let duplicatedPairs = 0;
    let counter = {};
    
    for (let i=0; i < ar.length; i++) {
        if (counter[ar[i]]) {
            counter[ar[i]] = undefined;
            duplicatedPairs++;
        } else {
            counter[ar[i]] = 1;
        }

    return duplicatedPairs;
}

/*********************************************************/
// find first duplicate
const firstDuplicate = (arr) =>
{
    // for finding duplicates easy to use a map 
    // to count character and their occurences
    // time: N, space: N
    
    let counter = {};
    
    for (let element of arr)
            if (counter[element])
                return element;
            else
                counter[element] = 1;  
        
    return -1;
}

/*********************************************************/
// Note: Write a solution that only iterates over the string once
// and uses O(1) additional memory, // since this is what you would 
// be asked to do during a real interview.

// Given a string s, find and return the first instance of a 
// non-repeating character in it. If there is no such character, return '_'

const firstNotRepeatingCharacter = (s) => {
    // filter unique values and return first one 
    // by compare firstIndexOf and lastIndexOf
    return [...s].filter((e, i, a) => [...s].lastIndexOf(e) === [...s].indexOf(e))[0] || '_' ;
    
    //     The find() method returns the value of the first element 
    //     in the array that satisfies the provided testing function. 
    //     Otherwise undefined is returned.
    return [...s].find(e => s.indexOf(e) === s.lastIndexOf(e)) || '_'
    
}


// Note: Write a solution that only iterates over the string once
// and uses O(1) additional memory, // since this is what you would 
// be asked to do during a real interview.

// Given a string s, find and return the first instance of a 
// non-repeating character in it. If there is no such character, return '_'

/*********************************************************/
const firstNotRepeatingCharacter = (s) => {

    // make a map of string, then
    // iterate array of keys and return 
    // if counter[key] equal to 1
    // time: N, space: N
    const counter = {};

    for (let element of s){
        if (counter[element]){
            counter[element]++;
        } else {
            counter[element]=1;
            unique_value = element;
        }
    }
    
    for (let e of Object.keys(counter))
        if (counter[e] === 1)
            return e;
    
    return '_';
}

/*********************************************************/
function rotateImage(matrix) {
/*
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
*/
    /*
    map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed. [source]
    */
    return matrix[0]
        .map((column, index) => (matrix.map(row => row[index])))
        .map(row => row.reverse());
}
