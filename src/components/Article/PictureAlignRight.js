import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import styles from './index.less';

export default function PictureAlignRight(props) {
  const { post } = props;
  return (
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={6}>
          <ReactMarkdown
            className={classNames(styles.markdown, "markdown-body")}
            source={JSON.parse(post.content)}
            escapeHtml={true}
          />
        </Grid>
        <Grid item xs={5}>
          <div className={styles.image}>
            {post.image.split(",").map((item) => (
              <div>
                <img alt={item} src={item} /> 
                <br />
                <br />
              </div>
            ))}
          </div> 
        </Grid>
      </Grid>
  )
}

PictureAlignRight.propTypes = {
    post: PropTypes.object,
  };