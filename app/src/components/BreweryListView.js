import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const BreweryListView = ({ breweries }) => (
  <Card.Group>
    {breweries.map(b => (
      <Card key={b.id}>
        <Card.Content>
          <Image floated='right' size='mini' src={b.images ? b.images.icon : ''} />
          <Card.Header>
            {b.name}
          </Card.Header>
          <Card.Meta>
            {b.website}
          </Card.Meta>
          <Card.Description>
            {b.description}
          </Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
)

export default BreweryListView
