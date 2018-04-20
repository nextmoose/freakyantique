querySelector("#txtcourts1")
    .then(element => element.value = "Arlington General District Court")
    .then(Promise.all([
        querySelector("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td.navigationback > div > table > tbody > tr > td > div.navigationback > div.trafficcriminaltab > div > ul > li:nth-child(3) > span > a"),
        createEvent("MouseEvents")
    ]))
    .then(array => (
        console.log(array[0]),
        array[1].initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null),
        array[0].dispatchEvent(array[1])))
    .then(success, failure)
