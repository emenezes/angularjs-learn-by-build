(function() {

  angular.module('myStore')
    .controller('NavbarController', NavbarController);

  function NavbarController() {
    this.isNavbarCollapsed = true;
    this.toggleNavbar = () => this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.closeNavbar = () => this.isNavbarCollapsed = true;
  }

})();