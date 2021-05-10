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
          { partnering.length ? 
            <Grid container>
              { partnering.map((post) => (
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