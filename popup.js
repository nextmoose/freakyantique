document.addEventListener('DOMContentLoaded', () => [
    document.getElementById('input').addEventListener('click', () => alert('input')),
    document.getElementById('output').addEventListener('click', () => document.getElementById('result').value='hello')
])
