(function(){

function ProdutoService() {

	var listaProdutos;
	var listaProdutosIndexadaPelaId;
	var id;
	
	this.get = function() {
		// TODO retornar cópia da lista
		return listaProdutos || carregarProdutos();
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
		var id = localStorage.hasOwnProperty('lastProdutoId') || 0;
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

ProdutoService.$inject = [];
angular.module('myStore').service('ProdutoService', ProdutoService);

})();