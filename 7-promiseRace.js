// Similar to Promise.all, 
// but waits only for the first settled promise and gets its result (or error).

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then((result => console.log(result)))
    .catch((err) => console.log(err)) // 1


// Similar to Promise.race, 
// but waits only for the first fulfilled promise and gets its result
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(result => console.log(result)); // 1