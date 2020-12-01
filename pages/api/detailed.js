/*
 * @Author: DaZheng
 * @Date: 2020-12-01 16:00:49
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-01 16:01:30
 * @Description: file content
 */
/* 文章详情页 */
import Head from 'next/head'
// import Link from 'next/link'
import { Row, Col } from 'antd'
import Header from '../components/Header'
// import styles from '../styles/Home.module.css'

export default function Detailed() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Detailed</title>
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
