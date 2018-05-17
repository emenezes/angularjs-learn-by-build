
function PedidoController($uibModal,$filter,$log,PedidoService) {

	PedidoService.get()
	.then( (lista) => this.listaPedidos = lista )
	.catch( (error) => $log.info("Não foi possível carregar os pedidos.", error) );

	this.filtrarPedidos = () => {
		this.listaPedidos = $filter('filter')(this.listaPedidosOriginal, this.pedidoBuscado);
	}

	this.calcularTotal = (idProdutos) => {

	}

	this.getNomeClientePelaId = function (pedido) {
		return getClientePelaId(pedido.idCliente).nome;
	}

	this.mostrarItensPedido = (pedido) => {
		$log.log("mostrarItensPedido", pedido.idProduto);
		var produtos = Array()
		pedido.idProduto.forEach( (id) => {
			produtos.push(PedidoService.ps.getProdutoPelaId(id))
		});

		var modalInstance = $uibModal.open({
      animation: true,
      component: 'itensPedido',
      resolve: {
        listaProdutos: function () {
          return produtos;
        },
        pedidoId: () => pedido.id,
        nomeCliente: () => this.getNomeClientePelaId(pedido)
      }
    });

    modalInstance.result
    .then( () => $log.info("modal fechado") )
    .catch ( () => $log.info('erro no modal') );

	}

	function getClientePelaId (id) {
		return PedidoService.cs.getClientePelaId(id);
	}
}

PedidoController.$inject = ['$uibModal','$filter','$log','PedidoService'];

export default PedidoController;
