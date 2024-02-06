function f(cb, ...args) {
  setTimeout(() => {
    cb(null, args[0] +0)
  }, 1000)
}

function g(cb, ...args) {
  setTimeout(() => {
    cb(null, args[0] +0);
  }, 1000)
}

function h(cb, ...args) {
  setTimeout(() => {
    cb(null, args[0] + 0);
  }, 1000)
}

const arr = [f, g, h];

// promisify() wraps the async function with a promise.
function promisify(fn) {
  return function(...args) {
    return new Promise((res, rej) => {
      function cb(err, result) {
        if (err instanceof Error) {
          rej(err);
        } else {
          res(result);
        }
      }
      fn(cb, ...args)
    })
  }

}

// series() takes an array of async functions and execute them one by one.Result of one async function will be the input for another.
function series(arr) {
  return function(mainCb, initData) {
    const initialPromise = Promise.resolve(initData);
    const res = arr.reduce((accPromise, cPromise) => {
      return accPromise.then((result) => {
        const promisified = promisify(cPromise);
        return promisified(result); // returns a promise which in next iteration will be accPromise.
      }).catch(err => Promise.reject(err));
    }, initialPromise);
    res.then(result => mainCb(null, result)).catch(err => mainCb(err, null));
  }
}


const seriesExecutor = series(arr);

seriesExecutor(mainCb, 10);

// mainCb is the function which will be called once all the promises are resolved (one by one).
function mainCb(err, result) {
  if (err instanceof Error) {
    console.log(err)
  } else {
    console.log(result);
  }
}
