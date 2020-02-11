import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const renderTextField = (
    { input, label, meta: { touched, error } },
) => (
        <TextField
            label={label}
            fullWidth
            variant="outlined"
            {...input}
        />
    );

const UserForm = props => {

    const onSubmit = (formValues) => {
        props.onSubmit(formValues)

    }
    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
    const useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Field
                                    component={renderTextField}
                                    name="first_name"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Field
                                    component={renderTextField}
                                    name="last_name"
                                    label="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    component={renderTextField}
                                    name="email"
                                    label="Email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    component={renderTextField}
                                    name="pwd"
                                    label="PassWord"
                                />
                            </Grid>
                        </Grid>
                        <Button style={{marginTop: 15 + 'px'}} color="primary" variant="contained" type="submit">Submit</Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>


        </form>
    )


}

export default reduxForm({
    form: 'userForm'
})(UserForm)