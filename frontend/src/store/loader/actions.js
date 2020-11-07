import { SET_LOADER, RESET_LOADER } from "./types";

const actions = {
  setLoader({ commit }) {
    commit(SET_LOADER);
  },
  resetLoader({ commit }) {
    commit(RESET_LOADER);
  },
};

export default actions;
