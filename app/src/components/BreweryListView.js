import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const BreweryListView = ({ breweries }) => (
  <div>
    {breweries.map((brewery, index) => (
      <Card key={index}>
        <Image src={brewery.images ? brewery.images.squareMedium : ''} />
        <Card.Content>
          <Card.Header>
            {brewery.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {brewery.established}
            </span>
          </Card.Meta>
          <Card.Description>
            {brewery.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='beer' />
            {brewery.status}
          </a>
        </Card.Content>
      </Card>
    ))}
  </div>
)

export default BreweryListView
