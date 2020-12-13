/**
 * Copyright (c) 2020
 *
 *  The WajdStack Class creates a stack to use 
 * by the stack.java program.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/12
 */
 

class WajdStack {
    
  // Constructors that defines stack array
  constructor() {
    this.stackArray = [];
  }
  // Addition method.
  push(addition) {
    this.stackArray.push(addition);
  }
  
  // Returning method.
  addedNumber() {
    return this.stackArray[this.stackArray.length - 1];  
  }
} 
 
 
// Exporting the class
module.exports = WajdStack;