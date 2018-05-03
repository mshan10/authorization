function AuthService(Parse) {
  var auth = new Parse.User();
  var authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  // function onSignIn(user) {
  //   authData = user;
  //   return auth.$requireSignIn();
  // }
  function clearAuthData() {
    authData = Parse.User.current();
  }

  this.register = function (user) {
    auth.set("username", user.email);
    auth.set("email", user.email);
    auth.set("password", user.password);
      return auth
        .signUp(null, {
          success: function(auth) {
          },
          error: function(auth, error) {
          alert("Error: " + error.code + " " + error.message);
          }
        })
        .then(storeAuthData);
  };

  this.login = function (user) {
    auth.set("username", user.email);
    auth.set("email", user.email);
    auth.set("password", user.password);
    return auth
      .logIn(user.email, user.password, {
        success: function(auth) {
        },
        error: function(auth, error) {
        }
      })
      .then(storeAuthData);
  };

  this.logout = function () {
    return Parse.User.logOut().then(clearAuthData);
  };
  //
  // this.requireAuthentication = function () {
  //   return auth
  //     .$waitForSignIn().then(onSignIn);
  // };
  //

  this.isAuthenticated = function () {
    return !!authData;
  };

  this.getUser = function () {
    if (authData) {
      return authData;
    }
  };
};

angular
  .module('components.auth')
  .service('AuthService', AuthService);
