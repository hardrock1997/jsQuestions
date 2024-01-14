const obj = {
    a:1,
    b:{
        b1:2
    },
    c:[1,2]
}

function checkForNull(obj) {
    return obj===null ? true:false
}
function checkForUndefined(obj) {
    return obj===undefined ? true:false
}
function checkForType(obj) {
    if(Array.isArray(obj))return 'Array'
    else if(!Array.isArray(obj) && obj instanceof Object)return 'Object'
    else return 'primitive'
}

function deepCopy(obj) {

    if(checkForNull(obj) && checkForUndefined(obj)) {
        return obj
    }
   else if(checkForType(obj)==='primitive') {
       const objCopy=obj
       return objCopy
   }
    
  else if(checkForType(obj)==='Array') {
      return obj.map(deepCopy)
  }
   else {
      const copyObject={}
       for(key in obj) {
        copyObject[key]=deepCopy(obj[key])
       }
       return copyObject
   }
    
}
const res=deepCopy(obj)
obj.b.b1='yash'
obj.c[0]=100 
console.log(res,obj)
