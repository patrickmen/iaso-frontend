import React from 'react';
import { formatMessage } from 'umi/locale';
import { urlToList } from '@/components/_utils/pathTools';

export const BannerData = {
  wrapper: { className: 'banner' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        href: '/pipeline',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner-text-wrapper0' },
        bg: { className: 'bg bg0'},
        title: {
          className: 'banner-title',
          children: formatMessage({ id: 'app.home.banner.title0' }),
        },
        content: {
          className: 'banner-content',
          children: formatMessage({ id: 'app.home.banner.content0' }),
        },
        // button: { className: 'banner-button', href: '/about-us', children: formatMessage({ id: 'app.home.banner.button' }) },
      },
      {
        name: 'elem1',
        href: '/technology/target-validation-platform',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner-text-wrapper1' },
        bg: { className: 'bg bg1'},
        title: {
          className: 'banner-title',
          children: formatMessage({ id: 'app.home.banner.title1' }),
        },
        content: {
          className: 'banner-content',
          children: formatMessage({ id: 'app.home.banner.content1' }),
        },
        // button: { className: 'banner-button', href: '/about-us', children: formatMessage({ id: 'app.home.banner.button' }) },
      },
      {
        name: 'elem2',
        href: '/careers',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner-text-wrapper2' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner-title',
          children: formatMessage({ id: 'app.home.banner.title2' }),
        },
        content: {
          className: 'banner-content',
          children: formatMessage({ id: 'app.home.banner.content2' }),
        },
        // button: { className: 'banner-button', href: '/about-us', children: formatMessage({ id: 'app.home.banner.button' }) },
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
              href: '/technology/target-validation-platform',
              className: 'content0-block-icon',
              children:
                'https://cdn.pharmcafe.com/targetvalidationplatform.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: formatMessage({ id: 'app.home.content0.subtitle0' }),
            },
            { 
              name: 'content', 
              className: 'content0-block-content',
              children: formatMessage({ id: 'app.home.content0.subcontent0' }) 
            },
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
              href: '/technology/sbdd-platform',
              className: 'content0-block-icon',
              children:
                'https://cdn.pharmcafe.com/SBDD.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: formatMessage({ id: 'app.home.content0.subtitle1' }),
            },
            {
              name: 'content',
              className: 'content0-block-content',
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
              href: '/technology/biomarker-development-platform',
              className: 'content0-block-icon',
              children:
                'https://cdn.pharmcafe.com/biomarker.jpg',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: formatMessage({ id: 'app.home.content0.subtitle2' }),
            },
            {
              name: 'content',
              className: 'content0-block-content',
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

export const Content3Data = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: formatMessage({ id: 'app.home.content3.title' }) }],
  },
  childWrapper: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          className: 'content3-block-item',
          children: [
            {
              name: 'image',
              href: '/partnering/academic-institution',
              className: 'content3-block-icon',
              children:
                'https://cdn.pharmcafe.com/academicinstitution.jpg',
            },
            {
              name: 'title',
              className: 'content3-block-title',
              children: formatMessage({ id: 'app.home.content3.subtitle0' }),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 10,
        xs: 24,
        children: {
          className: 'content3-block-item',
          children: [
            {
              name: 'image',
              href: '/partnering/biotech-company',
              className: 'content3-block-icon',
              children:
                'https://cdn.pharmcafe.com/biotechcompany.jpg',
            },
            {
              name: 'title',
              className: 'content3-block-title',
              children: formatMessage({ id: 'app.home.content3.subtitle1' }),
            }
          ]
        }
      }
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
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: formatMessage({ id: 'app.footer.about-lofly' }) },
        childWrapper: {
          children: [
            { href: '/about-us', name: 'company profile', children: formatMessage({ id: 'app.footer.profile' }) },
            { href: '/pipeline', name: 'pipeline', children: formatMessage({ id: 'app.footer.pipeline' }) },
            { href: '/partnering/academic-institution', name: 'partnering', children: formatMessage({ id: 'app.footer.partnering' }) },
            { href: '/news', name: 'news', children: formatMessage({ id: 'app.footer.news' }) },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: formatMessage({ id: 'app.footer.technology' }) },
        childWrapper: {
          children: [
            { href: '/technology/target-validation-platform', name: 'target validation platform', children: formatMessage({ id: 'app.footer.target-validation-platform' }) },
            { href: '/technology/sbdd-platform', name: 'sbdd platform', children: formatMessage({ id: 'app.footer.sbdd-platform' }) },
            { href: '/technology/biomarker-development-platform', name: 'biomarker development platform', children: formatMessage({ id: 'app.footer.biomarker-development-platform' }) },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: formatMessage({ id: 'app.footer.contact-us' }) },
        childWrapper: {
          children: [
            { href: '/contact-us', name: 'contact details', children: formatMessage({ id: 'app.footer.contact-details' }) },
            { href: '/careers', name: 'careers', children: formatMessage({ id: 'app.footer.careers' }) },
            { href: '/contact-us', name: 'online message', children: formatMessage({ id: 'app.footer.online-message' }) },
          ],
        },
      },
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://cdn.pharmcafe.com/QR-code.jpg'
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'slogan0',
              children: formatMessage({ id: 'app.footer.slogan0' })
            },
            {
              name: 'slogan1',
              children: formatMessage({ id: 'app.footer.slogan1' }),
            },
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
        {formatMessage({ id: 'app.footer.copyright' })}&nbsp;&nbsp; 
        <a href="https://beian.miit.gov.cn" target="_blank" class="record">{formatMessage({ id: 'app.footer.record' })}</a>
      </span>
    ),
  },
};
