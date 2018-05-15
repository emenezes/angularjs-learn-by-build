(function(){

function ClienteController(srvCidades,ClienteService) {
	ClienteService.get()
	.then( (lista) => this.listaClientes = lista )
	.catch( (error) => $log.info("Não foi possível carregar os produtos.", error) );
	
	this.novoCliente = {};
	this.listaCidades = srvCidades;

	this.criar = function() {
		ClienteService.criar(this.novoCliente);
		this.novoCliente = {};
	}
}

ClienteController.$inject = ['CidadesService','ClienteService'];

angular.module('myStore').component('clienteComponent', {
	bindings: {

	},
	controller: ClienteController,
  templateUrl: './cliente/index.html'
});

})();