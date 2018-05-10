(function(){

function ProdutoService($q) {

	var listaProdutos;
	var listaProdutosIndexadaPelaId;
	var id;

	this.get = function() {
		var deferred = $q.defer();

		if (listaProdutos) {
			deferred.resolve(angular.copy(this.listaProdutos));
		} else {
			carregarProdutos();
			if (this.id && this.listaProdutos){
				deferred.resolve(angular.copy(this.listaProdutos));
			} else {
				deferred.reject('Não foi possível carregar os produtos');
			}
			// $http.get("...")
			// .then(()=>deferred.resolve(angular.copy(this.listaProdutos)))
			// .catch(()=>deferred.reject('Não foi possível carregar os produtos'));
		}

		return deferred.promise;
	}

	this.criar = function(novoProduto) {
		novoProduto.id = ++id;
		listaProdutos.push(novoProduto);
		salvarProdutos();
	}

	function indexarProdutosPelaId () {
		let listaIndexada = {};
		for (var i = listaProdutos.length - 1; i >= 0; i--) {
			let id = listaProdutos[i].id;
			listaIndexada[id] = listaProdutos[i];
		}
		return listaIndexada;
	}

	function carregarProdutos () {
		id = (localStorage.hasOwnProperty('lastProdutoId')
			&& JSON.parse(localStorage.getItem('lastProdutoId'))) || 0;
		listaProdutos = (localStorage.hasOwnProperty('listaProdutos') 
			&& JSON.parse(localStorage.getItem('listaProdutos'))) || [];
		listaProdutosIndexadaPelaId = indexarProdutosPelaId();
		return listaProdutos;
	}

	function salvarProdutos () {
		localStorage.setItem('listaProdutos',JSON.stringify(listaProdutos));
		localStorage.setItem('lastProdutoId', id);
	}
}

ProdutoService.$inject = ['$q'];
angular.module('myStore').service('ProdutoService', ProdutoService);

})();