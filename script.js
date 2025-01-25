navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Create a URL with the live location (you can share this link)
    const url = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}`;

    // Output the link that can be shared
    alert(`Share this link: ${url}`);
});
