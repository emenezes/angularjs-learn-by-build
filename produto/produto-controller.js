(function(){

function ProdutoController($filter,ProdutoService) {
	
	this.listaProdutos = ProdutoService.get() ;
	this.novoProduto = {};
	this.estiloTabelaLinhaImpar = {'background-color':'blue'}
	this.estiloTabelaLinhaPar = {'background-color':'red'}

	this.criar = function() {
		ProdutoService.criar (this.novoProduto);
		this.novoProduto = {};
	}
	
	this.filtrarProdutos = () => {
		this.listaProdutos = $filter('filter')(ProdutoService.get(), this.produtoBuscado);
	}
}

ProdutoController.$inject = ['$filter','ProdutoService'];
angular.module('myStore').controller('ProdutoController', ProdutoController);

})();