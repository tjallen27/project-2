/* global google:ignore */
$(()=>{

  console.log('JS loaded!');

  const $map = $('#map');
  let map = null;
  if ($map.length) initMap();

  function initMap() {
    const users = $map.data('users');
    console.log(users);
    var center = {lat: 51.515113, lng: -0.072051};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center
    });

    getUsers();
  }

  function getUsers(address) {
    $.get(address)
      .done((response) => { // Response is equal to an array of all of the bike points
        $.each(response, (index, address) => {
          // Add a marker for each user point
          addMarker(address);
        });
      });
  }

  function addMarker(location) {
    const latLng = { lat: location.lat, lng: location.lon };
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }

});
