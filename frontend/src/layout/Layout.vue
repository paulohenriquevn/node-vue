<template>
  <el-container>
    <el-header>Lista de clientes inadimplentes</el-header>
    <el-main><router-view /></el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  text-align: center;
  margin: 0 auto;
  width: 70%;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>