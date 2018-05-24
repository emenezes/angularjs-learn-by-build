
function ClienteController($log, $timeout, srvCidades, ClienteService, AlertService) {
	ClienteService.get()
	.then( (lista) => this.listaClientes = lista )
	.catch( (error) => $log.info("Não foi possível carregar os clientes.", error) );
	
	this.novoCliente = {};
	this.listaCidades = srvCidades;

	this.criar = function() {
		ClienteService.criar(this.novoCliente);
		this.novoCliente = {};
	}

	this.alertMsg = AlertService.showAlert('Alerta mostrado com sucesso', 'success', 5000)
}

ClienteController.$inject = ['$log','$timeout','CidadesService','ClienteService','AlertService'];

export default ClienteController;
