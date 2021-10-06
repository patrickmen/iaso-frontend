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
import NewsList from './News';

const headFeaturedPost = {
  title: "",
  description:
    "",
  image: 'https://cdn.pharmcafe.com/news-banner-01.jpg',
  imgText: 'head image description',
};

@connect(({ news, loading }) => ({
  news,
  loading: loading.models.news,
}))

export default class NewDetail extends Component {
  state = {
    currentLang: getLocale(),
  }
  componentDidMount() {
    let title = this.props.computedMatch.params.title;
    const { dispatch } = this.props;
    dispatch({
      type: 'news/fetch',
      payload: {
        title: title,
        lang: this.state.currentLang,
      },
    });    
  }

  render() {
    const {
      news: { news = [] },
      loading,
    } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <HeadFeaturedPost post={headFeaturedPost} />
        <Container maxWidth="lg">
          <main>
            { news.length ? 
              <Grid container>
                { news.map((post) => (
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
