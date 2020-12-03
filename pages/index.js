/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:00:42
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-03 12:13:28
 * @Description: file content
 */
import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'
import '../static/style/pages/index.css'

import servicePath from '../config/apiUrl'

import {
  HistoryOutlined,
  TagsOutlined,
  FireOutlined
} from '@ant-design/icons';

export default function Home(list) {
  const [mylist, setMylist] = useState(list.data)
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
          {/* 列表 */}
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detailed', query: {id: item.id} }} >
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                <span><HistoryOutlined />{item.addTime}</span>
                <span><TagsOutlined />{item.typeName}</span>
                <span><FireOutlined />{item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        {/* 右侧 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then(
      (res) => {
        console.log('----->', res.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}
