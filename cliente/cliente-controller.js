(function(){

function ClienteController(srvCidades,ClienteService) {
	this.listaClientes = ClienteService.get();
	this.novoCliente = {};
	this.listaCidades = srvCidades;

	this.criar = function() {
		ClienteService.criar(this.novoCliente);
		this.novoCliente = {};
	}
}

ClienteController.$inject = ['CidadesService','ClienteService'];
angular.module('myStore')
	.controller('ClienteController', ClienteController);

})();