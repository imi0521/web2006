<template>
  <div>
      {{demo}}
    左导航
    <el-tree
      :props="defaultProps"
      :load="loadNode"
      lazy
      show-checkbox
      @node-click="handleNodeClick"
      :render-content="renderContent"
      :expand-on-click-node="false"
    >
    </el-tree>
      <!-- 添加子导航对话框 -->
      <el-dialog
        title="添加子导航"
        :visible.sync="dialogAddNavVisible"
        width="60%"
        :before-close="handleClose"
      >
        <el-form :model="navForm" ref="ruleForm">
            <el-form-item label="导航名字" prop="pass">
                <el-input type="text" v-model="navForm.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogAddNavVisible = false">取 消</el-button>
          <el-button type="primary" @click="sureAddNavHandle">添 加</el-button>
        </span>
      </el-dialog>
      <!-- 修改子导航对话框 -->
      <el-dialog
        title="修改子导航"
        :visible.sync="dialogUpdateNavVisible"
        width="60%"
        :before-close="handleClose"
      >
        <el-form :model="navForm" ref="ruleForm">
            <el-form-item label="导航名字">
                <el-input type="text" v-model="navForm.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogUpdateNavVisible = false">取 消</el-button>
          <el-button type="primary" @click="sureUpdateNavHandle">修 改</el-button>
        </span>
      </el-dialog>
    
  </div>
</template>

<script>
import api from "../../api";
export default {
  name: "ContentNav",
  inject:["reload","demo"],
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name",
      },
      dialogAddNavVisible :false,
      dialogUpdateNavVisible:false,
      navForm:{
          name:''
      },
      navContent:[]
    };
  },

  methods: {
    http(level, resolve) {
      api.selectContentCategoryByParentId(level).then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          return resolve(res.data.result);
        } else {
          return resolve([]);
        }
      });
    },
    handleNodeClick(node) {
        console.log(node);
        this.$bus.$emit("ContentInfo",node)
    },

    loadNode(node, resolve) {
      console.log(node);
      if (node.level === 0) {
        //   第一次访问
        this.http(
          {
            id: 1,
          },
          resolve
        );
      }
      if (node.level >= 1) {
        //   第n 次访问
        this.http(
          {
            id: node.data.pid,
          },
          resolve
        );
      }
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(node, data)}
            >
              增加子导航
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.update(node, data)}
            >
              修改
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              删除
            </el-button>
          </span>
        </span>
      );
    },
    //增加子导航
    append(node, data) {
        this.navContent = data
      console.log(node, data);
      this.dialogAddNavVisible =true
     },
    //  修改
    update(node, data) {
        this.navContent = data
        this.dialogUpdateNavVisible = true;

    },
    // 删除
    remove(node, data) {
        api.deleteContentCategoryById(
            {
                pid:data.pid
            }
        ).then(res=>{
            if(res.data.status === 200){
                this.reload()
            }
        })
    },
    sureAddNavHandle(){
      
         api.insertContentCategory(
            {
                 pid: this.navContent.pid,
                 name:this.navForm.name
            }
         ).then((res) => {
             console.log(res);
             if(res.data.status === 200){
                 this.dialogAddNavVisible =false;
                 this.reload()
             }
         });

    },
    handleClose(){
        this.dialogAddNavVisible = false
    },
    sureUpdateNavHandle(){
        api.updateContentCategory(
            {
                pid:this.navContent.pid,
                name:this.navForm.name
            }
        ).then(res=>{
            if(res.data.status === 200){
                this.dialogUpdateNavVisible = false;
                this.reload()
            }
        })
    }
  },
};
</script>

<style>
</style>