import React from 'react';
import { formatMessage } from 'umi/locale';

export const BannerData = {
  wrapper: { className: 'banner' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner-content',
          children: formatMessage({ id: 'app.home.banner.content' }),
        },
        button: { className: 'banner-button', href: '/about-us', children: formatMessage({ id: 'app.home.banner.button' }) },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner-content',
          children: formatMessage({ id: 'app.home.banner.content' }),
        },
        button: { className: 'banner-button', href: '/about-us', children: formatMessage({ id: 'app.home.banner.button' }) },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner-text-wrapper' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner-title',
          // children:
          //   'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner-content',
          children: formatMessage({ id: 'app.home.banner.content' }),
        },
        button: { className: 'banner-button', href: '/about-us', children: formatMessage({ id: 'app.home.banner.button' }) },
      },
    ],
    type: ['across'],
    autoPlay: true,
    className: 'kmevu1fsb2-editor_css',
  },
};
export const Content0Data = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: formatMessage({ id: 'app.home.content0.title' }) }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: formatMessage({ id: 'app.home.content0.subtitle0' }),
            },
            { name: 'content', children: formatMessage({ id: 'app.home.content0.subcontent0' }) },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: formatMessage({ id: 'app.home.content0.subtitle1' }),
            },
            {
              name: 'content',
              children: formatMessage({ id: 'app.home.content0.subcontent1' }),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: formatMessage({ id: 'app.home.content0.subtitle2' }),
            },
            {
              name: 'content',
              children: formatMessage({ id: 'app.home.content0.subcontent2' }),
            },
          ],
        },
      },
    ],
  },
};
export const Content1Data = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  page: { className: 'home-page content1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: formatMessage({ id: 'app.home.content1.title' }),
        className: 'title-h1',
      },
    ],
  },
  video: {
    className: 'content1-video',
    children: {
      video: 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4',
    },
  },
};
export const TeamsData = {
  wrapper: { className: 'home-page-wrapper teams-wrapper' },
  page: { className: 'home-page teams' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: formatMessage({ id: 'app.home.content2.title' }) }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams-title', children: formatMessage({ id: 'app.home.content2.subtitle0' }) },
            {
              name: 'content0',
              className: 'teams-job',
              children: formatMessage({ id: 'app.home.content2.subcontent00' }),
            },
            {
              name: 'content1',
              className: 'teams-content',
              children:
              formatMessage({ id: 'app.home.content2.subcontent01' }),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams-title', children: formatMessage({ id: 'app.home.content2.subtitle1' }) },
            {
              name: 'content0',
              className: 'teams-job',
              children: formatMessage({ id: 'app.home.content2.subcontent10' }),
            },
            {
              name: 'content1',
              className: 'teams-content',
              children:
              formatMessage({ id: 'app.home.content2.subcontent11' }),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams-image',
              children:
                'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ',
            },
            { name: 'title', className: 'teams-title', children: formatMessage({ id: 'app.home.content2.subtitle2' }) },
            {
              name: 'content0',
              className: 'teams-job',
              children: formatMessage({ id: 'app.home.content2.subcontent20' }),
            },
            {
              name: 'content1',
              className: 'teams-content',
              children:
              formatMessage({ id: 'app.home.content2.subcontent21' }),
            },
          ],
        },
      },
    ],
  },
};

export const FooterData = {
  wrapper: { className: 'home-page-wrapper footer-wrapper' },
  OverPack: { className: 'footer', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      // {
      //   name: 'block0',
      //   xs: 24,
      //   md: 6,
      //   className: 'block',
      //   title: {
      //     className: 'logo',
      //     children:
      //       'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
      //   },
      //   childWrapper: {
      //     className: 'slogan',
      //     children: [
      //       {
      //         name: 'content0',
      //         children: 'A Demo for design.',
      //       },
      //     ],
      //   },
      // },
      {
        name: 'block2',
        xs: 24,
        md: 8,
        className: 'block',
        title: { children: formatMessage({ id: 'app.footer.profile' }) },
        childWrapper: {
          children: [
            { href: '/about-us', name: 'about-us', children: formatMessage({ id: 'app.footer.about-us' }) },
            { href: '/news', name: 'news', children: formatMessage({ id: 'app.footer.news' }) },
            { href: '/careers', name: 'careers', children: formatMessage({ id: 'app.footer.careers' }) },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 8,
        className: 'block',
        title: { children: formatMessage({ id: 'app.footer.resources' }) },
        childWrapper: {
          children: [
            { href: '/technology/target-protein-platform', name: 'target-protein-platform', children: formatMessage({ id: 'app.footer.target-protein-platform' }) },
            { href: '/technology/sbdd-platform', name: 'sbdd-platform', children: formatMessage({ id: 'app.footer.sbdd-platform' }) },
            { href: '/pipeline', name: 'pipeline', children: formatMessage({ id: 'app.footer.pipeline' }) },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 8,
        className: 'block',
        title: { children: formatMessage({ id: 'app.footer.contact-us' }) },
        childWrapper: {
          children: [
            { href: '/', name: 'phone', children: formatMessage({ id: 'app.footer.phone' }) },
            { href: '/', name: 'email', children: formatMessage({ id: 'app.footer.email' }) },
            { href: '/contact-us', name: 'contact-us', children: formatMessage({ id: 'app.footer.register-entry' }) },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        {formatMessage({ id: 'app.footer.copyright' })}
      </span>
    ),
  },
};
