
let $timeout;

class AlertController {

  constructor(_timeout) {
  	$timeout = _timeout
    this.isAlertHidden = true;
  }

  $onChanges (changedObjs) {
  	if (changedObjs.message && changedObjs.message.currentValue && this.message.text) {
  		this.message.tempo = this.message.tempo || 2000;
  		this.isAlertHidden = false;
  		$timeout( () => {
  			delete this.message;
  			this.isAlertHidden = true;
  		}, this.message.tempo);
  	}
  }
}

AlertController.$inject = ['$timeout'];

export default AlertController;
