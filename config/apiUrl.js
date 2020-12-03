/*
 * @Author: DaZheng
 * @Date: 2020-12-03 12:08:08
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-03 12:26:30
 * @Description: file content
 */

let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList: ipUrl + 'getArticleList', //首页 接口
  getArticleById: ipUrl + 'getArticleById/', //详细页 接口
  getTypeInfo: ipUrl + 'getTypeInfo' //获得文章类别 接口
}

export default servicePath