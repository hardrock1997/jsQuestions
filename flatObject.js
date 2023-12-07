const input = {
    name: 'Mansi',
    age: 25,
    department: {
      name: 'Customer Experience',
      section: 'Technical',
      branch: {
        name: 'Bangalore',
        timezone: 'IST'
      }
    },
    company: {
    name: 'SAP',
    customers: ['Ford', 'Nestle']
    },
    skills: ['javascript', 'node.js', 'html']
  }

  
  function helper(obj) {
    
    const output={};
    const keys = Object.keys(obj);
    for(let i=0;i<keys.length;++i) {
        
        if(Array.isArray(obj[keys[i]])) {
            const array=obj[keys[i]];
            output[keys[i]]=array
        }
        
       else if(typeof obj[keys[i]]!=='object') {
            output[keys[i]]=obj[keys[i]]
        }
       
        else {
            const object={};
            const temp=helper(obj[keys[i]]);
            const tempKeys=Object.keys(temp);
            for(let j=0;j<tempKeys.length;++j) {
                const prop=keys[i]+'_'+tempKeys[j];
                object[prop]=temp[tempKeys[j]];
            }
            const objectKeys=Object.keys(object);
            for(let k=0;k<objectKeys.length;++k) {
                output[objectKeys[k]]=object[objectKeys[k]]
            }
        
        }
    }
    return output;
}


const output = helper(input);
console.log(output)