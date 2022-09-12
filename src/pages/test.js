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
      <div class="top-area">
      <Container>
        <Button>
          Button
        </Button>
      </Container>
      </div>
    </Layout>
  )
}
