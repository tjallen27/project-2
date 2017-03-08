'use strict';

/* global google:ignore mapStyles:ignore*/
$(function () {

  console.log('JS loaded!');

  var $map = $('#map');
  var map = null;
  if ($map.length) initMap();
  var $slider = $('#slider1');
  var circle = new google.maps.Circle({
    fillColor: '#3399FF',
    fillOpacity: 0.3,
    strokeColor: '#0099FF',
    strokeOpacity: 0.5
  });

  $slider.on('change', function (e) {
    if (circle.map) {
      circle.setRadius(parseFloat($(e.target).val()));
      map.fitBounds(circle.getBounds());
    }
  });

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

    // $('.find_me').one('click', () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('<div class="info">You\'re here!</div>');
        map.setCenter(pos);
        circle.setMap(map);
        circle.setCenter(pos);
        //Store val of slider
        circle.setRadius(parseFloat($slider.val()));
        // Add the circle for this city to the map.
        map.fitBounds(circle.getBounds());
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
    // });


    var users = $('#map').data('users');
    users.forEach(function (user) {
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

  var currentValue = $('#currentValue');

  $('#slider1').change(function () {
    currentValue.html(this.value / 1000 + 'km');
  });

  // Trigger the event on load, so
  // the value field is populated:

  $('#slider1').change();
});