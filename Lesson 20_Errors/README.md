# JavaScript Errors and Errors Handling

- By default javascript allows some code without apply the rules like: 
<code>
variable = "Zeeshan; 
console.log(variable); //Zeeshan
</code>

- So, to apply or enforce those rules to apply, we need to use *"use strict;"* on top to enforce the rules


## Error Types:
Following are the main error types in JavaScript
1. Reference Error: 
    - fairly common error in js
    - occur when something is not defined and it is being used
    - catch those errors when code is executed
    - we catch those errors

2. Syntax Error:
    - occurs due to incorrect syntax
    - it completely stop the code from executing
    - we catch those errors as we create the code or writing the code
    - compiler catch those errors for us


3. Type Error:
    - occurs due to different reasons related to action like re-assigning value to *const* variable
    - very common error in js


## Handling Errors
    - using try{} catch(){} where catch(){} block only executes if any error occurs in try{} block
    - try-catch also comes with finally{} block - which executes no matter whether error thrown or not
## Creating Custom Errors:
    - we can create custom errors by creating a function that log error and call *throw new* with *functionName()* to throw custom error