const cases = [];
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => cases=cases.concat(request));
