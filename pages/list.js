/*
 * @Author: DaZheng
 * @Date: 2020-12-01 15:58:54
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-03 15:41:36
 * @Description: file content
 */
/* 列表页 */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import { Row, Col, List, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import axios from 'axios'
import servicePath from '../config/apiUrl'
import Link from 'next/link'

import {
  HistoryOutlined,
  TagsOutlined,
  FireOutlined
} from '@ant-design/icons';

export default function myList(list) {
  const [mylist, setMylist] = useState(list.data.data)
  useEffect(() => {
    setMylist(list.data)
  })
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      {/* 两栏布局 */}
      <Row className="comm-main" type="flex" justify="center">
        {/* 左侧 */}
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {/* 面包屑导航 */}
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
            </Breadcrumb>
          </div>
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
                  <span><FireOutlined />{item.view_count}</span>
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

myList.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + id).then(
      (res) => resolve(res.data)
    )
  })
  return await promise
}