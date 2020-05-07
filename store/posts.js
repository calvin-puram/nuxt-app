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
    const res = await this.$axios.get(
      'https://nuxt-blog-6b57a.firebaseio.com/posts.json'
    );
    const postArray = [];
    for (const key in res.data) {
      postArray.push({ ...res.data[key], id: key });
    }
    commit('getPosts', postArray);
  },

  async setPost({ commit }, id) {
    const res = await this.$axios.get(
      `https://nuxt-blog-6b57a.firebaseio.com/posts/${id}.json`
    );
    commit('setPost', res.data);
  },

  async postData({ commit }, data) {
    await this.$axios.post(
      `https://nuxt-blog-6b57a.firebaseio.com/posts.json`,
      data
    );
  }
};
