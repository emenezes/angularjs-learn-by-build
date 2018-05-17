

function AdicionarProdutoController () {

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

export default AdicionarProdutoController;