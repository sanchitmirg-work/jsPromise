// **********************Promise.all()*******************

// const promise = new Promise.all(iterablePromise)

const promise = Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
])

promise.then(result => console.log(result)).catch((error) => console.log('Error is: ',error))

// ******************2nd Example****************************
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

const requests = urls.map((url) => fetch(url));

// const promiseAll = Promise.all(requests);

// *******************PromiseAll with one Error ******************

const promiseError = Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
])

promiseError
    .then(result => console.log(result))
    .catch((error) => console.log('Error is: ',error))



