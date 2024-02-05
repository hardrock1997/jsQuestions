function logic(acc, cv) {
  return acc + cv;
}

Array.prototype.myReduce = function(cb, initialValue) {

  if (initialValue === undefined && this.length === 0) {
    throw Error('Reduce not callable on empty array with no intialValue');
  }
  let acc = initialValue !== undefined ? initialValue : this[0];
  let index = acc === initialValue ? 0 : 1;


  for (; index < this.length; ++index) {
    acc = cb(acc, this[index]);
  }
  return acc;
}

const arr=[1,2,3];

const res = arr.myReduce(logic, 0);
console.log(res);
