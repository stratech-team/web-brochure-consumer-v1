main_controllers.controller('menu_controller', function($scope, $rootScope, $location, $timeout, $mdSidenav, $log) {
  $scope.rs = $rootScope;

  $scope.menu = [
    {
      link : '/#',
      title: 'Notifications',
      icon: 'sms_failed'
    },
    {
      link : '/#',
      title: 'Contact us',
      icon: 'call'
    },
    {
      link : '/#',
      title: 'FAQ',
      icon: 'description'
    },
    {
      link : '/#',
      title: 'Rules',
      icon: 'description'
    },
    {
      link : '/#',
      title: 'Client FAQ',
      icon: 'description'
    }
  ];

  $scope.menu = [
    {
      link : '/#',
      title: 'Notifications',
      icon: 'sms_failed'
    },
    {
      link : '/#',
      title: 'Complete profile',
      icon: 'verified_user'
    },
    {
      link : '/#',
      title: 'Friends, contacts',
      icon: 'supervisor_account'
    },
    {
      link : '/#',
      title: 'Features and options',
      icon: 'add_circle'
    },
    {
      link : '/#',
      title: 'Settings',
      icon: 'settings'
    },
        {
      link : '/#',
      title: 'Help',
      icon: 'help'
    },
        {
      link : '/#',
      title: 'Take a tour',
      icon: 'explore'
    },
        {
      link : '/#',
      title: 'Terms & Conditions',
      icon: 'description'
    }
  ];

  $scope.logout = function () {
    $rootScope.session.authed = {};
    $rootScope.session.token = {};
    $rootScope.session.profile_name = {};
    $rootScope.session.profile_id = null;
    $rootScope.session.role_admin = {};
    $rootScope.session.role_client = {};
    $rootScope.session.avatar = {};
    $rootScope.session.email = {};
    $rootScope.session.contact_number = {};
    $rootScope.session.first_name = {};
    $rootScope.session.last_name = {};

    $location.path('/landing');
  };

  $scope.landing_button = function () {
    $location.path('/landing');
  };

  $scope.donate_button = function () {
    $location.path('/donate');
  };

  $scope.donations_button = function () {
    $location.path('/donations');
  };
  $scope.title = 'Jando Demo App';


    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })
  main_controllers.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })
  main_controllers.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

