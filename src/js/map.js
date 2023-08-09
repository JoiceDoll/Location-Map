const map = L.map("map");

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

navigator.geolocation.watchPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  map.setView([latitude, longitude], 16);
  const myLocation = L.marker([latitude, longitude]).addTo(map);
  myLocation.bindPopup("Esta é sua localização!").openPopup();
});
