const setValue = (selector, value) => new Promise((resolve, reject) => {
    try {
        document.querySelector(selector).value = value;
        resolve();
    }
    catch (cause) {
        reject(cause);
    }
});
const clickLink = selector => new Promise((resolve, reject) => {
    try {
        document.querySelector(selector).click();
        resolve();
    }
    catch (cause) {
        reject(cause);
    }
});
