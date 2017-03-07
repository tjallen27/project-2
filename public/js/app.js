'use strict';

$(function () {

  console.log('JS loaded!');

  var $map = $('#map');
  if ($map.length) initMap();

  function initMap() {
    var users = $map.data('users');
    console.log(users);
  }
});