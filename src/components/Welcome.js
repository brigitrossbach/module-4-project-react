import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
  render(){
    return(
      <div>
      <h1>Welcome to the TripTracker</h1>
      <h2>Please <Link to='/login'>login</Link> or <Link to='/users/new'>sign up</Link></h2>
      <h3>Demo</h3>
      Username: test_user <br />
      Password: password
      </div>
    )
  }
}

export default Welcome
