main_services.factory("lookup_service", function($rootScope) {
  var service_functions = {};

  service_functions.init_lookups = function() {
 

    $rootScope.lookup.person_or_business = [
      {"id":"", "desc":"I am a ...."},
      {"id":"Business", "desc":"Business / Organisation"},
      {"id":"Person", "desc":"I am a Person"}
    ];

    $rootScope.lookup.person_business = [
      {"id":"Business", "desc":"I am a Business / Organisation"},
      {"id":"Person", "desc":"I am a Person"}
    ];

    $rootScope.lookup.sort_by = [
      {"id":"New Items", "desc":"New Items"},
      {"id":"Alphabetically", "desc":"Alphabetically"},
      {"id":"Lower Price", "desc":"Lower Price"},
      {"id":"Higher Price", "desc":"Higher Price"},
      {"id":"Most Viewed", "desc":"Most Viewed"}
    ];

    

    $rootScope.lookup.lookup_numbers4 = [];
    for (var i=0; i <= 4; i++) {
      $rootScope.lookup.lookup_numbers4.push({"id": i, "desc": i.toString()});
    }


    $rootScope.lookup.lookup_date_day = ['Day','01','02','03','04','05','06','07','08','09'];
    for (var i=10; i <= 31; i++) {
      $rootScope.lookup.lookup_date_day.push(i.toString());
    }
    $rootScope.lookup.lookup_date_month = ['Month','01','02','03','04','05','06','07','08','09','10','11','12'];
    $rootScope.lookup.lookup_date_year = [
      "Year"
    ];
    for (var i=2014; i >= 1930; i--) {
      $rootScope.lookup.lookup_date_year.push(i.toString());
    }
    $rootScope.lookup.lookup_date_year_card = [
      "Year"
    ];
    for (var i=2025; i >= 2014; i--) {
      $rootScope.lookup.lookup_date_year_card.push(i.toString());
    }
  };

  return service_functions;
});




