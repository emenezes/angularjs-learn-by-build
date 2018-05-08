(function(){

angular.module('myStore')
    .config(['$stateProvider', ($stateProvider) => {
      $stateProvider.state({
        name: 'produtos',
        url: '/produto',
        component: 'produtoComponent'
      });
    }]);

})();