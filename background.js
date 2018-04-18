chrome.runtime.onMessage.addListener((request, sender, sendResponse) => [
    () => setTimeout(() => (console.log(request), sendResponse), 5000),
    () => setTimeout(() => (console.log(request), sendResponse), 5000),
    () => setTimeout(() => (console.log(request), sendResponse), 5000),
    () => setTimeout(() => (console.log(request), sendResponse), 5000)
][request.type](request, sender))
