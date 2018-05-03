(function(){

angular.module('myStore')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'clientes',
        url: '/cliente',
        controller: 'ClienteController',
        controllerAs: '$ctrl',
        templateUrl: './cliente/index.html'
      });
    }]);

})();