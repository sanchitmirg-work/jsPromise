// Promise.all() is good for "all or nothing".
// But if we need the promise to settled, we use Promise.allSettled.

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ];

// const requests = urls.map(url => fetch(url));

// Promise.allSettled(requests)
//     .then((results) => {
//         results.forEach((val) => {
//             if (val.status === 'fulfilled') {
//                 console.log('Success')
//             }
//             if (val.status === 'rejected') {
//                 console.log('Rejected')
//             }
//         })
//     })

// *****************Polyfil for Promise.allSettled ************************

const requests = [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]

const results = requests.map((request) => Promise.resolve(request)
                                                .then((result) => ({status: 'fulfilled', value: result}))
                                                .catch((err) => ({status:'rejected', reason: 'Failed'}))
                            )
Promise.all(results).then((result) => console.log(result));
