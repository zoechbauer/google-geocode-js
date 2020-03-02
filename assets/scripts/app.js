function geocode() {
  const location = 'Linz, Hauptplatz';
  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: api_key
      }
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));
}
