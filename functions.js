const success = success => console.log("SUCCESS:  "+JSON.stringify(success));
const failure = failure => console.log("FAILURE:  "+JSON.stringify(failure));
const querySelector = selector => new Promise((resolve, reject) => {
    try {
        resolve(document.querySelector(selector));
    }catch(cause){
        reject(cause);
    }
});
const createElement = () => new Promise((resolve, reject) => {
   try {
       resolve(document.createElement());
   }catch(cause){
       reject(cause);
   }
});