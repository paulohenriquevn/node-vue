<template>
  <el-row>
    <el-row>
      <app-input-search v-model="pesquisar" @onPesquisar="onPesquisar" />
    </el-row>
    <el-row>
      <app-table
        :data="data"
        empty-text="Não há registros."
        @ordernar="sortChanged"
      />
      <app-pagination
        :total="total"
        :tamanhoPagina="tamanhoPagina"
        :pagina="pagina"
        @alterarPagina="alterarPagina"
      />
    </el-row>
  </el-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AppTable from "../components/AppTable";
import AppInputSearch from "../components/AppInputSearch";
import AppPagination from "../components/AppPagination";
export default {
  components: {
    AppTable,
    AppInputSearch,
    AppPagination,
  },

  data() {
    return {
      pesquisar: "",
      pagina: 1,
      ordernacao: "name",
      tamanhoPagina: 15,
    };
  },

  mounted() {
    this.fetchClientes();
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

    ...mapActions("loader", {
      setLoader: "setLoader",
      resetLoader: "resetLoader",
    }),

    alterarPagina(numeroPagina) {
      this.pagina = numeroPagina;
      this.fetchClientes();
    },

    onPesquisar() {
      this.pagina = 1;
      this.fetchClientes();
    },

    async fetchClientes() {
      this.setLoader();
      await this.getClients({
        pesquisar: this.pesquisar,
        pagina: this.pagina,
        ordernacao: this.ordernacao,
      });
      this.resetLoader();
    },

    sortChanged({ prop, order }) {
      if (order) {
        const direcaoMap = {
          ascending: "",
          descending: "-",
        };

        const ordemDirecao = direcaoMap[order];
        this.ordernacao = `${ordemDirecao}${prop}`;
        this.fetchClientes();
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