const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('p1 rejected')
    res('p1 resolved')
  }, 3000);
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('p2 rejected')
    res('p2 resolved')
  }, 2000);
})

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('p3 rejected')
    res('p3 resolved')
  }, 1000);
})

const promises = [p1, p2, p3];


Array.prototype.myForEach = function(cb) {
  for (let index = 0; index < this.length; ++index) {
    cb(this[index], index)
  }
}

Promise.myRace = function(promises) {
  return new Promise((res, rej) => {
    promises.myForEach((promise, index) => {
      promise.then((resp) => {
        res(resp);
      }).catch((error) => {
        rej(error)
      })
    })
  })
}

Promise.myRace(promises).then(res => console.log(res)).catch(error => console.log(error));
