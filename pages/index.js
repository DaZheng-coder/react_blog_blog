/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:00:42
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-01 15:59:24
 * @Description: file content
 */
import Head from 'next/head'
// import Link from 'next/link'
import { Row, Col } from 'antd'
import Header from '../components/Header'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      {/* 两栏布局 */}
      <Row className="comm-main" type="flex" justify="center">
        {/* 左侧 */}
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          左侧
        </Col>
        {/* 右侧 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}
