angular.module('firstModule')
    .config(['$stateProvider','$urlRouterProvider',configuration]);

function configuration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/sweetHome')

    $stateProvider
        .state( {
            name: 'home',
            url: '/sweetHome',
            templateUrl: './app/views/home.view.html',
            controller: 'HomeController'
        })
        .state( {
            name: 'home.profile',
            url: '/profile',
            template: '<h1> Profile Works!</h1>',
        });
       

};