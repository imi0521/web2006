<template>
  <div>
    <element-table :tableData="tableData">
      <el-table-column show-overflow-tooltip prop="id" label="商品ID">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="title" label="商品名称">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="image" label="商品图片">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="sellPoint" label="商品卖点">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="price" label="商品价格">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="num" label="商品数量">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="descs" label="商品描述">
        <template slot-scope="scope">
          <p v-html="scope.row.descs"></p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </element-table>
  </div>
</template>

<script>
import api from "../../api";
export default {
  name: "productList",
  data() {
    return {
      tableData: [],
    };
  },

  mounted() {
    this.http(1);
    this.$bus.$on("page", (val) => {
      // console.log(val);
      this.http(val);
    });
    this.$bus.$on("searchData", (data) => {
      this.tableData = data;
    });
    this.$bus.$on("onRef", (data) => {
      this.http(1);
    });
  },
  methods: {
    http(page) {
      // 开启loading
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      api
        .getSelectTbItemAllByPage({
          page,
        })
        .then((res) => {
          console.log(res.data);
           loading.close();
          this.tableData = res.data;

        });
    },
    //    编辑
    handleEdit(index, row) {
      this.$bus.$emit("onEditor",row)
    },
    //    删除
   handleDelete(index, row) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    api.deleteItemById({
                        id: row.id,
                    }).then((res) => {
                        if (res.data.status === 200) {
                            this.$message({
                                type: "success",
                                message: "删除成功!",
                            });
                            this.http(1); // 刷新页面
                        } else {
                            this.$message({
                                type: "error",
                                message: "删除失败!",
                            });
                        }
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
  },
};
</script>

<style scoped>
.all {
  float: left;
  margin-top: 10px;
}
</style>