import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pedidoComponent from './pedido.component';
import pedidoService from './pedido.service';

let pedidoModule = angular.module('pedido', [
  uiRouter
])

.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state({
    name: 'pedidos',
    url: '/pedidos',
    component: 'pedidos'
  });
}])

.service('PedidoService', pedidoService)
.component('pedidos', pedidoComponent)

.name;

export default pedidoModule;
