import { mapState } from 'vuex'

export default (module, ssr = false) => {
    const component = {
        computed: {
            ...mapState('feed', [
                'posts',
            ]),
        },
    }

    if (ssr) {
        component.fetch = async function ({ store }) {
            await store.dispatch(`${module}/fetch`)
        }
    } else {
        component.mounted = function () {
            this.$store.dispatch(`${module}/fetch`).then(() => {
                console.log(this.posts)
            })
        }
    }
    return component
}
