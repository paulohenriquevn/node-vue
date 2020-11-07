import Vue from "vue";
import Vuex from "vuex";
import loader from "./loader";

Vue.use(Vuex);

const modules = {
  loader,
};

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== "production",
});
