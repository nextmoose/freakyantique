Date.prototype.yesterday = function(){
    return new Date(this.getTime()-24*60*60*1000);
};
const success = value => {
    console.log("SUCCESS:")
    console.log(value)
    return value
};
const failure = value => {
    console.log("FAILURE:")
    console.log(value)
    return value
};
const querySelector = selector => new Promise((resolve, reject) => {
    try {
        console.log('trying...');
        const element = document.querySelector(selector);
        if(element){
            resolve(element);
        }else{
            setTimeout(querySelector(selector).then(success => resolve(success), failure => reject(failure)), 1000)
        }
    } catch(cause){
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
const setValue = (selector, value) => querySelector(selector).then(element => {
   element.setValue() 
});