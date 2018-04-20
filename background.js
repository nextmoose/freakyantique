
const pages = [] ;

const page = (request, sender, sendResponse) => pages.length===0 ? (pages.push(request), sendResponse(true)) : sendResponse(false);

const requests = [];

const handler = (request, handler) => setTimeout(() => (requests.push(request), console.log(request), () => sendResponse(requests.length)), 5000)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => [
    page, handler, handler, handler, handler, handler
][request.type](request, sender, sendResponse))
