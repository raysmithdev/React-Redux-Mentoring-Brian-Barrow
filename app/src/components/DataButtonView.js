import React from 'react'
import { Button } from 'semantic-ui-react'

const DataButtonView = ({ fetchBreweries }) => (
  <Button
    onClick={ () => fetchBreweries() }
    primary
  >
    Show me some breweries
  </Button>
)

export default DataButtonView
