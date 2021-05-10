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

@connect(({ sbdd, loading }) => ({
  sbdd,
  loading: loading.models.sbdd,
}))

export default class SBDD extends Component {
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
      type: 'sbdd/fetch',
      payload: {
        lang: this.state.currentLang,
      },
    });   
  }

  render() {
    // const { markdown } = this.state;
    const {
      sbdd: { sbdd = [] },
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
          { sbdd.length ? 
            <Grid container>
              { sbdd.map((post) => (
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