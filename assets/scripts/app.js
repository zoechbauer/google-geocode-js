function geocode() {
  const location = 'Linz, Hauptplatz';
  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: api_key
      }
    })
    .then(result => {
      console.log(result);

      // formatted address
      const formattedAddress = result.data.results[0].formatted_address;
      const formattedAddressOutput = `
        <ul class="list-group">
          <li class="list-group-item">${formattedAddress}</li>
        </ul>
      `;

      // output to app
      document.getElementById(
        'formatted-address'
      ).innerHTML = formattedAddressOutput;
    })
    .catch(err => console.log(err));
}
