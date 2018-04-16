cases.map(kase => 

)

document.querySelector("input[name='displayCaseNumber']")
document.querySelector("input[title='Search']")

document.querySelectorAll("#toggleCase > td > table > tbody > tr")



Array.prototype.map.call(document.querySelectorAll("#toggleCase > td > table > tbody > tr"), x=>x).map(row => Array.prototype.map.call(row.children, x=>x).map(cell => cell.innerText.trim()).map((cell, index, array)=> ({parity: index%2, key: array[Math.floor(index/2)*2], value: cell})).filter(element => element.parity===1))

Array.prototype.map.call(document.querySelectorAll("#toggleCase > td > table > tbody > tr"), x=>x).map(row => Array.prototype.map.call(row.children, x=>x).map(cell => cell.innerText.trim()))