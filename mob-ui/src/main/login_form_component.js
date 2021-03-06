import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
      },
    input: {
        margin: 10
    },
    loginButton: {
        margin:10,
        backgroundColor: '#00867d'
    },
    text: {
        marginLeft: 20,
        color: 'white',
        
    },
    errorText: {
        marginLeft: 20,
        color: 'red',
        
    },
};

const LoginForm = (props) => {

  const { classes } = props;
  return (
    <div>
        <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12} >
                <Typography align='center' className={classes.text} variant="h6" color="inherit">
                    Login
                </Typography>
                {props.errors.filter(e => e.field === 'non_field_errors').length > 0 && (
                    <Typography align='center' className={classes.errorText} color="inherit">
                    {props.errors.filter(e => e.field === 'non_field_errors')[0].message[0]}
                    </Typography>
                )}
            </Grid>
        </Grid>  
        <Grid container justify="center" spacing={16}>
            <Grid item lg={3} md={3} sm={6} xs={12} >
                <TextField
                    value={props.email}
                    placeholder="Email"
                    onChange={(e) => props.handleChange(e)}
                    name="email"
                    className={classes.input}
                    fullWidth={true}
                    error={props.errors.filter(e => e.field === 'email').length > 0}
                    autoComplete="off"
                />
                {props.errors.filter(e => e.field === 'email').length > 0 && (
                    <Typography align='center' className={classes.errorText} color="inherit">
                    {props.errors.filter(e => e.field === 'email')[0].message[0]}
                    </Typography>
                )}
            </Grid>
        </Grid>
        <Grid container justify="center" spacing={16}>
            <Grid item lg={3} md={6} sm={6} xs={12} >
                <TextField
                    value={props.password}
                    placeholder="Password"
                    onChange={(e) => props.handleChange(e)}
                    type="password"
                    name="password"
                    className={classes.input}
                    fullWidth={true}
                    error={props.errors.filter(e => e.field === 'password').length > 0}
                    autoComplete="off"
                />
                {props.errors.filter(e => e.field === 'password').length > 0 && (
                    <Typography align='center' className={classes.errorText} color="inherit">
                    {props.errors.filter(e => e.field === 'password')[0].message[0]}
                    </Typography>
                )}
            </Grid>
        </Grid>
        <Grid container justify="center" spacing={16}>
            <Grid item lg={3} md={6} sm={6} xs={12} >
                <Button fullWidth={true} className={classes.loginButton} onClick={(e) => props.handleFormSubmit(e)} variant="contained" color="primary">
                    Login
                </Button>
            </Grid>
        </Grid>
    </div>  
  )
}


LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);