(function(){

function ClienteService($filter) {
	this.listaClientes = (localStorage.hasOwnProperty('listaClientes') 
		&& JSON.parse(localStorage.getItem('listaClientes'))) || [];
	
	var id = localStorage.hasOwnProperty('lastClienteId') || 0;
	this.criar = function(novoCliente) {
		novoCliente.id = ++id;
		this.listaClientes.push(novoCliente);
		localStorage.setItem('listaClientes',JSON.stringify(this.listaClientes));
		localStorage.setItem('lastClienteId', id);
	}
}

ClienteService.$inject = [];
angular.module('myStore')
	.service('ClienteService', ClienteService);

})();