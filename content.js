Date.prototype.yesterday = function() { return new Date(this.getTime() - 24 * 60 * 60 * 1000) };
Date.prototype.format = function() { return ("0" + (this.getMonth() + 1)).slice(-2) + "/" + ("0" + this.getDate()).slice(-2) + "/" + this.getFullYear() };

const querySelector = selector => new Promise((resolve, reject) => resolve(document.querySelector(selector)));
const querySelectorAll = selector => new Promise((resolve, reject) => resolve(Array.prototype.map.call(document.querySelectorAll(selector), x => x)));
const success = success => {
    console.log({ status: true, success });
    return success;
};
const failure = failure => {
    console.log({ status: false, failure });
    return failure;
};

const hearingPage2 = querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr")
    .then(rows => rows.filter((element, index) => index > 0)
        .map(element => [element.children[1].children[0].setAttribute('target', '_blank'), element.click()])
    ).then(
        querySelector("input[value='Next']").then(
            console.log,
            //            element => element.click(),
            console.log
            // failure => querySelector("#txthearingdate")
            // .then(hearingDate => hearingDate.value = new Date(hearingDate.value).yesterday().format())
            // .then(() => querySelector("input[value='Search']")).then(element => element.click())
        )
    )
    .then(success, failure);

const casePage2 = () => window.close();

const hearingPage = () => alert("HEARING");
// const casePage = () => alert("CASE");

    Promise.all([
        querySelector("#txthearingdate"),
        querySelector("#toggleCase")
    ]).then(array => ((hearingDate, toggleCase) => (hearingDate && !toggleCase && hearingPage()) || (!hearingDate && toggleCase && casePage()))(array[0], array[1]));
