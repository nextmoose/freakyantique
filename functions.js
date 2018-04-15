const setValue = async function(selector, value) {
    document.querySelector(selector).value = value
};
const clickLink = async function(selector) {
    document.querySelector(selector).click()
}
