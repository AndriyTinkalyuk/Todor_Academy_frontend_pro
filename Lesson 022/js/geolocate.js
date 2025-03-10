const map = document.getElementById("map");


navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    map.innerHTML = '<iframe width="100%" height="100%" src="https://maps.google.com/maps?q='
    + latitude + ',' + longitude + '&amp;z=15&amp;output=embed"></iframe>';

});
