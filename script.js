window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
const requestFileSystem = () => new Promise((resolve, reject) => window.requestFileSystem(window.PERMANENT, 5 * 1024 * 1024, resolve, reject));
const getFile = (fileSystem, name, create) => new Promise((resolve, reject) => fileSystem.root.getFile(name, { create }, resolve, reject));
const createWriter = file => new Promise((resolve, reject) => file.createWriter(resolve, reject));
const querySelector = selector => new Promise((resolve, reject) => (element => element ? resolve(element) : reject())(document.querySelector(selector)));
const querySelectorAll = selector => new Promise((resolve, reject) => resolve(Array.prototype.map.call(document.querySelectorAll(selector), x => x)));

requestFileSystem().then(fileSystem => getFile(fileSystem, "data.txt", true)).then(file => createWriter(file)).then(writer =>
        querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr")
        .then(rows => rows
            .filter((element, index) => index > 0)
            .map(element => ({
                caseNumber: element.children[1].innerText,
                defendant: element.children[2].innerText
            }))
        ).then(objects => new Blob(objects, { type: 'application/json' }))
        .then(querySelector("input[value='Next']").then(element => element.click(), failure => console.log("The end of the road.")))
    ).then(console.log, console.log)
    .then(() => requestFileSystem().then(fileSystem => getFile(fileSystem, "data.txt", false)).then(file => new FileReader().readAsText(file)).then(console.log, console.log))
