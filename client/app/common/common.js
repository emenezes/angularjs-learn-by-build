import angular from 'angular';
import navbarModule from './navbar/navbar';
import footerModule from './footer/footer';
import adicionarProdutoModule from './adicionar-produto/adicionar-produto';
import itensPedidoModule from './itens-pedido/itens-pedido';
import alertModule from './alert/alert';

let commonModule = angular.module('app.common', [
  navbarModule,
  footerModule,
  adicionarProdutoModule,
  itensPedidoModule,
  alertModule
])
  
.name;

export default commonModule;
