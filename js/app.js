var am = angular.module('main_app', [
    'main_app.services',
    'main_app.controllers',
    'ngRoute',
    'ngMaterial',
    'ngAnimate',
    'duScroll'
]);


am.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/landing", {templateUrl: "src/landing/landing.html", controller: "landing_controller"});
  $routeProvider.when("/terms_conditions", {templateUrl: "src/terms_conditions/terms_conditions.html", controller: "terms_conditions_controller"});
  $routeProvider.otherwise({redirectTo: '/landing'});
}]);

am.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('jandoBrochure', {
    '50': '#fff',
    '100': '#fff',
    '200': '#fff',
    '300': '#fff',
    '400': '#fff',
    '500': '#fff',
    '600': '#fff',
    '700': '#fff',
    '800': '#fff',
    '900': '#fff',
    'A100': '#fff',
    'A200': '#fff',
    'A400': '#fff',
    'A700': '#fff',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default').foregroundPalette[3] = "#fff";
  $mdThemingProvider.theme('default')
    .primaryPalette('jandoBrochure', {
      'default': '800', // by default use shade 800 from the jandoBrochure palette for primary intentions
      'hue-1': '50', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '100', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': '200' // use shade A100 for the <code>md-hue-3</code> class
      
    })
});


am.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('social', 'img/icons/social-icons.svg', 24)
    .iconSet('device', 'img/icons/device-icons.svg', 24)
    .iconSet('communication', 'img/icons/communication-icons.svg', 24)
    .defaultIconSet('img/icons/core-icons.svg', 24);
})


var main_services = angular.module('main_app.services', []);
var main_controllers = angular.module('main_app.controllers', []);

am.run(function($rootScope, init_service, lookup_service, $window, $document) {
  console.log("run");
  $rootScope.lookup = {};
  $rootScope.api_generic = '';

  $rootScope.login = {result : { token:''}};
  $rootScope.session = {};

  init_service.init_api_uris();
  lookup_service.init_lookups();

  //http://stackoverflow.com/questions/23272169/angularjs-what-is-the-best-way-to-bind-to-a-global-event-in-a-directive
  angular.element($window).on('resize', function() {
    var w = $window;
    var d = $document[0];
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var x = w.innerWidth || e.clientWidth || g.clientWidth;
    var y = w.innerHeight || e.clientHeight || g.clientHeight;
    $rootScope.$broadcast('window-resize', {
      innerWidth: x,
      innerHeight: y
    });
  });

  angular.element($window).on('scroll', function() {
    $rootScope.$broadcast('window-scroll', {
      pageYOffset: $window.pageYOffset
    });
  });

});

