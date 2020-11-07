<template>
  <el-row>
    <el-row>
      <el-input
        placeholder="Digite a informação que deseja buscar e pressione enter"
        v-model="formInline.user"
        class="margin-bottom"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        border
        class="margin-bottom"
        style="width: 100%"
      >
        <el-table-column prop="nome" label="Nome do cliente"> </el-table-column>
        <el-table-column prop="valorTotalInadimplencia" label="Valor">
        </el-table-column>
        <el-table-column prop="dataPrimeiraInadimplencia" label="Desde">
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="tamanhoPagina"
        :current-page="pagina"
        @current-change="alterarPagina"
      />
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
      total: 100,
      pagina: 1,
      tamanhoPagina: 10,
      tableData: [
        {
          nome: "Paulo",
          valorTotalInadimplencia: 0,
          dataPrimeiraInadimplencia: "2016-05-03",
        },
      ],
    };
  },

  methods: {
    alterarPagina(numeroPagina) {
      alert(numeroPagina);
    }
  }
};
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 2em;
}
</style>