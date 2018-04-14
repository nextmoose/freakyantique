document.addEventListener('DOMContentLoaded', () => [
    document.getElementById('input').addEventListener('click', () => chrome.storage.sync.set({alpha: new Date()})),
    document.getElementById('output').addEventListener('click', () => chrome.storage.sync.get('alpha', value => console.log))
])