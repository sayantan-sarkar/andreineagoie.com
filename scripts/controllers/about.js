'use strict';
document.body.scrollTop = document.documentElement.scrollTop = 0;

angular.module('andreineagoie1App')
  .controller('AboutCtrl', function ($scope) {
    var el = document.querySelectorAll('canvas');
    el[0].style.display = '';
  });


