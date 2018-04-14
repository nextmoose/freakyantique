
(button => [
    (button.innerHTML='Yesterday'),
    document.getElementById('txthearingdate').parentNode.prepend(button),
    button.addEventListener('click', () => document.getElementById('txthearingdate').value='yesterday')
])(document.createElement('button'))

console.log('rock on');
const fixit = (date) => document.getElementById('txthearingdate').value=date