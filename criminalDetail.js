Promise.all([
        querySelectorAll("#toggleCase > td > table > tbody > tr")
        .then(elements => [].concat.apply([], Array.prototype.map.call(elements, x => x)
            .map(row => Array.prototype.map.call(row.children, x => x)
                .map(element => element.innerText.trim())
                .map((element, index, array) => ({
                    parity: index % 2,
                    key: array[index - (index % 2)].slice(0, -2),
                    value: element
                }))
                .filter(element => element.parity === 1)
                .map(element => ({
                    [element.key]: element.value
                }))
            )
        ).reduce((accumulator, currentValue) => Object.assign(currentValue, accumulator), [])),
        querySelectorAll("#toggleCharge > td > table > tbody > tr")
        .then(elements => [].concat.apply([], Array.prototype.map.call(elements, x => x)
            .map(row => Array.prototype.map.call(row.children, x => x)
                .map(element => element.innerText.trim())
                .map((element, index, array) => ({
                    parity: index % 2,
                    key: array[index - (index % 2)].slice(0, -2),
                    value: element
                }))
                .filter(element => element.parity === 1)
                .map(element => ({
                    [element.key]: element.value
                }))
            )
        ).reduce((accumulator, currentValue) => Object.assign(currentValue, accumulator), []))

    ]).then(array => ({ "caseInformation": array[0], "charge": array[1] }))
    .then(chrome.runtime.sendMessage).then(() => window.close())
