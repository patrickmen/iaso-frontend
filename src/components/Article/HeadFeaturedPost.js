import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Texty from 'rc-texty';

const useStyles = makeStyles((theme) => ({
  headFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: 0,
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  headFeaturedNoPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: 0,
    paddingBottom: theme.spacing(30),
    marginBottom: theme.spacing(2),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  headFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function HeadFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    post.title ?
    <Paper className={classes.headFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={10}>
          <div className={classes.headFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              <Texty>{post.title}</Texty>
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              <Texty>{post.description}</Texty>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper> :
    <Paper className={classes.headFeaturedNoPost} style={{ backgroundImage: `url(${post.image})` }}>
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
    </Paper>
  );
}

HeadFeaturedPost.propTypes = {
  post: PropTypes.object,
};