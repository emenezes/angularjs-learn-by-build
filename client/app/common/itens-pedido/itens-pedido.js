import angular from 'angular';
import itensPedidoComponent from './itens-pedido.component';

let itensPedidoModule = angular.module('itensPedido', [
])

.component('itensPedido', itensPedidoComponent)

.name;

export default itensPedidoModule;
