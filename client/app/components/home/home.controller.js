class HomeController {
  constructor($log, NavbarService) {
    this.name = 'home';
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
}
HomeController.$inject = ['$log','NavbarService'];
export default HomeController;
