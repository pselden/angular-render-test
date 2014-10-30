var angular = require('angular');
var translate = require('angular-translate');
translate = 'pascalprecht.translate';
var localeLoader = require('./localeLoader');

var app = angular.module('app', [translate, localeLoader.name]);

app.controller('AppCtrl', require('./AppCtrl'));

app.config(function($translateProvider){
    $translateProvider.preferredLanguage('en');
});