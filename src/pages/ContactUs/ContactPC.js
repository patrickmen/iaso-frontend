import React, { Component } from 'react';
import { message, Input } from 'antd';
import ReactMarkdown from 'react-markdown';
import "github-markdown-css";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { formatMessage, getLocale } from 'umi/locale';
import { submitContact, errorAnalysis } from '@/services';

const useStyles = makeStyles((theme) => ({
  image: {
    height: '600px',
    backgroundImage: 
      getLocale() === 'zh-CN' ? 'url(https://cdn.pharmcafe.com/contact-map-01.png)' : 'url(https://cdn.pharmcafe.com/contact-map-02.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#eff2f5',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    marginLeft: '10px',
  },
  root: {
    marginTop: '-14px',
    marginBottom: '-30px',
    backgroundColor: '#eff2f5',
  },
  paper: {
    margin: theme.spacing(8, 4, -4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  addition: {
    margin: theme.spacing(-10, 1, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
    backgroundColor: '#61bcca',
  },
}));

export default function ContactPC() {
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
    <Grid item xs={12} component={Paper} elevation={6} square className={classes.root}>
      <Grid container justifyContent="center" spacing={10}>
        <Grid item xs={5}>
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
                rows={5}
                multiline
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
        <Grid item xs={6}>
          <div className={classes.image} />
          <div className={classes.addition}>
            <ReactMarkdown
              className="markdown-body"
              source={ formatMessage({ id: 'app.contact-us.addition-name' }) }
              escapeHtml={true}
            /> 
            <ReactMarkdown
              className="markdown-body"
              source={ formatMessage({ id: 'app.contact-us.addition-office' }) }
              escapeHtml={true}
            /> 
            <ReactMarkdown
              className="markdown-body"
              source={ formatMessage({ id: 'app.contact-us.addition-phone' }) }
              escapeHtml={true}
            /> 
            <ReactMarkdown
              className="markdown-body"
              source={ formatMessage({ id: 'app.contact-us.addition-email' }) }
              escapeHtml={true}
            /> 
          </div>
        </Grid>
      </Grid>
    </Grid>  
  );
}