<template>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      layout="prev, pager, next, jumper"
      :total=total>
    </el-pagination>
</template>

<script>
import api from "../../api"

export default {
    name:"ProductPagination",
    data(){
        return{
            currentPage:1,
            total:0
        }
    },
    methods:{
        handleSizeChange(){
            
        },
        handleCurrentChange(val){
            // console.log(val);
            this.$bus.$emit("page",val)
        }
    },
    mounted(){
        api.getTotal().then(res=>{
            console.log(res.data);
            this.total =res.data.result[0]["count(*)"]
        })
    }

}
</script>

<style>

</style>