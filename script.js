const querySelector = selector => new Promise((resolve, reject) => (element => element ? resolve(element) : reject())(document.querySelector(selector)));
querySelector("input[value='Next']")
    .then(element => element.click(), failure => console.log("The end of the road."))
    