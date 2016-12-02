import fetch from 'isomorphic-fetch'

const receiveData = (breweries) => {
  return {
    type: 'RECEIVE_DATA',
    breweries,
    receivedAt: Date.now()
  }
}

export const fetchData = () =>  {
  return dispatch => {
    return fetch(`http://api.brewerydb.com/v2/breweries?established=2016&key=e9db327782e0bb788cfc2e1bc66f7bf2`)
      .then(response => response.json())
      .then(json => dispatch(receiveData(json.data)))
  }
}
