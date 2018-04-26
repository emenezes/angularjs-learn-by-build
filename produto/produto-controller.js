(function(){

angular.module('myStore',[]);

})();

(function(){

function ProdutoController($filter) {
	let listaProdutosStored = localStorage.getItem('listaProdutos');
	this.listaProdutosOriginal = (listaProdutosStored && JSON.parse(listaProdutosStored)) || [];
	this.listaProdutos = this.listaProdutosOriginal;
	this.novoProduto = {};
	this.estiloTabelaLinhaImpar = {'background-color':'blue'}
	this.estiloTabelaLinhaPar = {'background-color':'red'}
	var id = 0;
	this.criar = function() {
		this.novoProduto.id = ++id;
		this.listaProdutos.push(this.novoProduto);
		this.novoProduto = {};
		localStorage.setItem('listaProdutos',JSON.stringify(this.listaProdutos));
	}
	this.filtrarProdutos = () => {
		this.listaProdutos = $filter('filter')(this.listaProdutosOriginal, this.produtoBuscado);
	}
}

ProdutoController.$inject = ['$filter'];
angular.module('myStore')
	.controller('ProdutoController', ProdutoController);

})();