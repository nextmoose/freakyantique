const functions = {
    setValueById: function(id, value) {
        document.getElementById(id).value = value
    }
}

const setValueById = (id, value) => async() => await(functions.setValueById(id, value))
