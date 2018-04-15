const success = success => console.log("SUCCESS:  "+JSON.stringify(success));
const failure = failure => console.log("FAILURE:  "+JSON.stringify(failure));
const querySelector = selector => new Promise((resolve, reject) => {
    try {
        setTimeout(()=>resolve(document.querySelector(selector)),10000);
    }catch(cause){
        reject(cause);
    }
});
const createElement = tag => new Promise((resolve, reject) => {
   try {
       resolve(document.createElement(tag));
   }catch(cause){
       reject(cause);
   }
});