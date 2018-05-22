
function NavbarController(NavbarService) {
  this.isNavbarCollapsed = true;
  this.toggleNavbar = () => this.isNavbarCollapsed = !this.isNavbarCollapsed;
  this.closeNavbar = () => this.isNavbarCollapsed = true;
  this.acaoBotao1 = () => NavbarService.funcaoAcaoBotao1();
  this.devoMostrarBotao1 = () => NavbarService.mostrarBotaoAcao1;
}

NavbarController.$inject = ['NavbarService'];
export default NavbarController;
