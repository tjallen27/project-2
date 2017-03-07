$(()=>{

  console.log('JS loaded!');

  const $map = $('#map');
  if ($map.length) initMap();

  function initMap() {
    const users = $map.data('users');
    console.log(users);
  }

});
