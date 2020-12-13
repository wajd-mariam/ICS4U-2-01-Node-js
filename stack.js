/**
 * Copyright (c) 2020
 *
 * The Stack file adds integer added by the 
 * user to the stack array..
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/12
 */
 
// Importing the class WajdStack from another file
const WajdStack = require("./WajdStack");

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// Declaring stack by using the JacobStack class
let stack = new WajdStack();

  try {
    // Input
    // Getting an integer from the user:
    let userInput = prompt(`Enter a number to add to the stack: `);
    console.log (``);
    
    // Process
    // Pushing the integer inputted  to the stack:
    stack.push(userInput);
    
    // Output
    // Assuring that the integer was added to the stack:
    console.log(`The number ${stack.addedNumber()} has been pushed.`);
    
  } catch(err) {
    console.log (`An error occurred`);
  }