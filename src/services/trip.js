export function createTrip(tripParams) {
  return fetch('https://trip-tracker-api.herokuapp.com/api/v1/trips', {
      method: 'post',
      body: tripParams,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    })
      .then(resp => resp.json())
}
