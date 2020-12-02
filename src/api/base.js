const base ={
    baseUrl:"/api",
    login:'/api/login', //登录
    register:'/api/register',  //注册
    selectTbItemAllByPage:"/api/backend/item/selectTbItemAllByPage", //产品查询接口
    total:"/api/total",//页码
    search:"/api/search", //查询
    selectItemCategoryByParentId:"/api/backend/itemCategory/selectItemCategoryByParentId", //类目选择
    insertTbItem:"/api/backend/item/insertTbItem",// 添加产品
    deleteItemById:"/api/backend/item/deleteItemById", //删除
    preUpdateItem:"/api/backend/item/preUpdateItem",  //预更新
    updateTbItem:"/api/backend/item/updateTbItem", //修改接口
    selectItemParamAll:"/api/backend/itemParam/selectItemParamAll", //规格参数读取数据
    paramsSearch:"/api/params/search", //规格模糊查询
    paramsDelete: "/api/params/delete",// 规格参数删除
    paramsTotal:"/api/params/total", //规格参数总页数
    insertItemParam:"/api/backend/itemParam/insertItemParam", //规格参数添加
    paramsItem:"/api/product/parmas/paramsItem", // 规格参数产品添加
    
    selectContentCategoryByParentId:"/api/content/selectContentCategoryByParentId", //查询导航
    insertContentCategory:"/api/content/insertContentCategory", //增加子导航
    updateContentCategory:"/api/content/updateContentCategory" , //修改子导航
    deleteContentCategoryById:"/api/content/deleteContentCategoryById",  //删除子导航
    insertTbContent:"/api/content/insertTbContent",  //内容增加
    deleteContentByIds:"/api/content/deleteContentByIds" ,  //内容删除
    selectTbContentAllByCategoryId:"/api/content/selectTbContentAllByCategoryId", //内容查询
}
export default base;