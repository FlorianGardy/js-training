'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = (str1) => {
    let str1Arr = str1.split(" ");
    
    for (let i = 0; i < str1Arr.length; i++) {
        str1Arr[i] = str1Arr[i][0].toUpperCase() + str1Arr[i].slice(1);
    }
    
    let finalString = str1Arr.join(" ");
    
    return finalString;
}

jadenCase("Salut la compagnie !");

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase("Hey there ! How are you today ?"), "Hey There ! How Are You Today ?");

//assert.fail('You must write your own tests')
// End of tests */
