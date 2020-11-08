<template>
  <el-table
    :data="data"
    border
    class="margin-bottom"
    style="width: 100%"
    empty-text="Não há registros."
    @sort-change="sortChanged"
  >
    <el-table-column prop="name" label="Nome do cliente" sortable="custom" />
    <el-table-column prop="totalValue" label="Valor" sortable="custom" />
    <el-table-column prop="firstDate" label="Desde" sortable="custom" />
  </el-table>
</template>

<script>
export default {
  props: {
    emptyText: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },

  methods: {
    sortChanged(sort) {
      this.$emit("ordernar", sort);
    },
  },
};
</script>

<style>
</style>