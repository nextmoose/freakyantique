Promise.all([
        querySelector("#txtcourts1"),
        querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td.navigationback > div > table > tbody > tr > td > div.navigationback > div.trafficcriminaltab > div > ul > li:nth-child(3) > span > a")
    ])
    .then(success, failure)
    .then(obj => new Promise((resolve, reject) => {
        try{
            obj[0].value = "Arlington General District Court";
            obj[1].click();
            resolve();
        }catch(cause){
            reject(cause);
        }
    }))
    .then(success, failure)
