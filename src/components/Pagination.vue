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
export default {
    name:"ProductPagination",
    data(){
        return{
            currentPage:1
           
        }
    },
    props:{
        total:{
            type:[String,Number],
            default:0
        }
    },
    methods:{
        handleSizeChange(){
            
        },
        handleCurrentChange(val){
            // console.log(val);
            this.$emit("page",val)
        }
    }
  

}
</script>

<style>

</style>