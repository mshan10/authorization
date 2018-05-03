angular
  .module('components.auth', [
    'ui.router',
    'ngParse'
  ])

  .config(['ParseProvider', function ($ParseProvider) {

    var MY_PARSE_APP_ID = 'Na9nmnwnvmp67Yt1BZ7jFKCCo1SUV8j04gbGFidH';
    var MY_PARSE_JS_KEY = 'bCUH3t5l5Ilyp19krDC4dv0jZuxmLC6OyQH8hztJ';
    $ParseProvider.initialize(MY_PARSE_APP_ID, MY_PARSE_JS_KEY);
    $ParseProvider.serverURL = 'https://parseapi.back4app.com/';
  }]);

  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth);
      }
    });
    // }, function () {
    //   return AuthService
    //     .requireAuthentication()
    //     .catch(function () {
    //       return $state.target('auth.login');
    //     });
    // });
    $transitions.onStart({
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
