import Vue from "vue";
import Vuex from "vuex";
import loader from "./loader";
import clients from "./clients";

Vue.use(Vuex);

const modules = {
  loader,
  clients
};

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== "production"
});
