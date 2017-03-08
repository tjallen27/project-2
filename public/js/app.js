'use strict';

/* global google:ignore mapStyles:ignore*/
$(function () {

  console.log('JS loaded!');

  var $map = $('#map');
  var map = null;
  if ($map.length) initMap();

  function initMap() {
    console.log(users);
    var center = { lat: 51.515113, lng: -0.072051 };
    map = new google.maps.Map($map.get(0), {
      zoom: 13,
      center: center,
      scrollwheel: false,
      styles: mapStyles
    });
    var infoWindow = new google.maps.InfoWindow({ map: map });

    $('.find_me').on('click', function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent('<div class="info">You\'re here!</div>');
          map.setCenter(pos);
        }, function () {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
      }
    });

    var users = $('#map').data('users');
    users.forEach(function (user) {
      console.log('user', user);
      var marker = new google.maps.Marker({
        position: { lat: parseFloat(user.address.lat), lng: parseFloat(user.address.lng) },
        map: map,
        icon: '../assets/images/marker.png' // Adding a custom icon
      });
      google.maps.event.addListener(marker, 'click', function () {
        location.href = 'users/' + user._id;
      });
    });
  }

  $('.go_back_btn').on('click', goBack);
  function goBack() {
    window.history.back();
  }

  //Change nav styling on number of li's
  var $lis = $('.nav-item');
  var $nav = $('.navbar-nav');
  if ($lis.length < 4) {
    $lis.css('margin', '0 10px');
    $nav.css('width', '50%');
  }
});