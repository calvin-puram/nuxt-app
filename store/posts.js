import axios from 'axios';
export const state = () => ({
  posts: [],
  post: {}
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPost(state, post) {
    state.post = post;
  }
};

export const actions = {
  async setPosts({ commit }) {
    const res = await axios.get('http://localhost:4000/posts');
    commit('setPosts', res.data);
  },

  async setPost({ commit }, id) {
    const res = await axios.get(`http://localhost:4000/posts/${id}`);
    commit('setPost', res.data);
  }
};
