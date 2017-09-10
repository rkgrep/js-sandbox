<template>
    <section class="container main">
        <h1 class="title text-center">
            Posts
        </h1>
        <div class="">
            <div v-for="post in posts" class="border border-dark p-1">
                <h5>{{ post.title }}</h5>
                <p>User: {{ post.user.data.name }}</p>
                <p>{{ post.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import Basic from './posts.vue'

    export default {
        mixins: [Basic],
    }
</script>
