function f(cb, ...args) {
  setTimeout(() => {
    cb(null, args[0]);
  }, 1000);
}

function g(cb, ...args) {
  setTimeout(() => {
    cb(null, args[0]);
  }, 1000);
}

function h(cb, ...args) {
  setTimeout(() => {
    cb(null, args[0]);
  }, 1000);
}

// array of async functions.
const arr = [f, g, h];

// promisify() wraps the async function inside a promise.
function promisify(fn) {
  return function(...args) {
    return new Promise((res, rej) => {
      function cb(err, result) {
        if (err instanceof Error) {
          rej(err)
        } else {
          res(result);
        }
      }
      fn(cb, ...args);
    })
  }
}

// parallel() executes all the async functions and waits for all of them to finish, if there is any error it stops the execution then and there.
function parallel(arr) {
  const resultArray = [];
  return function(mainCb, initData) {
    const res = new Promise((resolve, reject) => {
      for (const f of arr) {
        const promisified = promisify(f);
        promisified(initData).then((res) => {
          resultArray.push(res);
          if (resultArray.length === arr.length) {
            resolve(resultArray);
          }
        }).catch((err) => {
          reject(err);
        });
      }
    })
    res.then(res => mainCb(null, res)).catch((err)=>{
      mainCb(err,null);
    });
  }
}

const parallelExecutor = parallel(arr);

// parallelExecutor() calls the mainCb after all the async functions are executed.
parallelExecutor(mainCb, 10);

function mainCb(err, result) {
  if (err instanceof Error) {
    console.log(err);
  } else {
    console.log(result);
  }
}
