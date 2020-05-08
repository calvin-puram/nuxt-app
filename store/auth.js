export const state = () => ({});

export const mutations = {};

export const actions = {
  async register({ commit }, data) {
    try {
      const res = await this.$axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FB_API_KEY}`,
        data
      );
      console.log(res.data);
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
      console.log(res.data);
    } catch (e) {
      console.log(e.response.data.error.message);
    }
  }
};
