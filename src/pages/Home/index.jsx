import React from 'react';
import { enquireScreen } from 'enquire-js';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Banner from './Banner';
import Content0 from './Content0';
import Content3 from './Content3';
// import Content1 from './Content1';
// import Teams from './Teams';

import {
  BannerData,
  Content0Data,
  Content3Data,
  // Content1Data,
  // TeamsData,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner
        id="Banner"
        key="Banner"
        dataSource={BannerData}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0"
        key="Content0"
        dataSource={Content0Data}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3"
        key="Content3"
        dataSource={Content3Data}
        isMobile={this.state.isMobile}
      />,
      // <Content1
      //   id="Content1"
      //   key="Content1"
      //   dataSource={Content1Data}
      //   isMobile={this.state.isMobile}
      // />,
      // <Teams
      //   id="Teams"
      //   key="Teams"
      //   dataSource={TeamsData}
      //   isMobile={this.state.isMobile}
      // />,
    ];
    return (
      // <GridContent>
        <div
          // className="templates-wrapper"
          ref={(d) => {
            this.dom = d;
          }}
        >
          {/* 如果不是 dva 2.0 替换成 {children} start */}
          {this.state.show && children}
          {/* 如果不是 dva 2.0 替换成 {children} end */}
        </div>
      // </GridContent> 
    );
  }
}
