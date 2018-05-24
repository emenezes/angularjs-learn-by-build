import angular from 'angular';
import alertComponent from './alert.component';
import alertService from './alert.service';

let alertModule = angular.module('alert', [
])

.service('AlertService', alertService)
.component('alert', alertComponent)

.name;

export default alertModule;
