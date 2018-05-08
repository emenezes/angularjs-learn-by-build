(function(){

function ClienteService() {
	
	var listaClientes;
	var listaClientesIndexadaPelaId;
	var id;
	
	this.get = function() {
		// TODO retornar cópia da lista
		return listaClientes || carregarClientes();
	}

	this.criar = function(novoCliente) {
		novoCliente.id = ++id;
		this.listaClientes.push(novoCliente);
		localStorage.setItem('listaClientes',JSON.stringify(this.listaClientes));
		localStorage.setItem('lastClienteId', id);
	}

	function indexarClientesPelaId () {
		let listaIndexada = {};
		for (var i = listaClientes.length - 1; i >= 0; i--) {
			let id = listaClientes[i].id;
			listaIndexada[id] = listaClientes[i];
		}
		return listaIndexada;
	}

	function carregarClientes () {
		var id = (localStorage.hasOwnProperty('lastClienteId')
			&& JSON.parse(localStorage.getItem('lastClienteId'))) || 0;
		listaClientes = (localStorage.hasOwnProperty('listaClientes') 
			&& JSON.parse(localStorage.getItem('listaClientes'))) || [];
		listaClientesIndexadaPelaId = indexarClientesPelaId();
		return listaClientes;
	}

	function salvarClientes () {
		localStorage.setItem('listaClientes',JSON.stringify(listaClientes));
		localStorage.setItem('lastClienteId', id);
	}
}

ClienteService.$inject = [];
angular.module('myStore')
	.service('ClienteService', ClienteService);

})();