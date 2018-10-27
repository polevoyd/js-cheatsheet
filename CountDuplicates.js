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
    }

    return duplicatedPairs;
}

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
