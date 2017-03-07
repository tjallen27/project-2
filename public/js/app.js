'use strict';

/* global google:ignore */
$(function () {

  console.log('JS loaded!');

  var $map = $('#map');
  var map = null;
  if ($map.length) initMap();

  function initMap() {
    var users = $map.data('users');
    console.log(users);
    var center = { lat: 51.515113, lng: -0.072051 };
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center
    });

    getUsers();
  }

  function getUsers(address) {
    $.get(address).done(function (response) {
      // Response is equal to an array of all of the bike points
      $.each(response, function (index, address) {
        // Add a marker for each user point
        addMarker(address);
      });
    });
  }

  function addMarker(location) {
    var latLng = { lat: location.lat, lng: location.lon };
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
});