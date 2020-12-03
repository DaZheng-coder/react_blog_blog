/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:51:09
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-03 15:42:45
 * @Description: file content
 */
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

import '../static/style/components/header.css'
// 从antd中引入24格栅格化系统必须组件
import { Row, Col, Menu } from 'antd'
// 导入需要的图标
import * as Icon from '@ant-design/icons'

const Header = () => {

  const [navArray, setNavArray]  = useState([])
  useEffect(() => {
    const fetchData = async () => {
       const result = await axios(servicePath.getTypeInfo).then(
         (res) => {
           return res.data.data
         }
       )
       setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }

  const HomeIcon = Icon['HomeOutlined']

  return (
    <div className="header">
      <Row type="flex" justify="center">
        {/* 进行屏幕适配 */}
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">大大大正</span>
          <span className="header-txt">又菜又爱学</span> 
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <HomeIcon />
              首页
            </Menu.Item>
            {
              navArray.map((item) => {
                const IconTag = Icon[item.icon]
                return (
                  <Menu.Item key={item.Id}>
                    <IconTag />
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header