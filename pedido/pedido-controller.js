(function(){

function PedidoController($filter) {
	let listaPedidosStored = localStorage.getItem('listaPedidos');
	this.listaPedidosOriginal = (listaPedidosStored && JSON.parse(listaPedidosStored)) || [];
	this.listaPedidos = this.listaPedidosOriginal;
	this.novoPedido = {};
	this.estiloTabelaLinhaImpar = {'background-color':'blue'}
	this.estiloTabelaLinhaPar = {'background-color':'red'}
	var id = 0;
	this.criar = function() {
		this.novoPedido.id = ++id;
		this.listaPedidos.push(this.novoPedido);
		this.novoPedido = {};
		localStorage.setItem('listaPedidos',JSON.stringify(this.listaPedidos));
	}
	this.filtrarPedidos = () => {
		this.listaPedidos = $filter('filter')(this.listaPedidosOriginal, this.pedidoBuscado);
	}
	this.calcularTotal = (idProdutos) => {

	}
}

PedidoController.$inject = ['$filter'];
angular.module('myStore')
	.controller('PedidoController', PedidoController);

})();