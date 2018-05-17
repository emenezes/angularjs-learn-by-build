function ProdutoController($uibModal,$filter,$log,ProdutoService) {

	ProdutoService.get()
	.then( (lista) => { 
		this.listaProdutosOriginal = lista; 
		this.listaProdutos = lista;
	})
	.catch( (error) => $log.info("Não foi possível carregar os produtos.", error) );
	this.novoProduto = {};

	this.criar = function(novoProduto) {
		ProdutoService.criar (novoProduto);
		this.novoProduto = {};
	}
	
	this.filtrarProdutos = () => {
		this.listaProdutos = $filter('filter')(this.listaProdutosOriginal, this.produtoBuscado);
	}

	this.abrirModal = () => {
		var modalInstance = $uibModal.open({
      animation: true,
      component: 'adicionarProduto',
      resolve: {
        listaProdutos: () => {
          return this.listaProdutos || [];
        }
      }
    });

    modalInstance.result
    .then( (novoProduto) => this.criar(novoProduto) )
    .catch ( () => $log.info('adicionar-produto dismissed at: ' + new Date()));
	}
}

ProdutoController.$inject = ['$uibModal','$filter','$log','ProdutoService'];

export default ProdutoController;
