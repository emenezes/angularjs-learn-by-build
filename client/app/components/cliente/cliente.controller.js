
function ClienteController($log, $timeout, srvCidades, ClienteService) {
	ClienteService.get()
	.then( (lista) => this.listaClientes = lista )
	.catch( (error) => $log.info("Não foi possível carregar os clientes.", error) );
	
	this.novoCliente = {};
	this.listaCidades = srvCidades;

	this.criar = function() {
		ClienteService.criar(this.novoCliente);
		this.novoCliente = {};
	}

	this.showAlert = function (message, type, tempo) {
		this.alertMsg = { text: message, type: type, tempo: tempo };
	}

	this.showAlert('Alerta mostrado com sucesso', 'success', 5000)
}

ClienteController.$inject = ['$log','$timeout','CidadesService','ClienteService'];

export default ClienteController;
