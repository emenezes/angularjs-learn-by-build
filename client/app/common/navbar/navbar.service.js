function NavbarService($log) {
	
	this.resetar = () => {
		this.mostrarBotaoAcao1 = false;
		this.funcaoAcaoBotao1 = () => $log.info('Nenhuma ação registrada para o botão 1.');
	}
	this.resetar();
}

NavbarService.$inject = ['$log'];
export default NavbarService;