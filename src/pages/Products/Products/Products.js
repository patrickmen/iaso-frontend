import React, { PureComponent, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getLocale } from 'umi/locale';
import { connect } from 'dva';
import { Card, List, Button, Icon } from 'antd';

import Ellipsis from '@/components/Ellipsis';
import HeadFeaturedPost from '@/components/Article/HeadFeaturedPost';
import styles from './Products.less';

const pageSize = 5;

@connect(({ products, loading }) => ({
  products,
  loading: loading.models.products,
}))

class ProductsList extends PureComponent {
  state = {
    currentLang: getLocale(),
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/fetch',
      payload: {
        lang: this.state.currentLang,
      },
    });
  };

  fetchMore = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/appendFetch',
      payload: {
        count: pageSize,
      },
    });
  };

  render() {
    const {
      products: { products = [] },
      loading,
    } = this.props;

    const headFeaturedPost = {
      title: 'Products',
      description:
        "Welcome to browse and view.",
      image: 'https://source.unsplash.com/random',
      imgText: 'head image description',
    };

    const loadMore =
      products.length > 0 ? (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Button onClick={this.fetchMore} style={{ paddingLeft: 48, paddingRight: 48 }}>
            {loading ? (
              <span>
                <Icon type="loading" /> 加载中...
              </span>
            ) : (
              '加载更多'
            )}
          </Button>
        </div>
      ) : null;

    const cardList = products ? (
      <List
        rowKey="id"
        loading={loading}
        loadMore={loadMore}
        grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <Card
              className={styles.card}
              hoverable
              cover={<img alt={item.title} src={item.cover} />}
              onClick={() => {this.props.history.push(`/products/products/${item.title}`)}}
            >
              <Card.Meta
                title={<a>{item.title}</a>}
                description={<Ellipsis lines={2}>{item.subDescription}</Ellipsis>}
              />
            </Card>
          </List.Item>
        )}
      />
    ) : null;

    return (
      <Fragment>
        <CssBaseline />
        <div>
          <HeadFeaturedPost post={headFeaturedPost} />
        </div>
        <Card
          bordered={false}
          bodyStyle={{ padding: '8px 8px 30px 42px' }}
        >
          <div className={styles.coverCardList}>  
            <div className={styles.cardList}>{cardList}</div>
          </div>
        </Card>    
      </Fragment>
    );
  }
}

export default ProductsList;
