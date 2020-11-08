<template>
  <el-row>
    <el-row>
      <el-input
        placeholder="Digite o nome do cliente que deseja buscar"
        v-model="pesquisar"
        class="margin-bottom"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="onPesquisar"
        ></el-button>
      </el-input>
    </el-row>
    <el-row>
      <el-table
        :data="data"
        border
        class="margin-bottom"
        style="width: 100%"
        empty-text="Não há registros."
        @sort-change="sortChanged"
      >
        <el-table-column prop="name" label="Nome do cliente" sortable="custom"/>
        <el-table-column prop="totalValue" label="Valor" sortable="custom"/>
        <el-table-column prop="firstDate" label="Desde" sortable="custom"/> 
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      pesquisar: "",
      pagina: 1,
      ordernacao: "name",
      tamanhoPagina: 20,
    };
  },

  mounted() {
    this.getClients({
      pesquisar: this.pesquisar,
      pagina: this.pagina,
      ordernacao: this.ordernacao,
    });
  },

  computed: {
    ...mapState({
      data: (state) => state.clients.data,
      total: (state) => state.clients.total,
    }),
  },

  methods: {
    ...mapActions("clients", {
      getClients: "getClients",
    }),

    alterarPagina(numeroPagina) {
      this.pagina = numeroPagina;
      this.getClients({
        pesquisar: this.pesquisar,
        pagina: this.pagina,
        ordernacao: this.ordernacao,
      });
    },

    onPesquisar() {
      this.getClients({
        pesquisar: this.pesquisar,
        pagina: this.pagina,
        ordernacao: this.ordernacao,
      });
    },

    sortChanged({ prop, order }) {
      if (order) {
        const direcaoMap = {
          ascending: "",
          descending: "-",
        };

        const ordemDirecao = direcaoMap[order];
        this.ordernacao = `${ordemDirecao}${prop}`;
        this.getClients({
          pesquisar: this.pesquisar,
          pagina: this.pagina,
          ordernacao: this.ordernacao,
        });
      }
    },
  },
};
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 2em;
}
</style>