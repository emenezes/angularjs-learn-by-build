(function(){

function PedidoService($q, ClienteService, ProdutoService) {

	var listaPedidos;
	var listaPedidosIndexadaPelaId;
	var id;
	this.cs = ClienteService;
	this.ps = ProdutoService;
	
	this.get = () => {
		var deferred = $q.defer();
		
		if (listaPedidos) {
			deferred.resolve(angular.copy(listaPedidos));
		} else {
			carregarPedidos();
			if (id && listaPedidos){
				deferred.resolve(angular.copy(listaPedidos));
			} else {
				deferred.reject('Não foi possível carregar os pedidos');
			}
			// $http.get("...")
			// .then(()=>deferred.resolve(angular.copy(this.listaPedidos)))
			// .catch(()=>deferred.reject('Não foi possível carregar os produtos'));
		}

		return deferred.promise;
	}

	this.criar = function(novoPedido) {
		novoPedido.id = ++id;
		listaPedidos.push(novoPedido);
		salvarPedidos();
	}

	function indexarPedidosPelaId () {
		let listaIndexada = {};
		for (var i = listaPedidos.length - 1; i >= 0; i--) {
			let id = listaPedidos[i].id;
			listaIndexada[id] = listaPedidos[i];
		}
		return listaIndexada;
	}

	function carregarPedidos () {
		id = (localStorage.hasOwnProperty('lastPedidoId')
			&& JSON.parse(localStorage.getItem('lastPedidoId'))) || 0;
		listaPedidos = (localStorage.hasOwnProperty('listaPedidos') 
			&& JSON.parse(localStorage.getItem('listaPedidos'))) || [];
		listaPedidosIndexadaPelaId = indexarPedidosPelaId();
		return listaPedidos;
	}

	function salvarPedidos () {
		localStorage.setItem('listaPedidos',JSON.stringify(listaPedidos));
		localStorage.setItem('lastPedidoId', id);
	}
}

PedidoService.$inject = ['$q', 'ClienteService', 'ProdutoService'];
angular.module('myStore').service('PedidoService', PedidoService);

})();