import template from './adicionar-produto.html';
import controller from './adicionar-produto.controller';
import './adicionar-produto.scss';

let adicionarProdutoComponent = {
  restrict: 'E',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  transclude: true,
  template,
  controller
};

export default adicionarProdutoComponent;
