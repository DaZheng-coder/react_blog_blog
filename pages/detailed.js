/*
 * @Author: DaZheng
 * @Date: 2020-12-01 16:00:49
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 12:25:45
 * @Description: file content
 */
/* 文章详情页 */
import Head from 'next/head'
import { Row, Col, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'

import {
  HistoryOutlined,
  TagsOutlined,
  FireOutlined
} from '@ant-design/icons';

export default function Detailed() {
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
                  <span><FireOutlined />5900</span>
              </div>
              <div className="detailed-content">
                markDown 内容
              </div>
            </div>
          </div>
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
