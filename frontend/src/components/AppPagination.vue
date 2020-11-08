<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="tamanhoPagina"
    :current-page="pagina"
    @current-change="alterarPagina"
  />
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    tamanhoPagina: {
      type: Number,
      required: true,
    },
    pagina: {
      type: Number,
      required: true,
    },
  },

  methods: {
    alterarPagina(pagina) {
      this.$emit("alterarPagina", pagina);
    },
  },
};
</script>

<style>
</style>