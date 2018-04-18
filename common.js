Date.prototype.yesterday = function() { return new Date(this.getTime() - 24 * 60 * 60 * 1000) };
Date.prototype.format = function() { return ("0" + (this.getMonth() + 1)).slice(-2) + "/" + ("0" + this.getDate()).slice(-2) + "/" + this.getFullYear() };

const querySelector = selector => new Promise((resolve, reject) => resolve(document.querySelector(selector)));
const querySelectorAll = selector => new Promise((resolve, reject) => resolve(Array.prototype.map.call(document.querySelectorAll(selector), x => x)));

const sleep = time => new Promise((resolve, reject) => setTimeout(resolve, sleep));

const success = success => {
    console.log({ status: true, success });
    return success;
};
const failure = failure => {
    console.log({ status: false, failure });
    return failure;
};