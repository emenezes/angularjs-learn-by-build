import template from './itens-pedido.html';
import controller from './itens-pedido.controller';
import './itens-pedido.scss';

let itensPedidoComponent = {
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  template,
  controller
};

export default itensPedidoComponent;
