querySelector("#txtcourts1")
    .then(element => element.value="Arlington General District Court")
    .then(success)
    .then(querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td.navigationback > div > table > tbody > tr > td > div.navigationback > div.trafficcriminaltab > div > ul > li:nth-child(3) > span > a"))
    .then(success)
    .then(element => element.click())
    .then(success, failure);