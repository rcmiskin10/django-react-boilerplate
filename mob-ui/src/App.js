import React, { Component } from 'react';
import {compose} from 'recompose'
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import withWidth from '@material-ui/core/withWidth';
import {auth} from "./actions";
import mobApp from "./reducers";
// import NotFound from "./NotFound";

import Main from "./main/main_container";
import NavBar from "./_components/navbar_component";
import Login from "./main/login_container";

import EventDashboard from "./events/event_dashboard_container";
// import ParticipantDashboard from "./participants/ParticipantDashboard";
// import BusinessDashboard from "./businesses/BusinessDashboard";
// import AdminDashboard from "./admin/AdminDashboard";
// import BusinessSignup from "./businesses/BusinessSignup";
// import ParticipantSignup from "./participants/ParticipantSignup";
// import EventSignup from "./events/EventSignup";

// import LeftDrawer from "./components/LeftDrawer";
// import BusinessProfileCreate from './businesses/BusinessProfileCreate';
// import EventDashboardCreate from './events/EventDashboardCreate'
// import EventDashboardMessages from './events/EventDashboardMessages'
// import EventDashboardSettings from './events/EventDashboardSettings'

let store = createStore(mobApp, applyMiddleware(thunk));


export class RootContainerComponent extends Component {
  state = {
    
  }

  componentDidMount() {
    this.props.loadUser();
    
      document.body.style.backgroundColor = 'white'// Set the style
    
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }))
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  PrivateParticipantRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else if (this.props.auth.user.user_type===2){
        return <Redirect to="/business/dashboard" />;
      } else if (this.props.auth.user.user_type===3){
        return <Redirect to="/event/dashboard" />;
      } else if (this.props.auth.user.user_type===4){
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  PrivateEventRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else if (this.props.auth.user.user_type===1){
        return <Redirect to="/participant/dashboard" />;
      } else if (this.props.auth.user.user_type===2){
        return <Redirect to="/business/dashboard" />;
      } else if (this.props.auth.user.user_type===4){
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  PrivateBusinessRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else if (this.props.auth.user.user_type===1){
        return <Redirect to="/participant/dashboard" />;
      } else if (this.props.auth.user.user_type===3){
        return <Redirect to="/event/dashboard" />;
      } else if (this.props.auth.user.user_type===4){
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  PrivateAdminRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else if (this.props.auth.user.user_type===1){
        return <Redirect to="/participant/dashboard" />;
      } else if (this.props.auth.user.user_type===3){
        return <Redirect to="/event/dashboard" />;
      } else if (this.props.auth.user.user_type===2){
        return <Redirect to="/business/dashboard" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  render() {
    let PrivateEventRoute = this.PrivateEventRoute;

    const mainContainer = {
      margin:50,
      paddingTop:50
    }
    
    return (
      <div>
        
        <BrowserRouter>
          <div>
          <NavBar/>
            <div style={mainContainer}>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <PrivateEventRoute exact path="/event/dashboard" component={EventDashboard} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    },
    
  }
}

let RootContainer = compose(
  withWidth(),connect(mapStateToProps, mapDispatchToProps))(RootContainerComponent);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}