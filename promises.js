const setValueById = (id, value) => new Promise((resolve, reject) => {
    try {
        document.getElementById(id).value = value;
    }
    catch (exc) {
        reject(exc);
    }
    resolve();
});
setValueById("txtcourts1", "wtf")