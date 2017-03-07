'use strict';

/* global google:ignore */
$(function () {

  console.log('JS loaded!');

  var $map = $('#map');
  var map = null;
  if ($map.length) initMap();

  function initMap() {
    console.log(users);
    var center = { lat: 51.515113, lng: -0.072051 };
    map = new google.maps.Map($map.get(0), {
      zoom: 12,
      center: center
    });

    var users = $('#map').data('users');
    users.forEach(function (user) {
      console.log('user', user);
      var marker = new google.maps.Marker({
        position: { lat: parseFloat(user.address.lat), lng: parseFloat(user.address.lng) },
        map: map
      });
    });
  }
});