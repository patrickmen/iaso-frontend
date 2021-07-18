import React, { Component } from 'react';
import { connect } from 'dva';
import { getLocale } from 'umi/locale';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import HeadFeaturedPost from '@/components/Article/HeadFeaturedPost';
import PictureAlignRight from '@/components/Article/PictureAlignRight';
import PictureAlignLeft from '@/components/Article/PictureAlignLeft';
import PictureAlignJustify from '@/components/Article/PictureAlignJustify';
import Exception404 from '@/pages/ExceptionBeta/E404';

const headFeaturedPost = {
  title: 'MEET LOFLY BIO',
  description:
    "A Biopharmaceutical company, devoted to help the general public and investors better.",
  image: 'https://cdn.pharmcafe.com/partnering-banner-01.jpg',
  imgText: 'head image description',
};

@connect(({ partnering, loading }) => ({
  partnering,
  loading: loading.models.partnering,
}))

export default class Partnering extends Component {
  state = {
    currentLang: getLocale(),
  }
  componentDidMount() { 
    const { dispatch } = this.props;
    dispatch({
      type: 'partnering/fetch',
      payload: {
        lang: this.state.currentLang,
      },
    });   
  }

  render() {
    const {
      partnering: { partnering = [] },
      loading,
    } = this.props;
 
    return (
      <React.Fragment>
        <CssBaseline />
        <HeadFeaturedPost post={headFeaturedPost} />
        <Container maxWidth="lg">
          <main>
          { partnering.length ? 
            <Grid container>
              { partnering.map((post) => (
                <div key={JSON.parse(post.content).substring(0, 40)}>
                  {post.align == "right" ? <PictureAlignRight post={post} /> : post.align == "left" ? <PictureAlignLeft post={post} /> : <PictureAlignJustify post={post} />}
                </div> 
              ))}
            </Grid> : <Exception404/> 
          }
          </main>
        </Container>
      </React.Fragment>
    );
  }
}