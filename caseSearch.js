const initPage = (hearingDate, search) => ((hearingDate.value = "05/16/2018"), search.click());

const scrape = (hearingDate, rows, search) => sendMessage({type: 1, value: hearingDate.value});

Promise.all([
        querySelector("#txthearingdate"),
        querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr"),
        querySelector("input[value='Search']")
    ]).then(array => (array[0].value === "" ? initPage(hearingDate, search) : scrape(hearingDate, rows, search)))
    .then(success, failure)


/*
        .then(() => array[1]
            .filter((row, index) => index > 0)
            .filter((row, index) => index < 5)
            .map(row => sendMessage({
                    type: 1,
                    value: {
                        caseNumber: row.children[1].innerText.trim(),
                        defendant: row.children[2].innerText.trim(),
                        complainant: row.children[3].innerText.trim(),
                        charge: row.children[4].innerText.trim(),
                        hearingTime: row.children[5].innerText.trim(),
                        result: row.children[6].innerText.trim()
                    }
                }).then(response => console.log)
                .then(() => row.children[1].children[0])
                .then(link => (link.setAttribute("target", "_blank"), link.click()))
                .then(() => sendMessage({type: 3, value: row.children[1].innerText.trim()}))
            )
        ).then(array => array.reduce((accumulator, currentValue) => accumulator.then(currentValue())), new Promise(resolve => resolve()))
        .then(() => sendMessage({type: 4, value: array[0].innerText}))
*/
