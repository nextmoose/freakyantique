const logit = message => value => {
    console.log(message)
    console.log(value)
    return value
};
const success = success => logit("SUCCESS:");
const failure = failure => logit("FAILURE:");
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
createElement("script")