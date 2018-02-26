import React from 'react';
import ReactDOM from 'react-dom';
import Events from './events.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const SearchPage = (props) => {

  let activeCity = props.state.trips[props.state.activeTrip.index].city;

  const updateCity = (event, index, value) => {
    if (value) {
      props.actions.activateTrip(index - 1);
    } else {
      props.actions.updateCity(event.target.value)
    }
  }

  const updateEventQuery = (event) => {
    props.actions.updateEventQuery(event.target.value)
  };

  const submit = (event) => {
    event.preventDefault();
    if (props.state.city !== '') {
      props.actions.makeNewTrip(props.state.username, props.state.city, props.state.trips.length)
    }
  };

  const submitEventQuery = (event) => {
    event.preventDefault();
    if (props.state.activeTrip.status) {
      props.actions.searchEvents(activeCity, props.state.eventQuery)
    } else {
      window.alert('Please select a city for your trip first!');
    }
  };

  let message = '';
  let messageEvents = '';
  if (!props.state.activeTrip.status) {
    message = 'Pick a city for your trip!';
    messageEvents = 'First pick a city before searching events!';
  } else {
    message = `You\'re going to ${activeCity}! \n Or plan a different trip: `; 
    messageEvents = `Type a keyword to find events in ${activeCity}!`;
  }

  let showEvents = '';

  if(props.state.eventResults.length !==0) {
    showEvents = <Events 
      events={props.state.eventResults}
      addEventToTrip={props.actions.addEventToTrip}
      user={props.state.username}
      city={activeCity}
      />
  }

  let tripIndex = 0;

  const dropdown = () => {
    if(props.state.authenticated && props.state.trips.length > 0) {
      return (
        <DropDownMenu value={tripIndex} onChange = {updateCity}> 
          <MenuItem value={null} primaryText='' />
          {props.state.trips.map((trip, index) => <MenuItem key = {index} value = {trip.city} primaryText = {trip.city}/>)}
        </DropDownMenu>
      );
    }
  }

  const updateFromDate = (event) => {
    console.log('from date changed', event.target.value);
  }

  const updateToDate = (event) => {
    console.log('to date changed', event.target.value);
  }

  return (
    <Paper>
      <Link to= 'trips'> UserPage </Link>
      <Paper>

        <form>
          From <input id='date' type='date' onChange={updateFromDate} /> to <input id='date' type='date' onChange={updateToDate} />
        </form>

        {message}
        <form onSubmit = {submit}>
          <TextField id = 'city' onChange = {updateCity}/>
          <RaisedButton onClick={submit} label='Create Trip'/>
          {dropdown()}
        </form>
        {messageEvents}
        <form onSubmit = {submitEventQuery}>
          <TextField id = 'event' onChange = {updateEventQuery}/>
          <RaisedButton onClick={submitEventQuery} label='Search events for your trip!'/>
        </form>
      </Paper>
      
      <Paper>
        {showEvents}
      </Paper>
    </Paper>
  )
}


const mapStateToProps = state => (
  { state: state }
);

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(actions, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

