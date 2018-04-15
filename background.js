const cases=[];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => (console.log({request, sender, sendResponse, cases}) || true) &&(sender.id==="ojghbkmnceeiejmfhbghmgfipkcpjgjh") && cases.push(request) && setTimeout(()=>chrome.runtime.sendMessage(cases), 10000) && console.log('hook'));
