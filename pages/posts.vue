<template>
    <section class="container main">
        <h1 class="title text-center">
            Posts
        </h1>
        <posts-bar module="feed"/>
        <div class="card-columns" v-if="posts.length > 0">
            <post-item :post="post" module="feed" v-for="post in posts" :key="post.id"/>
        </div>
    </section>
</template>

<script>
    import Basic from '~/components/Posts'
    import PostItem from '~/components/PostItem'
    import PostsBar from '~/components/PostsBar'

    export default {
        mixins: [Basic('feed')],
        components: {
            PostItem,
            PostsBar,
        },
    }
</script>
