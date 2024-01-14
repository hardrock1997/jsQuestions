// deep comparison of arrays
const a=[1,[1,2],{a:4}]
const b=[1,[1,2],{a:4}]

// deep comparison of objects
const c={a:1,b:[1,2],c:{a:4}}
const d={a:1,b:[1,2],c:{a:4}}

function checkType(obj) {
    if(Array.isArray(obj)) {
        return "Array"
    }
    else if(!Array.isArray(obj) && obj instanceof Object) {
        return "Object"
    }
}
function checkForNull(obj) {
    if(obj===null) return true;
    else return false
}
function checkForUndefined(obj) {
    if(obj===undefined)return true;
    else return false;
}
function deepComparison(obj1,obj2) {
    // null and undefined checks.
    if(!checkForNull(obj1) && !checkForNull(obj2) && !checkForUndefined(obj1) && !checkForUndefined(obj2)) {
        // primitives check
        if(obj1===obj2) {
            return true;
        }
    }
    else {
        return false;
    }

    // non priitives check.
    if(checkType(obj1)==='Object' && checkType(obj2)==='Object') {
        const keys1=Object.keys(obj1)
        const keys2=Object.keys(obj2)
        if(keys1.length!==keys2.length) {
            return false
        }
        for(key of keys1) {
          
            if(!keys2.includes(key) || !deepComparison(obj1[key],obj2[key])) {
                return false
            }
        }
        return true
    }
    else if(checkType(obj1)==='Array' && checkType(obj2)==='Array') {
   
        if(obj1.length!==obj2.length) {
            return false
        }
        for(let i=0;i<obj1.length;++i) {
            if(!deepComparison(obj1[i],obj2[i])) {
                return false
            }
        }
        return true
    }
}
const res1=deepComparison(a,b)
console.log(res1) // true
const res2=deepComparison(c,d)
console.log(res2) // true
