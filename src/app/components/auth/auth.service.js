/**
 * A service that performs authorization functions
 * @param  {object} Parse  uses Parse
 * @param  {type}   var    auth creates new Parse.User()
 * @param  {type}   var    sets the current user as null
 */
function AuthService(Parse) {
  var auth = new Parse.User();
  var currentUser = null;

  /**
   * A function that stores the currentUser as the current user
   */
  function storeAuthData(response) {
    currentUser = response;
    return currentUser;
  }
  /**
   * A function that clears the currentUser and sets it to null
   */
  function clearAuthData() {
    currentUser = Parse.User.current();
    return currentUser;
  }
  /**
   * Takes user object from the form and stores the email and password
   * @param   {object} user           takes user from form submition
   * @param   {string} user.email     email
   * @param   {string} user.password  password
   * @returns {object}                auth
   */
  this.register = function (user) {
    auth.set("username", user.email);
    auth.set("password", user.password);
      return auth
      /**
      * Calls Parse.signUp function to store data in Parse.User class
      */
        .signUp(null, {
          success: function(auth) {
          },
          error: function(auth, error) {
          alert("Error: " + error.code + " " + error.message);
          }
        })
        .then(storeAuthData);
  };
  /**
   * Takes user object from the form and calls Parse.User.logIn function which takes in a username and password
   * @param   {string}    user.email        email
   * @param   {string}    user.password     password
   * @param   {function}  storeAuthData     calls storeAuthData function to store current user
   */
  this.login = function (user) {
    return Parse.User
      .logIn(user.email, user.password, {
        success: function(auth) {
        },
        error: function(auth, error) {
        }
      })
      .then(storeAuthData);
  };

  /**
   * Uses Parse.User.logOut method to log user out and then clears the current stored user by calling the clearAuthData function
   */
  this.logout = function () {
    return Parse.User.logOut().then(clearAuthData);
  };

  /**
   * Makes sure the user is authenticated before accessing the "app"
   */
  this.requireAuthentication = function () {
    return new Promise((resolve, reject) => {
      if (currentUser && currentUser.authenticated()) {
        resolve();
      } else {
        reject();
      }
    })
  };

  /**
   * Checks if user is authenticated. returns true or false
   * @return {boolean}  returns true or false
   */
  this.isAuthenticated = function () {
    return !!currentUser;
  };

  /**
   * Gets the currentUser stored locally
   */
  this.getUser = function () {
    if (currentUser) {
      return currentUser;
    }
  };
};

angular
  .module('components.auth')
  .service('AuthService', AuthService);
