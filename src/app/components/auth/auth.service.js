function AuthService($parseAuth) {
  this.register = function (user) {
    var userData = new Parse.Object('Account')
    Parse.defineAttributes(userData, ['email', 'password'])
    userData.email = user.email;
    userData.password = user.password;

    userData.save(null, {

      success: function(userData) {
      },
      error: function(userData, error) {

      }
    });
  }
  // this.login = function (user) {
  //   var Account = Parse.Object.extend("Account")
  //   var query = new Parse.Query(Account)
  //   query.include("email")
  //   query.include("password")
  // }
}






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
