
function ClienteService($q, $log) {
	
	var listaClientes;
	var listaClientesIndexadaPelaId;
	var id;
	
	this.get = () => {
		var deferred = $q.defer();
		
		if (listaClientes) {
			deferred.resolve(angular.copy(listaClientes));
		} else {
			carregarClientes();
			if (id && listaClientes){
				deferred.resolve(angular.copy(listaClientes));
			} else {
				deferred.reject('ClienteService não conseguiu carregar os clientes');
			}
			// $http.get("...")
			// .then(()=>deferred.resolve(angular.copy(this.listaClientes)))
			// .catch(()=>deferred.reject('Não foi possível carregar os produtos'));
		}

		return deferred.promise;
	}

	this.criar = function(novoCliente) {
		novoCliente.id = ++id;
		this.listaClientes.push(novoCliente);
		localStorage.setItem('listaClientes',JSON.stringify(this.listaClientes));
		localStorage.setItem('lastClienteId', id);
	}

	this.getClientePelaId = function (id) {
		this.get();
		return listaClientesIndexadaPelaId[id];
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
		id = (localStorage.hasOwnProperty('lastClienteId')
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

ClienteService.$inject = ['$q','$log'];

export default ClienteService;
