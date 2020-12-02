import axios from "../utils/request"
import base from "./base"

const api ={
        /* 
            登录接口
        */
       getLogin(params){
            return axios.post(base.baseUrl + base.login ,params)
       },
       /* 
        注册
       */
      getRegister(params){
          return axios.post(base.baseUrl + base.register ,params)
      },
      /* 
        商品查询接口
      */
     getSelectTbItemAllByPage(params){
        return axios.get(base.baseUrl +base.selectTbItemAllByPage,{params})
     },
     /* 
      页码
     */
    getTotal(){
      return axios.get(base.baseUrl + base.total)
    },
    /* 
      商品的模糊查询
    */
   getSearch(params){
     return axios.get(base.baseUrl + base.search,{ params})
   },
   /* 
    分类
   */
  selectItemCategoryByParentId(params){
    return axios.get(base.baseUrl + base.selectItemCategoryByParentId,{ params })
  },
  /* 
    添加产品
  */
 insertTbItem(params){
      return axios.get(base.baseUrl + base.insertTbItem , { params})
 },
 /* 
 删除
 */
deleteItemById(params){
  return axios.get(base.baseUrl + base.deleteItemById ,{ params})
},
/* 
  预更新
*/
preUpdateItem(params){
  return axios.get(base.baseUrl + base.preUpdateItem ,{ params})
},
/* 
修改接口
*/
updateTbItem(params){
  return axios.get(base.baseUrl + base.updateTbItem,{
      params
  })
},
/* 
  规格参数读取数据
*/
selectItemParamAll(params){
  return axios.get(base.baseUrl +base.selectItemParamAll,{ params })
},
/* 
  规格模糊查询
*/
paramsSearch(params){
   return axios.get(base.baseUrl + base.paramsSearch,{params})
},
/* 
  规格参数删除
*/
paramsDelete(params){
  return axios.get(base.baseUrl + base.paramsDelete,{ params })
},
/* 
 规格参数总页数
*/
paramsTotal(){
  return axios.get(base.baseUrl + base.paramsTotal)
},
/* 
规格参数添加
*/
insertItemParam(params){
  return axios.get(base.baseUrl + base.insertItemParam ,{params})
},
/* 
规格参数产品添加
*/
paramsItem(params){
  return axios.get(base.baseUrl + base.paramsItem,{params})
},


/* 
查询导航
*/
selectContentCategoryByParentId(params){
  return axios.get(base.baseUrl +base.selectContentCategoryByParentId ,{params})
},
/* 
增加子导航
*/
insertContentCategory(params){
  return axios.get(base.baseUrl +base.insertContentCategory  ,{params})
},
/* 
修改子导航
*/
updateContentCategory(params){
  return axios.get(base.baseUrl +base.updateContentCategory  ,{params})
},
/*  
删除子导航
*/
deleteContentCategoryById(params){
  return axios.get(base.baseUrl +base.deleteContentCategoryById  ,{params})
},
/* 
内容增加
*/
insertTbContent(params){
  return axios.get(base.baseUrl +base.insertTbContent  ,{params})
},
/* 
内容删除
*/
deleteContentByIds(params){
  return axios.get(base.baseUrl +base.deleteContentByIds  ,{params})
},
/* 
内容查询
*/
selectTbContentAllByCategoryId(params){
  return axios.get(base.baseUrl +base.selectTbContentAllByCategoryId  ,{params})
}
}

export default api;