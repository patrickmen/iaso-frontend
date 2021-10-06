import React, { Component } from 'react';
import { connect } from 'dva';
import Media from 'react-media';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ContactPC from './ContactPC';
import ContactMobile from './ContactMobile';
import HeadFeaturedPost from '@/components/Article/HeadFeaturedPost';

const headFeaturedPost = {
    title: "",
    description:
      "",
    image: 'https://cdn.pharmcafe.com/contact-banner-01.jpg',
    imgText: 'head image description',
};

class Contact extends Component {
  render() {
    const { isMobile } = this.props;
 
    return (
      <React.Fragment>
        <HeadFeaturedPost post={headFeaturedPost} />
        <Grid container component="main">
          <CssBaseline />
          {isMobile ? <ContactMobile /> : <ContactPC />}
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect(({ setting }) => ({
  setting,
}))(props => (
  <Media query="(max-width: 767px)">
    {isMobile => <Contact {...props} isMobile={isMobile} />}
  </Media>
));