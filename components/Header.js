/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:51:09
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-01 15:35:41
 * @Description: file content
 */
import React from 'react'
import '../static/style/components/header.css'
// 从antd中引入24格栅格化系统必须组件
import { Row, Col, Menu } from 'antd'
// 导入需要的图标
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined
} from '@ant-design/icons'

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      {/* 进行屏幕适配 */}
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">大大大正</span>
        <span className="header-txt">又菜又爱学</span> 
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <HomeOutlined />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <YoutubeOutlined />
            视频
          </Menu.Item>
          <Menu.Item key="life">
            <SmileOutlined />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header