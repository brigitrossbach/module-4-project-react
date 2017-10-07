import React, { Component } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm'
import LogInForm from './components/LogInForm'
import NewTripForm from './components/NewTripForm'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import ProfileContainer from './components/ProfileContainer'
import Authorize from './components/Authorize'
import Welcome from './components/Welcome'

class App extends Component {

  state={
    test_username: 'test_user',
    test_password: 'password'
  }

  render() {

    const AuthProfileContainer = Authorize(ProfileContainer)
    const AuthNewTripForm = Authorize(NewTripForm)
    return (
      <div className="App">
       <Route path='/' render={(props) => <NavBar {...props} />} />
       <Route exact path='' component={Welcome} />
       <div className="ui container">
         <Route exact path='/users/new' render={(props) => <NewUserForm {...props} />} />
         <Route exact path='/login' render={(props) => <LogInForm {...props} />} />
         <Route exact path='/login/demo' render={(props) => <LogInForm {...props} username= {this.state.test_username} password= {this.state.test_password} />}/>
         <Route exact path='/trips/new' render={(props) => <AuthNewTripForm {...props}/>} />
         <Route path='/me' render={(props) => <AuthProfileContainer {...props} />} />
       </div>
      </div>
    );
  }
}

export default App;
