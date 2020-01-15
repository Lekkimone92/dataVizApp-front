import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    depData: [],
    depGares: [],
    allDeps: []
  },
  mutations: {
    setDepData(state, payload){
      Vue.set(state, "depData", payload);
    },
    setDepGare(state, payload){
      Vue.set(state, "depGares", payload);
    },
    setAllDeps(state, payload){
      Vue.set(state, "allDeps", payload);
    }
  },
  actions: {
    getDepartement(store, payload){
      let httReq = "http://localhost:3000/departements";
      fetch(httReq).then((data) => {
        data.json().then((rep) => {
          store.commit("setDepData", rep);
        })
      })
    },
    getAllDeps(store, payload){
      let httReq = `http://localhost:3000/all_deps?limit=${payload}`;
      fetch(httReq).then((data) => {
        data.json().then((rep) => {
          store.commit("setAllDeps", rep);
        })
      })
    },
    getDepGares(store, depName){
      let httReq = "http://localhost:3000/departementGares?q="+ depName;
      fetch(httReq).then((data) => {
        data.json().then((rep) => {
          store.commit("setDepGare", rep);
        })
      })
    }
  },
  modules: {
  }
})
