
    function efn(...args) {
      console.log('slow function',...args)
    } 
 
    function memoise(efn) {
      const cache={}
      return function(...args) {
					const key=JSON.stringify(args);
					if(key in cache) {
          	return cache[key]
          }
					else {
      			const result=efn.call(this,...args)
						cache[key]=result
						return result
          }
      }
    }

      
    const memoised=memoise(efn);
    const res=memoised(1,2,3)
		console.log(res)
        
