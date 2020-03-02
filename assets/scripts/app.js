let locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', geocode);

// get and display geocoding data
function geocode(event) {
  event.preventDefault();

  const location = document.getElementById('location-input').value;

  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: api_key
      }
    })
    .then(response => {
      console.log(response);

      // formatted address
      const formattedAddress = response.data.results[0].formatted_address;
      const formattedAddressOutput = `
        <ul class="list-group">
          <li class="list-group-item">${formattedAddress}</li>
        </ul>
      `;

      // address components
      const addressComponents = response.data.results[0].address_components;
      let addressComponentsOutput = '<ul class="list-group">';
      for (let i = 0; i < addressComponents.length; i++) {
        addressComponentsOutput += `
          <li class="list-group-item"><strong>
            ${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}
          </li>
        `;
      }
      addressComponentsOutput += '</ul>';

      // geometry
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      const geometryOutput = `
        <li class="list-group-item">
          <strong>latitude</strong>: ${lat}</li>  
        <li class="list-group-item">
          <strong>longitude</strong>: ${lng}</li>
      `;

      // output to app
      document.getElementById(
        'formatted-address'
      ).innerHTML = formattedAddressOutput;
      document.getElementById(
        'address-components'
      ).innerHTML = addressComponentsOutput;
      document.getElementById('geometry').innerHTML = geometryOutput;
    })
    .catch(err => console.log(err));
}
