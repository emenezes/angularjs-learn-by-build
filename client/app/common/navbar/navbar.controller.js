
function NavbarController() {
  this.isNavbarCollapsed = true;
  this.toggleNavbar = () => this.isNavbarCollapsed = !this.isNavbarCollapsed;
  this.closeNavbar = () => this.isNavbarCollapsed = true;
}

export default NavbarController;
