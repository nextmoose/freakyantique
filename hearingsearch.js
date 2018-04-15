Promise.all([
        querySelector("#txthearingdate"),
        createElement("button"),
        querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form")
    ])
    .then(success, failure)
    .then(obj => new Promise((resolve, reject) => {
        try{
            obj[1].innerHTML = "Yesterday"
            obj[1].addEventListener('click', event => {
                event.preventDefault();
                obj[0].value = new Date(obj[0].value).yesterday().format();
                obj[2].submit();
            })
            obj[0].value = "05/17/2018";
            obj[0].parentNode.prepend(obj[1]);
        }catch(cause){
            reject(cause)
        }
    }))
    .then(success, failure);
