import axios from '../plugins/axios'

export const state = () => ({
    posts: [],
})

export const mutations = {
    UPDATE_POSTS (state, posts) {
        state.posts = posts
    },
}

export const actions = {
    async fetch ({ commit }) {
        const { data } = await axios.get('/api/posts')
        commit('UPDATE_POSTS', data.data)
    }
}
