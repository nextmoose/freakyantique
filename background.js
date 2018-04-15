const cases=[];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => (sender.id==="ojghbkmnceeiejmfhbghmgfipkcpjgjh") && cases.push(request) && sendResponse(cases));
