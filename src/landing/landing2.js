main_controllers.controller('landing_controller', function($http, $scope, $rootScope, $document, $window, $mdSidenav) {
    $scope.rs = $rootScope;
    $scope.ui = {};
    $scope.hide = true;


    $scope.isSidenavOpen = false;
    
      $scope.openRightMenu = function() {
        $mdSidenav('right').toggle();
      };

    //console.log('landing_controler');

    $scope.$on('window-scroll', function(event, args) {
        //console.log('pageYOffset ' + args.pageYOffset);
        $scope.$apply(scroll_offset_changed(args.pageYOffset));
    });
    //$scope.headerstyle = {top:'0px'};
    $scope.headerstyle2 = {background: header_style_rgba(0)};
    $scope.headerstyle = {background: header_style_rgba(0)};
    $scope.headertextstyle = {color: header_text_style_rgb(0)};
    $scope.headerbuttonstyle = {color: header_button_style_rgb(0)};
    $scope.headertransparent = true;
    function scroll_offset_changed(offset){
        if(offset >= 0 && offset <= 100){
          //$scope.headerstyle.top = (offset - 80) + 'px' ;
          $scope.headerstyle = {background: header_style_rgba(offset  / 100)};
          $scope.headertransparent = true;
        } else {
          //$scope.headerstyle.top = '0px';
          $scope.headerstyle = {background: header_style_rgba(1)};
          $scope.headertransparent = false;
        }
        if(offset >= 0 && offset <= 100){
          $scope.headertextstyle = {color: header_text_style_rgb(offset  / 100)};
          $scope.headerbuttonstyle = {color: header_button_style_rgb(offset  / 100)};
        } else {
          $scope.headertextstyle = {color: header_text_style_rgb(1)};
          $scope.headerbuttonstyle = {color: header_button_style_rgb(1)};
        }
    }
    function header_style_rgba(frac){
        return 'rgba(255, 255, 255, ' + frac.toFixed(1) + ')';
    };
    function header_text_style_rgb(frac){
        var from = 255;
        var to = 130;
        var c = from - ((from - to) * frac); 
        var c = c.toFixed(0);
        return 'rgb(' + c + ', ' + c + ', ' + c + ')';
    };
    function header_button_style_rgb(frac){
        var from = 255;
        var to = 130;
        var c = from - ((from - to) * frac); 
        var c = c.toFixed(0);
        return 'rgb(' + c + ', ' + c + ', ' + c + ')';
    };


    $scope.$on('window-resize', function(event, args) {
        $scope.$apply(show_links_calc(args.innerWidth));
    });
    //$scope.show_links = true;
    show_links_calc($window.innerWidth);
    function show_links_calc(width){
        console.log(width);
        if(width > 1060){
            $scope.show_links = true;
        } else {
            $scope.show_links = false;
        }
    }


    var where = angular.element(document.getElementById('whereTo'));
    $scope.toWhere = function() {
        $document.scrollToElementAnimated(where, 60, 2000);
    }

    var where2 = angular.element(document.getElementById('whereTo2'));
    $scope.toWhere2 = function() {
        $document.scrollToElementAnimated(where2, 60, 2000);
    }

    var how = angular.element(document.getElementById('howTo'));
    $scope.toHow = function() {
        $document.scrollToElementAnimated(how, 60, 2000);
    }

    var contact = angular.element(document.getElementById('contactTo'));
    $scope.toContact = function() {
        $document.scrollToElementAnimated(contact, 60, 2000);
    }


    var gap = angular.element(document.getElementById('gapTo'));
    $scope.toGap = function() {
        $document.scrollToElementAnimated(gap, 60, 2000);
    }

    $scope.button_send = function(){
        console.log('$scope: ' + JSON.stringify($scope.ui));
        if(!$scope.ui.name || $scope.ui.name.length < 0){
            alert('Please fill in your name to continue');
            return;
        }
        if(!$scope.ui.email || $scope.ui.email.length < 0){
            alert('Please fill in your email to continue');
            return;
        }

        if (isEmailAddress($scope.ui.email) == false) {
            alert('Please fill in a valid email to continue');
            return;
        }

        if(!$scope.ui.phone || $scope.ui.phone.length < 0){
            alert('Please fill in you phone number to continue');
            return;
        }
        if(!$scope.ui.message || $scope.ui.message.length < 0){
            alert('Please fill in a message to continue');
            return;
        }

        $scope.ui.location = 'Consumer';

        gen_http(
          $http,
          200, {
            method: 'POST',
            //url: $scope.rs.api_generic + '/contact_us',
            url: 'https://consumer-web-api-test.jando.com/contact_us',
            params: {},
            data: $scope.ui
          },
          function(data, status) {
            if (!data) {
              alert('Status: ' + (status ? status : ''));
            } else if (data.message && data.message.length > 0) {
              alert((status ? status : '') + ' ' + data.message);
            } else {
              alert((status ? status : '') + ' Server call error');
            }
          },
          function(data, status) {
            // $location.path('/accounts/accounts_list');
            alert('Thank you we will repond to your message soon.');
          }
        );
    }

    // $scope.toTheTop = function() {
    //   $document.scrollTopAnimated(0, 5000).then(function() {
    //     console && console.log('You just scrolled to the top!');
    //   });
    // } 

});

// <md-sidenav class="md-sidenav-right md-whiteframe-4dp" md-component-id="right">
//         <md-toolbar class="md-theme-light">
//           <h1 class="md-toolbar-tools">Sidenav Right</h1>
//         </md-toolbar>
//         <md-content ng-controller="RightCtrl" layout-padding>
//           <form>
//             <md-input-container>
//               <label for="testInput">Test input</label>
//               <input type="text" id="testInput"
//                      ng-model="data" md-autofocus>
//             </md-input-container>
//           </form>
//           <md-button ng-click="close()" class="md-primary">
//             Close Sidenav Right
//           </md-button>
//         </md-content>
//       </md-sidenav>
