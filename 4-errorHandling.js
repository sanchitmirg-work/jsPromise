new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    console.log("The error is handled, continue normally");
  
  }).then(() => console.log("Next successful handler runs"));

//   If we throw inside .catch, then the control goes to the next closest error handler. 
//   And if we handle the error and finish normally, then it continues to the next 
//   closest successful .then handler.


//   ****************************************Second Example***************************
// the execution: catch -> catch
new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) { // (*)
  
    if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");
  
      throw error; // throwing this or another error jumps to the next catch
    }
  
  }).then(function() {
    /* doesn't run here */
  }).catch(error => { // (**)
  
    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
  
  });