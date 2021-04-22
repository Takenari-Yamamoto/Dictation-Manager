const state = {
  dictations: []
};

const mutations = {
  setDictation(state, dictations) {
    state.dictations = dictations;
  },
  update(state, {dictation, newDictation}) {
    Object.assign(dictation, newDictation);
  },
  delete(state, {dictation, newDictation}) {
    Object.assign(dictation, newDictation);
  },
  add(state, task) {
    state.tasks.push(task);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};