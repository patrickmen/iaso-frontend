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

@connect(({ careers, loading }) => ({
  careers,
  loading: loading.models.careers,
}))

export default class Careers extends Component {
  state = {
    currentLang: getLocale(),
  }
  componentDidMount() { 
    const { dispatch } = this.props;
    dispatch({
      type: 'careers/fetch',
      payload: {
        lang: this.state.currentLang,
      },
    });   
  }

  render() {
    const {
      careers: { careers = [] },
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
          { careers.length ? 
            <Grid container>
              { careers.map((post) => (
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