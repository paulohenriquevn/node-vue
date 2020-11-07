import { SET_LOADER, RESET_LOADER } from "./types";

const mutations = {
  [SET_LOADER](state) {
    state.status = true;
  },
  [RESET_LOADER](state) {
    state.status = false;
  },
};
export default mutations;