import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';


function HeroBanner() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary')}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">ようこそ</p>
                <div>
                    <Link className="button button--info" to="/blog">
                        <Translate>記事を見る</Translate>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout>
            <main>
                <HeroBanner />
            </main>
        </Layout>
    );
}
