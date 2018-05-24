function ProdutoController($uibModal,$filter,$log,ProdutoService,AlertService) {

	ProdutoService.get()
	.then( (lista) => { 
		this.listaProdutosOriginal = lista; 
		this.listaProdutos = lista;
	})
	.catch( (error) => $log.info(error) );
	this.novoProduto = {};

	this.criar = function(novoProduto) {
		ProdutoService.criar (novoProduto)
		.then( (lista) => { 
			this.listaProdutosOriginal = lista; 
			this.listaProdutos = lista;
			this.alertMsg = AlertService.showAlert('Produto criado com sucesso.', 'success', 5000)
		});
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

ProdutoController.$inject = ['$uibModal','$filter','$log','ProdutoService','AlertService'];

export default ProdutoController;
