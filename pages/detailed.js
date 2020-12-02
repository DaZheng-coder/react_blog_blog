/*
 * @Author: DaZheng
 * @Date: 2020-12-01 16:00:49
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 12:38:52
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
import ReactMarkdown from 'react-markdown'

import {
  HistoryOutlined,
  TagsOutlined,
  FireOutlined
} from '@ant-design/icons';

export default function Detailed() {
  
  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
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
                <ReactMarkdown 
                  source={markdown}
                  escapeHtml={false}
                  
                />
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
