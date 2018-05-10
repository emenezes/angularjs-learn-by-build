(function(){

function ProdutoController($uibModal,$filter,$log,ProdutoService) {

	this.listaProdutos = ProdutoService.get() ;
	this.novoProduto = {};
	this.estiloTabelaLinhaImpar = {'background-color':'blue'}
	this.estiloTabelaLinhaPar = {'background-color':'red'}

	this.criar = function(novoProduto) {
		ProdutoService.criar (novoProduto);
		this.novoProduto = {};
	}
	
	this.filtrarProdutos = () => {
		this.listaProdutos = $filter('filter')(ProdutoService.get(), this.produtoBuscado);
	}

	this.abrirModal = () => {
		var modalInstance = $uibModal.open({
      animation: true,
      component: 'adicionarProduto',
      resolve: {
        listaProdutos: function () {
          return this.listaProdutos;
        }
      }
    });

    modalInstance.result
    .then( (novoProduto) => this.criar(novoProduto) )
    .catch ( () => $log.info('adicionar-produto dismissed at: ' + new Date()));
	}
}

ProdutoController.$inject = ['$uibModal','$filter','$log','ProdutoService'];

angular.module('myStore').component('produtoComponent', {
	bindings: {

	},
	controller: ProdutoController,
	templateUrl: './produto/index.html'
});

})();