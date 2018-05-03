function AuthService(Parse) {
  var auth = new Parse.User();
  var authData = null;
  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  function onSignIn(user) {
    authData = user;
    return auth.$requireSignIn();
  }
  function clearAuthData() {
    authData = null;
  }

  this.register = function (user) {
    return auth
      auth.set("email", user.email);
      auth.set("password", user.password);

      auth.signUp(null, {
        success: function(auth) {
        },
        error: function(auth, error) {
        alert("Error: " + error.code + " " + error.message);
        }
      })
      .then(storeAuthData);
  };

  this.login = function (user) {
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
    return auth
    .logOut().then(() => {
      var currentUser = Parse.User.current();
    })
    .then(clearAuthData);
};




//
//   var auth = $firebaseAuth();
//   var authData = null;
//   function storeAuthData(response) {
//     authData = response;
//     return authData;
//   }
//   function onSignIn(user) {
//     authData = user;
//     return auth.$requireSignIn();
//   }
//   function clearAuthData() {
//     authData = null;
//   }
//   this.login = function (user) {
//     return auth
//       .$signInWithEmailAndPassword(user.email, user.password)
//       .then(storeAuthData);
//   };
//   this.register = function (user) {
//     return auth
//       .$createUserWithEmailAndPassword(user.email, user.password)
//       .then(storeAuthData);
//   };
//   this.logout = function () {
//     return auth
//       .$signOut()
//       .then(clearAuthData);
//   };
//   this.requireAuthentication = function () {
//     return auth
//       .$waitForSignIn().then(onSignIn);
//   };
//   this.isAuthenticated = function () {
//     return !!authData;
//   };
//   this.getUser = function () {
//     if (authData) {
//       return authData;
//     }
//   };
// }

angular
  .module('components.auth')
  .service('AuthService', AuthService);
