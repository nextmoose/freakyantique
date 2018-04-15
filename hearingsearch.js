Promise.all({
    hearingDateElement: querySelector("#txthearingdate"),
    button: createElement("button").then(element => element.innerHTML="Yesterday")
}).then(obj => obj.hearingDateElement.parentNode.prepend(obj.button))
.then(success, failure);