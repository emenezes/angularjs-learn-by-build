import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clienteComponent from './cliente.component';
import cidadesValue from './cidades.service';
import clienteService from './cliente.service';

let clienteModule = angular.module('cliente', [
  uiRouter
])

.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state({
    name: 'clientes',
    url: '/cliente',
    component: 'clientes'
  });
}])

.value('CidadesService', cidadesValue)
.service('ClienteService', clienteService)
.component('clientes', clienteComponent)

.name;

export default clienteModule;
