export const state = () => ({
  posts: [],
  post: {}
});

export const mutations = {
  getPosts(state, posts) {
    state.posts = posts;
  },
  setPost(state, post) {
    state.post = post;
  }
};

export const actions = {
  async getPosts({ commit }) {
    const res = await this.$axios.get(`${process.env.POST_URL}/posts.json`);
    const postArray = [];
    for (const key in res.data) {
      postArray.push({ ...res.data[key], id: key });
    }
    commit('getPosts', postArray);
  },

  async setPost({ commit }, id) {
    const res = await this.$axios.get(
      `${process.env.POST_URL}/posts/${id}.json`
    );
    commit('setPost', res.data);
  },

  async postData({ commit }, data) {
    await this.$axios.post(`${process.env.POST_URL}/posts.json`, data);
  },

  async updatePost({ commit }, data) {
    await this.$axios.patch(
      `${process.env.baseUrl}/posts/${data.id}.json`,
      data.data
    );
  }
};
