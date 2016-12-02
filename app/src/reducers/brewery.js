const initialState = {
  breweries: []
}

const brewery = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        ...state,
        breweries: action.breweries
      }
    default:
      return state
  }
}

export default brewery
