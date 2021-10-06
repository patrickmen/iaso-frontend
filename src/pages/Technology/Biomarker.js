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
  title: "",
  description:
    "",
  image: 'https://cdn.pharmcafe.com/platform-banner-01.jpg',
  imgText: 'head image description',
};

@connect(({ biomarker, loading }) => ({
  biomarker,
  loading: loading.models.biomarker,
}))

export default class Biomarker extends Component {
  state = {
    // markdown: [],
    currentLang: getLocale(),
  }
  componentDidMount() {
    // data.map((item) => {
    //   fetch(item)
    //     .then(res => res.text())
    //     .then(text => this.setState({markdown: [...this.state.markdown, text]}));
    // }) 
    const { dispatch } = this.props;
    dispatch({
      type: 'biomarker/fetch',
      payload: {
        lang: this.state.currentLang,
      },
    });   
  }

  render() {
    // const { markdown } = this.state;
    const {
      biomarker: { biomarker = [] },
      loading,
    } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <HeadFeaturedPost post={headFeaturedPost} />
        <Container maxWidth="lg">
          <main>
          { biomarker.length ? 
            <Grid container>
              { biomarker.map((post) => (
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