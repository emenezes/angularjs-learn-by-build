import angular from 'angular';
import uiRouter from 'angular-ui-router';
import produtoComponent from './produto.component';
import produtoService from './produto.service';

let produtoModule = angular.module('produto', [
  uiRouter
])

.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state({
    name: 'produtos',
    url: '/produto',
    component: 'produtos'
  });
}])

.service('ProdutoService', produtoService)
.component('produtos', produtoComponent)

.name;

export default produtoModule;
