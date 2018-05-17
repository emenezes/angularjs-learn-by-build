import angular from 'angular';
import homeModule from './home/home';
import clienteModule from './cliente/cliente';
import produtoModule from './produto/produto';
import pedidoModule from './pedido/pedido';
import sobreModule from './sobre/sobre';

let componentModule = angular.module('app.components', [
  homeModule,
  clienteModule,
  produtoModule,
  pedidoModule,
  sobreModule
])
  
.name;

export default componentModule;
