angular.module('myStore').component('itensPedido', {
  templateUrl: './itens-pedido/index.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function ($log) {

    this.$onInit = function () {
      this.lista = angular.copy(this.resolve.listaProdutos);
      this.pedidoId = this.resolve.pedidoId;
      this.nomeCliente = this.resolve.nomeCliente;
    };

    this.ok = function () {
      this.close({$value: 'ok'});
    };

    this.cancel = function () {
      this.dismiss({$value: 'cancel'});
    };
  }
});