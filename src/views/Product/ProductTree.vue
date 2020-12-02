<template>
  <div>
    <el-tree 
    highlight-current
    :props="defaultProps" 
    :load="loadNode" 
    lazy
    @node-click="handleNodeClick"  
    >

</el-tree>
  </div>
</template>

<script>
import api from '../../api'
export default {
    name:"ProductTree",
    data(){
        return{
            defaultProps:{
                children:"children",
                label:"name"
            }
        }
    },
    methods:{
        handleNodeClick(data){
            this.$emit("treeData",data)
            console.log(data);
        },
        // 异步处理
        loadNode(node, resolve){
            if (node.level === 0) {
                api.selectItemCategoryByParentId().then(res=>{
                    if(res.data.status === 200){
                        return resolve(res.data.result);
                    }else{
                        return resolve([]);
                    }
                })
            }
            if(node.level >= 1){
                api.selectItemCategoryByParentId({
                    id:node.data.cid
                }).then(res=>{
                    if(res.data.status === 200){
                        return resolve(res.data.result)
                    }else{
                        return resolve([])
                    }
                })
                .catch(error=>{    //没数据的时候自动停下 
                    resolve([])
                })
                console.log(node);
            }
        }
    }
};
</script>

<style>
</style>