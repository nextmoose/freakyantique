const requests = [{ type: 4, stamp: new Date() }];

const processImmediately = (request, sendResponse) => (requests.push(Object.assign({ stamp: new Date() }), request), sendResponse({status: true, value: null}));

const processDelayed = (request, sender, sendResponse, fun) => setTimeout(() => fun(request, sender, sendResponse), 1000)

const process = (request, sender, sendResponse, filters, fun) => requests.reverse().filter((element, index) => index === 0).filter(request => filters.includes(request.type)).length === 1 ? processImmediately(request, sendResponse) : processDelayed(request, sender, sendResponse);
        
const startPage = (request, sender, sendResponse) => process(request, sender, sendResponse, [3, 4], startPage);

const startRow = (request, sender, sendResponse) => process(request, sender, sendResponse, [0, 2], startRow);

const stopRow = (request, sender, sendResponse) => process(request, sender, sendResponse, [1], stopRow);

const stopPage = (request, sender, sendResponse) => process(request, sender, sendResponse, [0, 2], stopPage);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => [startPage, startRow, stopRow, stopPage][request.type](request, sender, sendResponse))
