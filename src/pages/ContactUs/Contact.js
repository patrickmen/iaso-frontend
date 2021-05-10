import React, {Component} from 'react';
import { message } from 'antd';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/styles/withStyles";
import { makeStyles } from '@material-ui/core/styles';
import { formatMessage } from 'umi/locale';
import { submitContact, errorAnalysis } from '@/services';

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '-2px',
    marginBottom: '-30px',
  },
  root: {
    marginTop: '-2px',
    marginBottom: '-30px',
    backgroundColor: '#eff2f5',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
    backgroundColor: '#9cc844',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const handleValid = async(e) => {
    let isValid = true;
    let isLack = false;
    for (let value in values) {
      if (values[value] === '' || values[value] === null) {
        isValid = false;
        isLack = true;
      }
      if (value == "email" && values[value]) {
        let atpos = values[value].indexOf("@");
        let dotpos = values[value].lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= values[value].length){
          message.error(formatMessage({ id: 'app.contact-us.invalid-email' }));
          isValid = false;
        }
      }
      if (value == "phone" && values[value]) {
        let reg = /^[1-9]\d*$/; 
        if(!reg.test(values[value]) || values[value].length > 11 || values[value].length < 5) {
          message.error(formatMessage({ id: 'app.contact-us.invalid-phone' })); 
          isValid = false;
        } 
      }
      if (!isValid) {
        break
      }
    }
    if (!isLack) {
      e.preventDefault()
      if (isValid) {
        const response = await submitContact(values);
        document.getElementById("form").reset();
        if (response.data) {
          message.success(formatMessage({ id: 'app.contact-us.submit-success' }));
        } else if (response.response) {
          let error = errorAnalysis(response.response);
          if(error.status == 409) {
            message.warning(formatMessage({ id: 'app.contact-us.duplicated-submit' }));
          } else {
            message.error(error.msg);
          }
        }
      }
    }
  };
  
  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={7} component={Paper} elevation={6} square className={classes.root}>
        <Grid item xs={8}>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              { formatMessage({ id: 'app.contact-us.title' }) }
            </Typography>
            <form className={classes.form} id="form" method="post">
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label={ formatMessage({ id: 'app.contact-us.name' }) }
                name="name"
                onChange={handleChange("name")}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={ formatMessage({ id: 'app.contact-us.email' }) }
                name="email"
                autoFocus
                onChange={handleChange("email")}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phone"
                label={ formatMessage({ id: 'app.contact-us.phone' }) }
                id="phone"
                onChange={handleChange("phone")}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="message"
                label={ formatMessage({ id: 'app.contact-us.message' }) }
                id="message"
                onChange={handleChange("message")}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleValid}
              >
                { formatMessage({ id: 'app.contact-us.submit' }) }
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={5} className={classes.image} />
    </Grid>
  );
}