const cases=[];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => (console.log({request, sender, sendResponse, cases}) || true) &&(sender.id==="ojghbkmnceeiejmfhbghmgfipkcpjgjh") && cases.push(request) && setTimeout(()=>sendResponse(cases), 10000));
