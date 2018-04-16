[].concat.apply([],cases).filter(element => element.complainant==="?")
[].concat.apply([],cases).filter(element => element.charge==="DISRE HWY SIGN").filter(element => element.result!=="")
[].concat.apply([],cases).map(element => element.result).filter((element, index, array) => array.indexOf(element)===index)