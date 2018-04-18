

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => [
    () => setTimeout(() => (console.log(request), sendResponse), 1000),
    () => setTimeout(() => (console.log(request), sendResponse), 1000),
    () => setTimeout(() => (console.log(request), sendResponse), 1000),
    () => setTimeout(() => (console.log(request), sendResponse), 1000)
][request.type]())
