const initialState = {
  username: '', 
  password: '', 
  authenticated: false, 
  currentError: '', 
  city: '',
  trips: [],
  activeTrip: {
      status: false,
      city: ''
    }
}; //will need to be updated as needed

const reducer = function (state = initialState, action) {  //if state is undefined, state becomes inital state

  switch (action.type) {
    case 'SHOW_TRIPS' :
      return Object.assign({}, state, {trips: action.payload})
    case 'UPDATE_USERNAME':
      return Object.assign({}, state, {username: action.payload})
    case 'UPDATE_PASSWORD':
      return Object.assign({}, state, {password: action.payload})
    case 'AUTHEN' :
      return Object.assign({}, state, { authenticated: true });  
    case 'UPDATE_CITY' :
      return Object.assign({}, state, {city: action.payload})
    case 'SET_TRIP' :
      return Object.assign({}, state, {activeTrip: {status: true, city: action.payload}})
    case 'ERROR' :
      return Object.assign({}, state, { currentError: action.payload})
    default:
      return state;  //if unrecognized action type nothing happens
  }
}

export default reducer;


/*
EXAMPLE

* action/index.js
*
* exports const newThing = (thing) => ({type: NEW_THING, thing: thing});
*

const initialState = { thing: 0 };

const reducer = function (state = initialState, action) {  //if state is undefined, state becomes inital state
                                                          //action is the object returned by a function in the actions/index.js file

  switch (action.type) {
    // case 'NEW_THING':
    //   return Object.assign(state, {thing : action.thing}) //makes a new state object with thing property overwritten

    default:
      return state;  //if unrecognized action type nothing happens
  }
}
*/