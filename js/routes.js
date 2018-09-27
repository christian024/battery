angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('details', {
    url: '/1',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })

  .state('details2', {
    url: '/3',
    templateUrl: 'templates/details2.html',
    controller: 'details2Ctrl'
  })

  .state('details3', {
    url: '/2',
    templateUrl: 'templates/details3.html',
    controller: 'details3Ctrl'
  })

  .state('details4', {
    url: '/4',
    templateUrl: 'templates/details4.html',
    controller: 'details4Ctrl'
  })

  .state('details5', {
    url: '/5',
    templateUrl: 'templates/details5.html',
    controller: 'details5Ctrl'
  })

  .state('page2', {
    url: '/new',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});