<template>
    <section class="container main">
        <h1 class="title text-center">
            Posts
        </h1>
        <div class="">
            <div v-for="post in posts" class="border border-dark p-1">
                <h5>{{ post.title }}</h5>
                <p>{{ post.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
//        async fetch ({ store }) {
//            await store.dispatch('feed/fetch')
//        },
        computed: {
            ...mapState('feed', [
                'posts',
            ]),
        },
        methods: {
            ...mapActions('feed', [
                'fetch',
            ]),
        },
        mounted () {
            this.fetch()
        },
    }
</script>

<style>
    .avatar {
        width: 1rem;
        height: 1rem;
    }
</style>
