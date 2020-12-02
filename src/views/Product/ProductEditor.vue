<template>
  <div>
    <el-dialog
      title="编辑商品"
      :visible.sync="dialogEditorVisible"
      width="80%"
      :before-close="handleClose"
    >
      <el-form
        label-width="70px"
        :label-position="labelPosition"
        :model="addForm"
        ref="ruleForm"
      >
        <el-form-item label="商品类目">
          <el-button
            class="category"
            type="primary"
            @click="dialogCategoryVisible = true"
            >类目选择</el-button
          >
          <span class="category">{{ treeData.name }}</span>

          <el-dialog
            width="50%"
            title="类目选择"
            :visible.sync="dialogCategoryVisible"
            append-to-body
          >
            <ProductTree @treeData="getTreeData" />
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="getCategoryDataHandle"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品卖点" prop="sellPoint">
          <el-input v-model="addForm.sellPoint"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="addForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="num">
          <el-input v-model="addForm.num"></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
          <el-button
            class="category"
            type="primary"
            @click="dialogUploadVisible = true"
            >图片上传</el-button
          >
          <span class="category">{{ uploadData.url }}</span>
          <el-dialog
            width="50%"
            title="上传图片"
            :visible.sync="dialogUploadVisible"
            append-to-body
          >
            <ProductUpload @upload="getUpload" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品描述">
          <!-- <BaiduEiditor /> -->
          <ProductWangEiditor @onEditor="getEiditor" :editorData="editorContent" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogEditorVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ProductWangEiditor from "./ProductWangEiditor";
import ProductUpload from "./ProductUpload";
import ProductTree from "./ProductTree";
import api from "../../api";
import { mapMutations,mapState} from "vuex"
export default {
  name: "ProductEditor",

  data() {
    return {
      dialogUploadVisible: false,
      dialogEditorVisible: false,
      dialogCategoryVisible: false,
      labelPosition: "left",
      addForm: {
        name: "",
        sellPoint: "",
        price: "",
        num: "",
      },
      treeData: {},
      uploadData: {},
      editorData: "",
      currentId: 0,
    };
  },
  components: {
    ProductWangEiditor,
    ProductUpload,
    ProductTree,
  },
  mounted() {
    //    编辑
    this.$bus.$on("onEditor", (row) => {
      this.dialogEditorVisible = true;
      this.currentId = row.id;
      api
        .preUpdateItem({
          id: row.id,
        })
        .then((res) => {
          console.log(res.data);
          this.treeData = {
            name: res.data.cid,
          };
          this.addForm = {
            name: res.data.result[0].title,
            sellPoint: res.data.result[0].sellPoint,
            price: res.data.result[0].price,
            num: res.data.result[0].num,
          };
          this.uploadData = {
            url: res.data.result[0].image,
          };
          this.editorData = res.data.result[0].descs;
        });
    });
  },
  methods: {
    ...mapMutations("editorModule",["setEditorContent"]),
    // 添加
    sureSubmit() {
      //    编辑
      api.updateTbItem({
          id: this.currentId,
          title: this.addForm.name,
          sellPoint: this.addForm.sellPoint,
          price: this.addForm.price,
          num: this.addForm.num,
          cid: this.treeData.cid,
          desc: this.editorData,
          image: this.uploadData.url,
        }).then((res) => {
            if(res.data.status === 200){
                 this.dialogEditorVisible = false;
                 this.$bus.$emit("onRef",true)
            }else{
                this.$message.error("修改失败")
            }
        });
    },
    handleClose() {
      this.dialogEditorVisible = false;
    },
    getUpload(data) {
      console.log(data);
      this.uploadData = data;
      this.dialogUploadVisible = false;
    },
    // dialogUploadVisible(){}
    getCategoryDataHandle() {
      this.dialogCategoryVisible = false;
    },
    /* 
         获取类目选择数据
        */
    getTreeData(data) {
      console.log(data);
      this.treeData = data;
    },
    getEiditor(data) {
      console.log(data);
      this.editorData = data;
    },
  },
};
</script>

<style scoped lang="less">
.category {
  float: left;
  margin-right: 20px;
}
.upload-img {
  width: 400px;
  float: left;
}
</style>

