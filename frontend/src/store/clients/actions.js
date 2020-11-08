import { GET_CLIENTS } from "./types";
import api from "../../api";

const actions = {
  async getClients({ commit }, { pesquisar, pagina, ordernacao }) {
    const { data } = await api.get(`/client?name=${pesquisar}&page=${pagina}&sort=${ordernacao}`);
    console.log(data);
    commit(GET_CLIENTS, { pagina: data.currentPage, total: data.total, data: data.data });
  },
};

export default actions;
