import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1,
      },
    text: {
        marginLeft: 20,
        color: 'white',
        
    }
};

class Main extends Component {
  state = {
  }
  
  componentDidMount(){
    // document.body.style.backgroundColor = '#4db6ac'// Set the style
  }
  render() {
    const { classes } = this.props;
    return (
        
        <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12} >
                <Typography align='center' className={classes.text} variant="h6" color="inherit">
                    Welcome to Mobsteer
                </Typography>
                
            </Grid>
        </Grid>  
        
        
    )
  }
}
Main.propTypes = {
    classes: PropTypes.object.isRequired,
    
  };
export default withStyles(styles)(Main);