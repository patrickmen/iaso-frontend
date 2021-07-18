import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { formatMessage, getLocale } from 'umi/locale';
import CssBaseline from '@material-ui/core/CssBaseline';
import Ellipsis from '@/components/Ellipsis';
import { Card, List, Button, Icon } from 'antd';
import HeadFeaturedPost from '@/components/Article/HeadFeaturedPost';
import styles from './News.less';

const headFeaturedPost = {
  title: 'MEET LOFLY BIO',
  description:
    "A Biopharmaceutical company, devoted to help the general public and investors better.",
  image: 'https://cdn.pharmcafe.com/news-banner-01.jpg',
  imgText: 'head image description',
};

@connect(({ news, loading }) => ({
  news,
  loading: loading.models.news,
}))

class NewsList extends Component {
  state = {
    currentLang: getLocale(),
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'news/fetch',
      payload: {
        lang: this.state.currentLang,
      },
    });
  };

  // fetchMore = () => {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'news/appendFetch',
  //     payload: {
  //       count: pageSize,
  //     },
  //   });
  // };

  render() {
    const {
      news: { news = [] },
      loading,
    } = this.props;

    const ArticleListContent = ({ data: { description, title, createdAt, updatedAt} }) => (
      <div className={styles.listContent}>
        <div className={styles.title}>
          {title}
        </div>
        {/* <div className={styles.description}>
          {description.substring(0, 500)}...
        </div> */}
        {<Ellipsis lines={3}>{description}</Ellipsis>}
        <div className={styles.extra}>
          {formatMessage({ id: 'app.news.created-at' })}
          <em>{moment(createdAt).add(8, 'hours').format('YYYY-MM-DD HH:mm')}</em>
          &nbsp;&nbsp;&nbsp;{formatMessage({ id: 'app.news.updated-at' })}
          <em>{moment(updatedAt).add(8, 'hours').format('YYYY-MM-DD HH:mm')}</em>
          <Button type="link" onClick={() => this.props.history.push(`/news/${title}`)}>&nbsp;&nbsp;&nbsp;{formatMessage({ id: 'app.news.read-more' })}</Button>
        </div>
      </div>
    );

    // const loadMore =
    //   news.length > 0 ? (
    //     <div style={{ textAlign: 'center', marginTop: 16 }}>
    //       <Button onClick={this.fetchMore} style={{ paddingLeft: 48, paddingRight: 48 }}>
    //         {loading ? (
    //           <span>
    //             <Icon type="loading" /> 加载中...
    //           </span>
    //         ) : (
    //           '加载更多'
    //         )}
    //       </Button>
    //     </div>
    //   ) : null;

    return (
      <Fragment>
        <CssBaseline />
        <HeadFeaturedPost post={headFeaturedPost} />
        <Card
          bordered={false}
          bodyStyle={{ padding: '8px 8px 8px 68px', background: '#eff2f5' }}
        >
          <List
            size="large"
            key="news"
            loading={news.length === 0 ? loading : false}
            // loadMore={loadMore}
            rowKey="id"
            itemLayout="vertical"
            dataSource={news}
            renderItem={item => (
              <List.Item
                key={item.id}
                extra={<div className={styles.listItemExtra} />}
              >
                {/* <List.Item.Meta
                  title={
                    <a className={styles.listItemMetaTitle} href={`/news/${item.title}`}>
                      {item.title}
                    </a>
                  }
                /> */}
                <ArticleListContent data={item} />
              </List.Item>
            )}
          />
        </Card>
      </Fragment>
    );
  }
}

export default NewsList;
