import { GET_CLIENTS } from "./types";

const actions = {
  getClients({ commit }) {
    const data = [
      {
        nome: "Paulo",
        valorTotalInadimplencia: 0,
        dataPrimeiraInadimplencia: "2016-05-03",
      },
      {
        nome: "Paulo",
        valorTotalInadimplencia: 0,
        dataPrimeiraInadimplencia: "2016-05-03",
      },
    ];
    commit(GET_CLIENTS, { total: 10, data });
  },
};

export default actions;
