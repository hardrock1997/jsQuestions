const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('p1 resolved')
  }, 3000);
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('p2 resolved')
  }, 2000);
})

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res('p3 resolved')
  }, 1000);
})

const promises = [p1, p2, p3];

Array.prototype.myForEach = function(cb) {
  for (let index = 0; index < this.length; ++index) {
    cb(this[index], index)
  }
}

// foreach loop is used instead of normal for loop because we need the order of promises as that of in the passed array.The then() forms a closure with the index passed as an argument to the cb of forEach and  thus whenever the promise is resolved
we have the correct value of the index and hence the resolved value is put at the correct index of the result array that matches the order of the promises that is passed.
Promise.myAll = function(promises) {
  const result = [];
  let co = 0;
  return new Promise((res, rej) => {
    promises.myForEach((promise, index) => {
      promise.then((resp) => {
        result[index] = resp;
        co++;
        if (promises.length === co) {
          res(result);
        }
      }).catch((error) => {
        rej(error);
      })
    })
  })
}

Promise.myAll(promises).then(res => console.log(res)).catch(error => console.log(error));

