Promise.all([
        querySelector("#txthearingdate"),
        createElement("button"),
        querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td > input:nth-child(1)"),
    ])
    .then(success, failure)
    .then(obj => new Promise((resolve, reject) => {
        try{
            obj[1].innerHTML = "Yesterday"
            obj[1].addEventListener('click', event => {
                event.preventDefault();
                obj[0].value = new Date(obj[0].value).yesterday().format();
                setTimeout(()=> obj[2].click(), 1000);
                querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr")
                .then(elements => elements.filter((element, index) => index>0)
                    .map(element => ({
                        caseNumber: element.children[1].innerText,
                        defendant: element.children[2].innerText,
                        complainant: element.children[3].innerText,
                        charge: element.children[4].innerText,
                        hearingTime: element.children[5].innerText,
                        result: element.children[6].innerText
                    }))
                ).then(elements => console.log)
            })
            obj[0].value = "05/17/2018";
            obj[0].parentNode.prepend(obj[1]);
        }catch(cause){
            reject(cause)
        }
    }))
    .then(success, failure);
