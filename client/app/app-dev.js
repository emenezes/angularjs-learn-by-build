import angular from 'angular';
import ngMockE2E from 'angular-mocks';
import FalsoServidorRemoto from './fake-server';
import appModule from './app';

let appDevModule = angular.module('appDev', [
    appModule,
    'ngMockE2E'
  ])

	.run(FalsoServidorRemoto)
	.name;
  
angular.bootstrap(document.body, [ appDevModule ]);
