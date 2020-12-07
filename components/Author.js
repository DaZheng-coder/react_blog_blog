/*
 * @Author: DaZheng
 * @Date: 2020-12-02 09:04:28
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-07 15:42:48
 * @Description: file content
 */
import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'
import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined
} from '@ant-design/icons'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div> <Avatar size={100} src="../static/img/avatar.jpg" /> </div>
      <div className="author-introduction">
        天天掉发程序员，又菜又爱学
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  )
}

export default Author