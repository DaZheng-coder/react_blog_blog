/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:00:42
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-03 15:59:16
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
import '../static/style/pages/index.css'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import servicePath from '../config/apiUrl'

import {
  HistoryOutlined,
  TagsOutlined,
  FireOutlined
} from '@ant-design/icons';

export default function Home(list) {
  const [mylist, setMylist] = useState(list.data)
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    // 启动类似github样式的markdown
    gfm: true,
    // 是否容错代码
    pedantic: false,
    // 是否原始输出（忽略html例如视频什么的）
    sanitize: false,
    tables: true,
    // 是否支持换行符
    breaks: false,
    // 是否自动渲染列表
    smartLists: true,
    highlight: (code) => {
      // 自动检测返回代码，比较慢
      return hljs.highlightAuto(code).value
    }
  })
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
                <div className="list-context"
                  dangerouslySetInnerHTML={{__html: marked(item.introduce)}}
                ></div>
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
        resolve(res.data)
      }
    )
  })
  return await promise
}
