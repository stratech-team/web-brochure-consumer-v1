
main_services.factory('init_service', function($rootScope) {
  var service_functions = {};

  service_functions.init_api_uris = function() {
    $rootScope.api_generic = 'http://jandoapp.memberbase.net/api';
  };

  service_functions.init_lookup_selectors = function() {
  };

  return service_functions;
});