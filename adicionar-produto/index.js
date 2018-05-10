angular.module('myStore').component('adicionarProduto', {
  templateUrl: './adicionar-produto/index.html',
  bindings: {
    listaProdutos: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {

    this.$onInit = function () {
      this.lista = angular.copy(this.listaProdutos);
    };

    this.ok = function () {
      this.close({$value: this.novoProduto});
    };

    this.cancel = function () {
      this.dismiss({$value: 'cancel'});
    };
  }
});