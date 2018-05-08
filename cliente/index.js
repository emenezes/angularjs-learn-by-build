(function(){

angular.module('myStore')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'clientes',
        url: '/cliente',
        component: 'clienteComponent'
      });
    }]);

})();