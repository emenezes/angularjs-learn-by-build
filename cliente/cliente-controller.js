(function(){

function ClienteController(srvCidades,ClienteService) {
	this.listaClientes = ClienteService.listaClientes;
	this.novoCliente = {};
	this.estiloTabelaLinhaImpar = {'background-color':'blue'}
	this.estiloTabelaLinhaPar = {'background-color':'red'}
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