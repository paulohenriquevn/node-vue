import { SET_LOADER, RESET_LOADER } from "./mutations";

const state = {
  status: false,
};

const mutations = {
  [SET_LOADER](state) {
    state.status = true;
  },
  [RESET_LOADER](state) {
    state.status = false;
  },
};

const actions = {
  setLoader({ commit }) {
    commit(SET_LOADER);
  },
  resetLoader({ commit }) {
    commit(RESET_LOADER);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
