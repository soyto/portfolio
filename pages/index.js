import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/home.module.scss';
import { Button, Grid, Row, Column, Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Grid>

        <Row>
          <Column>
            <Breadcrumb noTrailingSlash aria-label="home-page">
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className={styles.title}>Soyto's Portfolio</h1>
          </Column>
        </Row>

        <Row>
          <Column>
            <Button>This is a carbon button</Button>
          </Column>
        </Row>

      </Grid>
    </Layout>
  );
}
