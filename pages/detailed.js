/*
 * @Author: DaZheng
 * @Date: 2020-12-01 16:00:49
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-03 00:32:27
 * @Description: file content
 */
/* 文章详情页 */
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'

// tocify.tsx jsx

import {
  HistoryOutlined,
  TagsOutlined,
  FireOutlined
} from '@ant-design/icons';

export default function Detailed(props) {
  
  const renderer = new marked.Renderer()
  const tocify = new Tocify()

  // 等级 文本
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a></a>\n`
  }
  
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

  let html = marked(props.article_content)

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      {/* 两栏布局 */}
      <Row className="comm-main" type="flex" justify="center">
        {/* 左侧 */}
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item> <a href="/">首页</a> </Breadcrumb.Item>
                <Breadcrumb.Item> <a href="/">视频列表</a> </Breadcrumb.Item>
                <Breadcrumb.Item> xxx </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战视频教程-测试用的详细标题，各种巴拉巴拉巴拉
              </div>
              <div className="list-icon center">
                  <span><HistoryOutlined />2019-06-28</span>
                  <span><TagsOutlined />视频教程</span>
                  <span><FireOutlined />5900人</span>
              </div>
              <div className="detailed-content"
                dangerouslySetInnerHTML={{__html: html}}>
              </div>
            </div>
          </div>
        </Col>
        {/* 右侧 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />   
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
                {tocify && tocify.render()}
            </div>
          </Affix>
          
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async(context) => {
  console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(
      (res) => {
        console.log(res)
        resolve(res.data.data[0])
      }
    )
  })
  return await promise
}
