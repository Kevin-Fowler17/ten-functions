"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(input){
    return input === true;
}

function isFalse(input){
    return input === false;
}

function not(input){
    return !input;
}

function addOne(input){
    return (parseFloat(input) + 1);
}

function isEven(input){
    return (input % 2 === 0);
}

// Define a function named isIdentical that takes in two input arguments. If each input is
// equal both in data type and in value, then return true. If the values are not the same data
// type or not the same value, return false.


// Define a function named isEqual that takes in two input arguments. If each argument is equal
// only in value, then return true. Otherwise return false.


// Define a function named or that takes in two input arguments. The output returned should be
// the result of an or operation on both inputs.


// Define a function named and that takes in two input arguments and returns the result of a
// logical and operation of both inputs.


// Define a function named concat that takes in two input arguments. If both arguments are strings,
// then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
