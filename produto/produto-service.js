(function(){

function ProdutoService($filter) {
	this.listaProdutos = (localStorage.hasOwnProperty('listaProdutos') 
		&& JSON.parse(localStorage.getItem('listaProdutos'))) || [];
	
	var id = localStorage.hasOwnProperty('lastProdutoId') || 0;
	this.criar = function(novoProduto) {
		novoProduto.id = ++id;
		this.listaProdutos.push(novoProduto);
		localStorage.setItem('listaProdutos',JSON.stringify(this.listaProdutos));
		localStorage.setItem('lastProdutoId', id);
	}
}

ProdutoService.$inject = [];
angular.module('myStore')
	.service('ProdutoService', ProdutoService);

})();