const cases=[];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => cases.push(request));
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => console.log({request, sender, sendResponse, cases}));
