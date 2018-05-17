
function ItensPedidoController ($log) {

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

ItensPedidoController.$inject = ['$log'];

export default ItensPedidoController;
