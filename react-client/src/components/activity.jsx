import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton/';

let Activity = (props) => {
  let cardStyle = {};
  if (props.sidebar) {
    cardStyle = { textAlign: 'left', margin: '5px'};
  } else {
    cardStyle = { textAlign: 'left', margin: '5px', width: '300px' };
  }

  
  if (props.type === 'event') {
    return (
      <Card style={cardStyle}> 
        <CardHeader title = {props.activity.name} subtitle = 'Event' />
        <CardMedia src = {props.activity.logo} alt =''>
        </CardMedia>
        <CardText>
        Event
          We don't save much detail rn
          {props.activity.date}?
          {props.activity.details}?
        </CardText>
        <CardActions>
          <FlatButton onClick={() => props.delete(props.activity, props.user, props.city)} label='Remove' />
        </CardActions>
      </Card>
    );

  } else {  //is eatin
    return (
      <Card style={cardStyle}>
        <CardHeader title={props.activity.name} subtitle='Food' />
        <CardMedia src={props.activity.featured_image} alt=''>
        </CardMedia>
        <CardText>
        Food
          We don't save much detail rn
          {props.activity.address}?
          {props.activity.details}?
        </CardText>
        <CardActions>
          <FlatButton onClick= {() => props.delete(props.activity,props.user,props.city)} label = 'Remove' />
        </CardActions>
      </Card>
    );
  }
}

export default Activity;