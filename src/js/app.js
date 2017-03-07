/* global google:ignore */
$(()=>{

  console.log('JS loaded!');

  const $map = $('#map');
  let map = null;
  if ($map.length) initMap();

  function initMap() {
    console.log(users);
    var center = {lat: 51.515113, lng: -0.072051};
    map = new google.maps.Map($map.get(0), {
      zoom: 12,
      center: center
    });

    const users = $('#map').data('users');
    users.forEach((user) => {
      console.log('user', user);
      const marker = new google.maps.Marker({
        position: { lat: parseFloat(user.address.lat), lng: parseFloat(user.address.lng) },
        map: map
      });
    });
  }
});
