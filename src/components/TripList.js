import React from 'react';
import Trip from './Trip'

const TripList = (props) => {
  let allTrips
  if (props.trips && props.trips.length > 0){
    console.log(props.trips)
    allTrips = props.trips.map((trip, index)=> <Trip data={trip} key={index} handleDelete={props.handleDelete} {...props}/>)
  } else {
    allTrips = null
  }
  return(
    <div className="ui cards">
      {allTrips}
    </div>
  )
}

export default TripList
