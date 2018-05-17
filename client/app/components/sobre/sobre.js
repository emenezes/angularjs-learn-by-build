import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sobreComponent from './sobre.component';

let sobreModule = angular.module('sobre', [
  uiRouter
])

.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state({
    name: 'sobre',
    url: '/sobre',
    component: 'sobre'
  });
}])

.component('sobre', sobreComponent)

.name;

export default sobreModule;
