/* 
    权限管理
*/
import router from "./index"
import store from "../store"

router.beforeEach((to,from,next)=>{
    if(to.meta.isLogin){
        // 需要登录
        var token = store.state.loginModul.user.token;
        if(token){
            next();
        }else{
            next({
                path:"/login"
            })
        }
    }else{
        // 不需要登录
        next()
    }
})