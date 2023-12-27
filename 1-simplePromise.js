const promise = new Promise((resolve, reject) => {
    resolve(1)
})

promise.then((result) => {
    console.log(result)
})