/*
 * @Author: DaZheng
 * @Date: 2020-12-01 14:15:47
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-01 14:18:14
 * @Description: file content
 */
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})
