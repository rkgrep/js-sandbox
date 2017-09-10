import { mapState, mapGetters } from 'vuex'

export default (module, getters = false, ssr = false) => {
    const component = {
        methods: {
            async reload () {
                await this.$store.dispatch(`${module}/fetch`)
                console.log(this.posts)
            }
        }
    }

    if (getters) {
        component.computed = {
            ...mapGetters(module, ['posts'])
        }
    } else {
        component.computed = {
            ...mapState(module, ['posts'])
        }
    }

    if (ssr) {
        component.fetch = async function ({ store }) {
            await store.dispatch(`${module}/fetch`)
        }
    } else {
        component.mounted = function () {
            this.reload()
        }
    }
    return component
}
