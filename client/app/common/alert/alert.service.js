function AlertService() {
	this.showAlert = function (message, type, tempo) {
		return { text: message, type: type, tempo: tempo };
	}
}

AlertService.$inject = [];

export default AlertService;