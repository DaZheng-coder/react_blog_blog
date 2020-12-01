/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:00:42
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-01 14:32:16
 * @Description: file content
 */
import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'antd'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
        <Button>测试按钮</Button>
      </div>
    </div>
  )
}
