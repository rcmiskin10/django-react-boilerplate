import React, { Component } from 'react';

import {connect} from 'react-redux';
import {compose} from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const styles = {
  title : {
    margin: 10,
    color: "white"
  }
}

class EventDashboard extends Component {
  state = {
    user: this.props.user.user_type
  }

  componentDidMount(){
    document.body.style.backgroundColor = '#4db6ac'// Set the style
    
  }

  render() {
    
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Typography style={{color:'white'}} variant="subheading" gutterBottom>
                    Event / Dashboard
                </Typography>
                <Divider/>
            </Grid>
        </Grid>
    )
  }
}

EventDashboard.propTypes = {
  
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    
  };
}

const mapDispatchToProps = dispatch => {
  return {
    
  };
}

export default compose(
  withStyles(styles, {
  name: 'EventDashboard',
}), withWidth(),connect(mapStateToProps, mapDispatchToProps))(EventDashboard);