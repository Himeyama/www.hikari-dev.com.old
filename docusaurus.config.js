// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const math = require('remark-math');
const katex = require('rehype-katex');

const redirects = require('./redirect.config.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  themes: ['@docusaurus/theme-live-codeblock'],
  title: 'ひかりぶ',
  tagline: 'Hikalib',
  url: 'https://www.hikari-dev.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'himeyama', // Usually your GitHub org/user name.
  projectName: 'www.hikari-dev.com', // Usually your repo name.
  noIndex: false,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {
        label: '日本語',
        direction: 'ltr',
      },
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: redirects()
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          ignorePatterns: ['/blog/tags/**', '/docs/tags/**', '/blog/page/*', '/my-react-page/', '/markdown-page/'],
        },
        googleAnalytics: {
          trackingID: 'UA-222708329-1',
          anonymizeIP: true
        },
        docs: {
        },
        blog: {
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katex],
          // routeBasePath: '/',
          blogTitle: 'Hikalib',
          blogDescription: 'Hikari\'s blog.',
          blogSidebarTitle: '最近の投稿',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          postsPerPage: 1,
          // Please change this to your repo.
          editUrl:
            'https://github.com/himeyama/www.hikari-dev.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.sass'),
        },
      },
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
      colorMode: {
        defaultMode: 'light',
      },
      metadata: [
        {
          name: 'keywords',
          content: 'blog,python,ruby,linux,student,ubuntu'
        },
        {
          name: 'description',
          content: "ひかりのホームページです。"
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
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: 'docs',
            label: 'Docs',
            position: 'left'
          },
          {
            to: 'blog/archive',
            label: 'Archive',
            position: 'left'
          },
          {
            to: 'blog/tags',
            label: 'Tags',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
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
                to: 'blog',
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
        additionalLanguages: ['powershell', 'csharp']
      },
    }),
};

module.exports = config;
