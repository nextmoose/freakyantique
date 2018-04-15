const querySelector = selector => new Promise((resolve, reject) => (element => element ? resolve(element) : reject())(document.querySelector(selector)));
const querySelectorAll = selector => new Promise((resolve, reject) => resolve(Array.prototype.map.call(document.querySelectorAll(selector), x => x)));
const setData = (key, value) => new Promise((resolve, reject) => chrome.storage.local.set({key: value}, () => resolve(value)));
const getData = key => new Promise((resolve, reject) => chrome.storage.local.get(key, value => resolve(value)));
querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr")
    .then(rows => rows
        .filter((element, index) => index > 0)
        .map(element => ({
            caseNumber: element.children[1].innerText,
            defendant: element.children[2].innerText
        }))
    ).then(objects => setData("objects", objects))
    .then(objects => console.log(JSON.stringify(objects)))
    .then(getData("objects").then(data => console.log(JSON.stringify(data))))
// querySelector("input[value='Next']")
//     .then(element => element.click(), failure => console.log("The end of the road."))
