export const GET_CLIENTS = "GET_CLIENTS";

const mutations = {
  [GET_CLIENTS](state, playload) {
    state.total = playload.total;
    state.data = playload.data;
  }
};

export default mutations;
