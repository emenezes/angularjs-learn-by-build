(function(){

angular.module("myStore",[]);

})();

(function(){

function ProdutoController() {
	this.listaProdutos = [];
	this.novoProduto = {};

	this.criarProduto = function() {
		this.listaProdutos.push(this.novoProduto);
		this.novoProduto = {};
	}
}

ProdutoController.$inject = [];
angular.module("myStore")
	.controller("ProdutoController", ProdutoController);

})();