<template>
    <section class="container main">
        <h1 class="title text-center">
            Posts
        </h1>
        <div class="card-columns">
            <div v-for="post in posts" :class="[
                    'card',
                    post.promoted ? 'bg-dark' : 'bg-light',
                    post.promoted ? 'text-light' : 'text-dark',
                ]">
                <div class="card-body">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.description }}</p>
                </div>
                <div class="list-group list-group-flush" v-if="post.comments_count > 0">
                    <div class="list-group-item" :class="post.promoted ? 'bg-dark text-white' : ''">
                        <span>Comments: {{ post.comments_count }}</span>
                        <span v-for="commentator in post.commentators.data">
                            <img :src="commentator.avatar" class="avatar rounded-circle ml-1">
                        </span>
                    </div>
                </div>
                <div class="card-body" v-if="post.tags_count > 0">
                    <span v-for="tag in post.tags.data" class="badge badge-primary mr-1">
                        {{ tag.title }}
                    </span>
                </div>
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
