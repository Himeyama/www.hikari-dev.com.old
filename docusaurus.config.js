// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ひかりぶ',
  tagline: 'Hikalib',
  url: 'https://www.hikari-dev.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'himeyama', // Usually your GitHub org/user name.
  projectName: 'www.hikari-dev.com', // Usually your repo name.
  noIndex: false,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    localeConfigs: {
      ja: {
        label: '日本語',
        direction: 'ltr',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-222708329-1',
          anonymizeIP: true
        },
        docs: false,
        blog: {
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katex],
          routeBasePath: '/',
          blogTitle: 'Hikalib',
          blogDescription: 'Hikari\'s blog.',
          blogSidebarTitle: '最近の投稿',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/himeyama/www.hikari-dev.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'ひかりぶ',
          content: 'blog, technology, python, ruby, linux, student'
        }
      ],
      navbar: {
        title: 'ひかりぶ',
        logo: {
          alt: 'ロゴ',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'tags',
            label: 'タグ別',
            position: 'right'
          },
          {
            to: 'https://covid19.hikari-dev.com/',
            label: '山口県の新型コロナ情報',
            position: 'right'
          },
          {
            href: 'https://github.com/himeyama/www.hikari-dev.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/himeyama',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ひかりぶ. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
