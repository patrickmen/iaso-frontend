import React from 'react';
import { Button } from 'antd';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import { withRouter } from 'react-router-dom';
import { isImg } from './utils';
import 'rc-banner-anim/assets/index.css';

const { BgElement } = Element;
@withRouter
class Banner extends React.PureComponent {
  
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const { bg, textWrapper, title, content, button, href } = item;
      return (
        
        <Element key={i.toString()} {...elem} prefixCls={elemClassName}>
          <BgElement key="bg" {...bg}  />
          <a href={href}>
            <QueueAnim
              type={['bottom', 'top']}
              delay={200}
              key="text"
              {...textWrapper}
            >
              <div key="logo" {...title}>
                {typeof title.children === 'string' &&
                title.children.match(isImg) ? (
                  <img src={title.children} width="100%" alt="img" />
                ) : (
                  title.children
                )}
              </div>
              <div key="content" {...content}>
                {content.children}
              </div>
              {/* <Button ghost key="button" {...button}>
                {button.children}
              </Button> */}
            </QueueAnim>
          </a>
        </Element>
        
      );
    });
    return (
      <div {...props} {...dataSource.wrapper}>
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className="banner-wrapper" key="wrapper">
            <BannerAnim key="BannerAnim" {...dataSource.BannerAnim}>
              {childrenToRender}
            </BannerAnim>
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}

export default Banner;
