<template>
  <el-input
    placeholder="Digite o nome do cliente que deseja buscar"
    @input="handleInput"
    :value="value"
    class="margin-bottom"
  >
    <el-button
      slot="append"
      icon="el-icon-search"
      @click="onPesquisar"
    ></el-button>
  </el-input>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },

  methods: {
    onPesquisar() {
      this.$emit("onPesquisar", this.value);
    },

    handleInput(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>

<style>
</style>