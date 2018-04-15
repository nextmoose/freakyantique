Promise.all([
        querySelector("#txthearingdate"),
        createElement("button")
    ])
    .then(success, failure)
    .then(obj => new Promise((resolve, reject) => {
        try{
            obj[1].innerHTML = "Yesterday"
            obj[0].addEventListener('click', event => {
                event.preventPropogation();
                obj[0].value = new Date(obj[0].value).yesterday();
            })
            obj[0].value = "05/16/2018";
            obj[0].parentNode.prepend(obj[1]);
        }catch(cause){
            reject(cause)
        }
    }))
    .then(success, failure);
