(function(){

angular.module('myStore',[]);

})();

(function(){

function ProdutoController() {
	let listaProdutosStored = localStorage.getItem('listaProdutos');
	this.listaProdutos = (listaProdutosStored && JSON.parse(listaProdutosStored)) || [];
	this.novoProduto = {};
	this.estiloTabelaLinhaImpar = {'background-color':'blue'}
	this.estiloTabelaLinhaPar = {'background-color':'red'}
	var id = 0;
	this.criarProduto = function() {
		this.novoProduto.id = ++id;
		this.listaProdutos.push(this.novoProduto);
		this.novoProduto = {};
		localStorage.setItem('listaProdutos',JSON.stringify(this.listaProdutos));
	}
}

ProdutoController.$inject = [];
angular.module('myStore')
	.controller('ProdutoController', ProdutoController);

})();