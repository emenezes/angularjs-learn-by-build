class HomeController {
  http = null;
  constructor($log, NavbarService, $http) {
    this.name = 'home';
    this.http = $http;
    this._log = $log;
    this._navbarService = NavbarService;
    NavbarService.mostrarBotaoAcao1 = true;
    NavbarService.funcaoAcaoBotao1 = () => {
    	this.funcaoAcaoBotao1();
    }
  }

  funcaoAcaoBotao1 () {
  	this._log.info('Ação registrada para o botão 1 na controladora HomeController.')
  }

  $onDestroy () {
  	this._navbarService.resetar();
  }

  teste() {
    // this.http.get('/api/produtos/555');
    this.http.delete('/api/produtos/556')
    .then((response)=>this._log.debug(response));
  }
}
HomeController.$inject = ['$log','NavbarService','$http'];
export default HomeController;
