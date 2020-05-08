export const state = () => ({});

export const mutations = {};

export const actions = {
  async login({ commit }, data) {
    try {
      const res = await this.$axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`,
        data
      );
      console.log(res.data);
    } catch (e) {
      console.log(e.response.data);
    }
  }
};
