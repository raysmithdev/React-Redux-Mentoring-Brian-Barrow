import { connect } from 'react-redux'
import BreweryListView from '../components/BreweryListView'

const mapStateToProps = (state) => {
  return {
    breweries: state.brewery.breweries
  }
}

export default connect(mapStateToProps, null)(BreweryListView)
