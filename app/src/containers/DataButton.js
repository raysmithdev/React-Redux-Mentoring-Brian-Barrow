import { connect } from 'react-redux'
import DataButtonView from '../components/DataButtonView'
import { fetchData } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBreweries: () => {
      return dispatch(fetchData())
    }
  }
}

export default connect(null, mapDispatchToProps)(DataButtonView)
