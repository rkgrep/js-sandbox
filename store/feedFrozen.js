import _ from 'lodash'
import moment from 'moment'
import axios from '../plugins/axios'

const postsMap = new Map()

export const state = () => ({
    postsOrder: [],
    loadedAt: null,
})

export const mutations = {
    UPDATE_LOAD_TIME (state, time) {
        state.loadedAt = time
    },

    UPDATE_POSTS (state, posts) {
        postsMap.clear()
        const order = []
        _.each(posts, (post) => {
            order.push(post.id)
            postsMap.set(post.id, Object.freeze(post))
        })
        state.postsOrder = order
    },

    UPDATE_ORDER (state, order) {
        state.postsOrder = order
    },
}

export const getters = {
    posts (state) {
        return _.map(state.postsOrder, (id) => postsMap.get(id))
    }
}

export const actions = {
    async fetch ({ commit }) {
        const { data } = await axios.get('/api/posts')
        commit('UPDATE_LOAD_TIME', moment().valueOf())
        commit('UPDATE_POSTS', data.data)
    },

    shuffle ({ commit, state }) {
        commit('UPDATE_ORDER', _.shuffle(state.postsOrder))
    },
}
