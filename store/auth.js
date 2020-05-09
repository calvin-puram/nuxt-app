export const state = () => ({
  token: ''
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },

  expiredToken(state) {
    state.token = '';
  }
};

export const actions = {
  async register({ commit, dispatch }, data) {
    try {
      const res = await this.$axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FB_API_KEY}`,
        data
      );
      if (res && res.data.idToken) {
        commit('setToken', res.data.idToken);
        dispatch('setExpiredToken', res.data.expiresIn * 1000);
        localStorage.setItem('token', JSON.stringify(res.data.idToken));
        localStorage.setItem(
          'tokenExpires',
          JSON.stringify(new Date().getTime() + res.data.expiresIn * 1000)
        );
      }
      return res;
    } catch (e) {
      console.log(e.response.data.error.message);
    }
  },

  async login({ commit, dispatch }, data) {
    try {
      const res = await this.$axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FB_API_KEY}`,
        data
      );
      if (res && res.data.idToken) {
        commit('setToken', res.data.idToken);
        dispatch('setExpiredToken', res.data.expiresIn * 1000);
        localStorage.setItem('token', JSON.stringify(res.data.idToken));
        localStorage.setItem(
          'tokenExpires',
          JSON.stringify(new Date().getTime() + res.data.expiresIn * 1000)
        );
      }
      return res;
    } catch (e) {
      console.log(e.response.data.error.message);
    }
  },

  setExpiredToken({ commit }, duration) {
    setTimeout(() => {
      commit('expiredToken');
    }, duration);
  },

  initAuth({ commit, dispatch }) {
    const token = JSON.parse(localStorage.getItem('token'));
    const tokenExpires = JSON.parse(localStorage.getItem('tokenExpires'));
    if (new Date().getTime > +tokenExpires || !token) {
      return;
    }
    dispatch('auth/setExpiredToken', +tokenExpires - new Date().getTime());
    commit('setToken', token);
  }
};

export const getters = {
  isAuth: state => !!state.token
};
