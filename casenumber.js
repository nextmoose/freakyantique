cases.map(kase => 

)

document.querySelector("input[name='displayCaseNumber']")
document.querySelector("input[title='Search']")

document.querySelectorAll("#toggleCase > td > table > tbody > tr")



Array.prototype.map.call(document.querySelectorAll("#toggleCase > td > table > tbody > tr"), x=>x).map(row => Array.prototype.map.call(row.children, x=>x).map(cell => cell.innerText.trim()).map((cell, index, array)=> ({parity: index%2, key: array[Math.floor(index/2)*2], value: cell})).filter(element => element.parity===1))

Array.prototype.map.call(document.querySelectorAll("#toggleCase > td > table > tbody > tr"), x=>x).map(row => Array.prototype.map.call(row.children, x=>x).map(cell => cell.innerText.trim()))


[{a:1}, {b:2}, {c:3}].reduce((accumulator, currentValue) => Object.assign(currentValue, accumulator), [])


[].concat.apply([],Array.prototype.map.call(document.querySelectorAll("#toggleCase > td > table > tbody > tr"), x=>x).map(row => Array.prototype.map.call(row.children, x=>x).map(cell => cell.innerText.trim()).map((cell, index, array)=> ({parity: index%2, key: array[Math.floor(index/2)*2], value: cell})).filter(element => element.parity===1)))
    .reduce((accumulator, currentValue) => Object.assign(currentValue, accumulator), [])


[].concat.apply([],Array.prototype.map.call(document.querySelectorAll("#toggleCase > td > table > tbody > tr"), x => x)
    .map(row => Array.prototype.map.call(row.children, x => x)
        .map(element => element.innerText.trim())
        .map((element, index, array) => ({
            parity: index%2,
            key: array[index - (index%2)],
            value: element
        }))
        .filter(element => element.parity===1)
        .map(element => ({[element.key]: element.value}))
    )
).reduce((accumulator, currentValue) => Object.assign(currentValue, accumulator), [])