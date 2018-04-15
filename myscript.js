

Date.prototype.yesterday = function() {return new Date(this.getTime()-24*60*60*1000)}
HTMLButtonElement.prototype.setText = function(value) {return (this.innerHTML=value)||true}
HTMLInputElement.prototype.yesterday = function() {return this.value=this.value.yesterday()}


(button =>
    button.setText("Yesterday") &&
    document.getElementById('txthearingdate').parentNode.prepend(button) &&
    button.addEventListener('click', event => console.log(Object.prototype.toString.apply(event)))
)(document.createElement('button'))

console.log('rock on');
const fixit = (date) => document.getElementById('txthearingdate').value=date