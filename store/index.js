export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    commit('user/SET_TOKEN', 'nuxtServerInit');
  }
};
