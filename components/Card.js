import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const CardExampleCardProps = () => (
  <Card.Group itemsPerRow={3}>
    <Card
      image='https://www.dropbox.com/s/p3200dbv65mo9c4/IMGP4352.JPG?raw=1'
      header='Jay Liao'
      meta='Software Developer'
      description='Jay is a front end engineer living in Taiwan who enjoys playing guitar and hanging with his cat.'
      extra={extra}
      fluid
    />
   </Card.Group>  
)

export default CardExampleCardProps