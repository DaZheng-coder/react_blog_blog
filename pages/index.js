/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:00:42
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-01 15:03:06
 * @Description: file content
 */
import Head from 'next/head'
// import Link from 'next/link'
import { Button } from 'antd'
import Header from '../components/Header'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
    </div>
  )
}
