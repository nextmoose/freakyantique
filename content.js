Date.prototype.yesterday = function() { return new Date(this.getTime() - 24 * 60 * 60 * 1000) };
Date.prototype.format = function() { return ("0" + (this.getMonth() + 1)).slice(-2) + "/" + ("0" + this.getDate()).slice(-2) + "/" + this.getFullYear() };

const querySelector = selector => new Promise((resolve, reject) => (element => element ? resolve(element) : reject())(document.querySelector(selector)));
const querySelectorAll = selector => new Promise((resolve, reject) => resolve(Array.prototype.map.call(document.querySelectorAll(selector), x => x)));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => console.log({ request, sender, sendResponse }));

Promise.all([
        querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr"),
        querySelector("txthearingdate")
    ])
    .then(array => ({ rows: array[0], hearingDate: array[1] }))
    .then(object => {
        console.log(object);
        return object;
    })
    .then(object => object.rows
        .filter((element, index) => index > 0)
        .map(element => ({
            hearingDate: object.hearingDate.innerText,
            caseNumber: element.children[1].innerText,
            defendant: element.children[2].innerText,
            complainant: element.children[3].innerText,
            charge: element.children[4].innerText,
            hearingTime: element.children[5].innerText,
            result: element.children[6].innerText
        }))
    ).then(chrome.runtime.sendMessage)
    .then(
        querySelector("input[value='Next']").then(element => element.click()),
        failure => querySelector("txthearingdate").then(hearingDate => hearingDate.value = new Date(hearingDate.value).yesterday().format())
    ).then(console.log, console.log);
