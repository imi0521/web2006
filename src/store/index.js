import Vue from 'vue'
import Vuex from 'vuex'
import loginModul from "./modules/loginModul"
import editorModule from "./modules/EditorModule"

Vue.use(Vuex)

export default new Vuex.Store({
 
  
  modules: {
    loginModul,
    editorModule
  }
})
