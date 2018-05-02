(function(){

angular.module('myStore',['ui.bootstrap','ui.router'])
  .config(['$urlRouterProvider', ($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  }])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state({
      name: 'home',
      url: '/',
      template: `
        Bem vindo a loja !!!
      `
    });
  }]);

})();