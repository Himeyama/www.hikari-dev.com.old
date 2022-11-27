import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@site/src/components/Button';
import TopCards from '@site/src/components/TopCards';
import Link from '@docusaurus/Link';

export default () => {
  return (
    <Layout>
      <div class="top-area-parent">
        <div class="top-area">
          <Container>
            <Row>
              <Col>
                <p class="top-title">ひかりぶ</p>
                <p class="top-description">技術ネタを中心に投稿しています。</p>
              </Col>
            </Row>
            <Row>
              <Col><TopCards href="blog" text="ブログ" /></Col>
              <Col><TopCards href="docs" text="ドキュメント" /></Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  )
}
