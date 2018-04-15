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
const setValue = (selector, value) => querySelector(selector).then(element => element.value=value);
const clickLink = selector => querySelector(selector).then(element => element.click());
const prepend = (selector) => querySelector("#txthearingdate").then(element => element.parentNode.prepend())
