import _ from 'lodash'
import moment from 'moment'
import axios from '../plugins/axios'

export const state = () => ({
    posts: [],
    loadedAt: null,
})

export const mutations = {
    UPDATE_LOAD_TIME (state, time) {
        state.loadedAt = time
    },
    UPDATE_POSTS (state, posts) {
        state.posts = posts
    },
}

export const actions = {
    async fetch ({ commit }) {
        const { data } = await axios.get('/api/posts')
        commit('UPDATE_LOAD_TIME', moment().valueOf())
        commit('UPDATE_POSTS', data.data)
    },

    shuffle ({ commit, state }) {
        commit('UPDATE_POSTS', _.shuffle(state.posts))
    },
}
