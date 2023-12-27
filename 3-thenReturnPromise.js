new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); // 1
  
    return new Promise((resolve, reject) => { // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });

  
// Here the first .then shows 1 and returns new Promise(…) in the line (*). 
// After one second it resolves, and the result (the argument of resolve, here it’s result * 2) is passed on to the handler of the second .then. 
// That handler is in the line (**), it shows 2 and does the same thing.

// So the output is the same as in the previous example: 1 → 2 → 4, but now with 1 second delay between alert calls.