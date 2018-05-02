(function(){

angular.module('myStore')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'produtos',
        url: '/produto',
        controller: 'ProdutoController',
        controllerAs: '$ctrl',
        templateUrl: './produto/index.html'
      });
    }]);

})();