export const state = () => ({
  user: null,
  session: null,
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setSession(state, session) {
    state.session = session;
  },
};

export const getters = {
  isAuthenticated: (state) => !!state.user,
};
