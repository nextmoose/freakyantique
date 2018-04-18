const cases=[];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => (cases.push(request), sendResponse()));
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => console.log({request, sender, sendResponse, cases}));
