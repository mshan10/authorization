angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root">\n  <div ui-view></div>\n</div>\n');
$templateCache.put('./app-nav.html','<header class="header">\n  <div class="header__fixed">\n    <div>\n      <div class="header__brand">\n        Contacts\n        <a href="" class="header__button header__button--new-contact">\n          <i class="material-icons">add_circle_outline</i>\n          New Contact\n        </a>\n      </div>\n      <div class="header__logout">\n        {{ ::$ctrl.user.email }}\n        <a href="" ng-click="$ctrl.onLogout();">\n          <span class="header__button">\n            <i class="material-icons">power_settings_new</i>\n            Logout\n          </span>\n        </a>\n      </div>\n    </div>\n  </div>\n</header>\n');
$templateCache.put('./app.html','<div class="root">\n  <app-nav user="$ctrl.user" on-logout="$ctrl.logout();"></app-nav>\n  <div class="app">\n    <div ui-view></div>\n  </div>\n</div>\n');
$templateCache.put('./auth-form.html','<form name="authForm" novalidate ng-submit="$ctrl.submitForm();">\n  <label>\n    <input\n      type="email"\n      name="email"\n      required="required"\n      placeholder="Enter your email"\n      ng-model="$ctrl.user.email">\n  </label>\n  <label>\n    <input\n      type="password"\n      name="password"\n      required="required"\n      placeholder="Enter your password"\n      ng-model="$ctrl.user.password">\n  </label>\n  <div class="auth-button">\n    <button type="submit" ng-disabled="authForm.$invalid">\n      {{ $ctrl.button }}\n    </button>\n  </div>\n  <div ng-if="$ctrl.message">\n    {{ $ctrl.message }}\n  </div>\n</form>\n');
$templateCache.put('./register.html','<div class="auth">\n  <h1>Register</h1>\n  <auth-form\n    user="$ctrl.user"\n    message="{{ $ctrl.error }}"\n    button="Create user"\n    on-submit="$ctrl.createUser($event);">\n  </auth-form>\n</div>\n<div class="auth__info">\n  <a ui-sref="auth.login">\n    Already have an account? Login here.\n  </a>\n</div>\n');
$templateCache.put('./login.html','<div class="auth">\n  <h1>Login</h1>\n  <auth-form\n    user="$ctrl.user"\n    message="{{ $ctrl.error }}"\n    button="Login"\n    on-submit="$ctrl.loginUser($event);">\n  </auth-form>\n</div>\n<div class="auth__info">\n  <a ui-sref="auth.register">\n    Don\'t have an account? Create one here.\n  </a>\n</div>\n');}]);