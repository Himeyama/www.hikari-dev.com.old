import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
// import useBaseUrl from '@docusaurus/useBaseUrl';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@site/src/components/Button';

export default () => {
  return (
    <Layout>
      <div class="top-area-parent">
        <div class="top-area">
          <Container>
            <Row>
              <Col>
                <p class="top-title">ひかりぶ</p>
                <p>技術ネタを中心に投稿しています。</p>
              </Col>
            </Row>
            <Row>
              <Col><Button href="blog" class="">記事を見る</Button></Col>
              <Col><Button href="docs">ドキュメント</Button></Col>
              <Col>
                <p><Button href="docs/center-r5">令和 5 年度大学入学共通テストカウントダウン</Button></p>
                <p><Button href="docs/sars2-yamaguchi">山口県の新型コロナウイルス情報</Button></p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  )
}
