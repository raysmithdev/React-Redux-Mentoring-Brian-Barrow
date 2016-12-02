import React from 'react'
import { Button } from 'semantic-ui-react'

const DataButtonView = ({ fetchBreweries }) => (
  <Button
    onClick={ () => fetchBreweries() }
    primary
  >
    Make an AJAX call
  </Button>
)

export default DataButtonView
