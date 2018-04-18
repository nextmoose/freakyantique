querySelectorAll("body > table:nth-child(1) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > form > table > tbody > tr:nth-child(3) > td > table > tbody > tr")
    .then(rows => rows.filter((element, index) => index > 0)
        .map(element => element.children[1].children[0])
        .map(element => [element.setAttribute('target', '_blank'), element.click()])
        // ).then(
        //     querySelector("input[value='Next']").then(
        //         console.log,
        //         //            element => element.click(),
        //         console.log
        //         // failure => querySelector("#txthearingdate")
        //         // .then(hearingDate => hearingDate.value = new Date(hearingDate.value).yesterday().format())
        //         // .then(() => querySelector("input[value='Search']")).then(element => element.click())
        //     )
        // )
    ).then(success, failure)