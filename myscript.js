

Date.prototype.yesterday = function() {return new Date(this.getTime()-24*60*60*1000)}
HTMLButtonElement.prototype.setText = function(value) {return (this.innerHTML=value)||true}
HTMLButtonElement.prototype.addEventListener2 = function(e,c) {return (this.addEventListener(e,c))||true}

(button =>
    button.setText("Yesterday") &&
    (button.addEventListener2('click', event => event.preventDefault()) || true) &&
    document.getElementById('txthearingdate').parentNode.prepend(button) &&
    console.log('did it')
)(document.createElement('button'))

console.log('rock on');
const fixit = (date) => document.getElementById('txthearingdate').value=date