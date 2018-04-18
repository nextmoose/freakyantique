
const requests = [];

const handler = () => setTimeout(() => (requests.push(request), console.log(request), sendResponse), 5000)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => [
    handler, handler, handler, handler, handler, handler
][request.type](request, sender))
