(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var reg = this;

  reg.submit = function () {
    var promise = SignUpService.getFavoriteDishDescription(reg.user.shortname);
    promise.then(function (response) {
      reg.items = response.data;
      SignUpService.storeFavoriteDish(reg.user.shortname);
      reg.completed = true;
      reg.error = false;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
      reg.completed = false;
      reg.error = true;
    });
  };
}
})();
