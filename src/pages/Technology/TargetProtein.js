import React, { Component } from 'react';
import { connect } from 'dva';
import { getLocale } from 'umi/locale';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import HeadFeaturedPost from '@/components/Article/HeadFeaturedPost';
import Exception404 from '@/pages/ExceptionBeta/E404';

@connect(({ targetProtein, loading }) => ({
  targetProtein,
  loading: loading.models.targetProtein,
}))

export default class TargetProtein extends Component {
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
      type: 'targetProtein/fetch',
      payload: {
        lang: this.state.currentLang,
      },
    });   
  }

  render() {
    // const { markdown } = this.state;
    const {
      targetProtein: { targetProtein = [] },
      loading,
    } = this.props;

    const headFeaturedPost = {
      title: 'MEET LOFLY BIO',
      description:
        "A Biopharmaceutical company, devoted to help the general public and investors better.",
      image: 'https://source.unsplash.com/random',
      imgText: 'head image description',
    };
 
    return (
      <React.Fragment>
        <CssBaseline />
        <div>
          <HeadFeaturedPost post={headFeaturedPost} />
        </div>
        <Container maxWidth="lg">
          <main>
          { targetProtein.length ? 
            <Grid container>
              { targetProtein.map((post) => (
                <div key={JSON.parse(post.content).substring(0, 40)}>
                  <ReactMarkdown
                    className="markdown-body"
                    source={JSON.parse(post.content)}
                    escapeHtml={false}
                  />
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