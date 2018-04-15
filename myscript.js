

Date.prototype.yesterday = function() {return new Date(this.getTime()-24*60*60*1000)}
HTMLButtonElement.prototype.setText = function(value) {return (this.innerHTML=value)||true}

console.log(new Date().yesterday());

(button =>
    button.setText("Yesterday") &&
    document.getElementById('txthearingdate').parentNode.prepend(button) &&
    button.addEventListener('click', event => event.preventDefault())
)(document.createElement('button'))

console.log('rock on');
const fixit = (date) => document.getElementById('txthearingdate').value=date