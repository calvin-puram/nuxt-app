export const state = () => ({
  token: ''
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};

export const actions = {
  async register({ commit }, data) {
    try {
      const res = await this.$axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FB_API_KEY}`,
        data
      );
      if (res) {
        commit('setToken', res.data.idToken);
        // localStorage.setItem('token', JSON.stringify(res.data.idToken));
      }
      return res;
    } catch (e) {
      console.log(e.response.data.error.message);
    }
  },

  async login({ commit }, data) {
    try {
      const res = await this.$axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FB_API_KEY}`,
        data
      );
      if (res) {
        commit('setToken', res.data.idToken);
        // localStorage.setItem('token', JSON.stringify(res.data.idToken));
      }
      return res;
    } catch (e) {
      console.log(e.response.data.error.message);
    }
  }
};
