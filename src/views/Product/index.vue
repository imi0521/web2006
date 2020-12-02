<template>
  <div class="product-container">
    <ProductHead />
      <!-- 产品管理页面 -->
      <productList />
      <ProductPagination />
      <ProductAdd />
      <ProductEditor />
  </div>
</template>

<script>
import productList from "./productList"
import ProductPagination from "./ProductPagination"
import ProductHead from "./productHead"
import ProductAdd from "./ProductAdd"
import ProductEditor from './ProductEditor'

export default {
    components:{
      productList,
      ProductPagination,
      ProductHead,
      ProductAdd,
      ProductEditor
    }
}
</script>

<style>

</style>