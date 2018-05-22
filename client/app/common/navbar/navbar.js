import angular from 'angular';
import navbarComponent from './navbar.component';
import navbarService from './navbar.service';

let navbarModule = angular.module('navbar', [

])

.service('NavbarService', navbarService)
.component('navbar', navbarComponent)
  
.name;

export default navbarModule;
