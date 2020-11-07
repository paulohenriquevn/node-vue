<template>
  <el-row>
    <el-row>
      <el-input
        class="margin-bottom"
        v-model="formInline.user"
        placeholder="Digite a informação que deseja buscar e pressione enter"
      ></el-input>
    </el-row>
    <el-row>
      <el-table :data="tableData" border class="margin-bottom" style="width: 100%">
        <el-table-column prop="nome" label="Nome do cliente"> </el-table-column>
        <el-table-column prop="valorTotalInadimplencia" label="Valor">
        </el-table-column>
        <el-table-column prop="dataPrimeiraInadimplencia" label="Desde">
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </el-row>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          nome: "Paulo",
          valorTotalInadimplencia: 0,
          dataPrimeiraInadimplencia: "2016-05-03",
        },
      ],
    };
  },
};
</script>

<style scoped>
.margin-bottom {
    margin-bottom: 2em;
}
</style>