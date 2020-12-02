/* 
        配置数据库
*/
const { response } = require("express");
const mysql = require("mysql");
const clinet = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"web2006sql"
})

function sqlFn(sql,arr,callback){
    // 执行数据库语句的方法
    clinet.query(sql,arr,(error,result)=>{
        if(error){
            console.log(error);
            return;
        }
        callback(result)
    })
}

module.exports = sqlFn
