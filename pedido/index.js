(function(){

angular.module('myStore')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'pedidos',
        url: '/pedidos',
        component: 'pedidoComponent'
      });
    }]);

})();