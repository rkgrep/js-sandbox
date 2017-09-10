<template>
    <div :class="[
        'card',
        post.promoted ? 'bg-dark' : 'bg-light',
        post.promoted ? 'text-light' : 'text-dark',
    ]">
        <div class="card-header">
            <img class="avatar large rounded-circle mr-3 float-left" :src="post.user.avatar">
            <span>@{{ post.user.name }}</span><br>
            <small>{{ post.published_at }}</small>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
        </div>
        <div class="list-group list-group-flush" v-if="post.comments_count > 0">
            <div class="list-group-item" :class="post.promoted ? 'bg-dark text-white' : ''">
                <span>Comments: {{ post.comments_count }}</span>
                <span v-for="commentator in post.commentators">
                    <img :src="commentator.avatar" class="avatar rounded-circle ml-1">
                </span>
            </div>
        </div>
        <div class="card-body" v-if="post.tags_count > 0">
            <p>
                <span v-for="tag in post.data" class="badge badge-primary mr-1">
                    {{ tag.title }}
                </span>
            </p>
            <button class="btn btn-danger" @click.prevent="remove(post.id)">Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['post', 'module'],

        methods: {
            remove (id) {
                this.$store.dispatch(`${this.module}/remove`, id)
            },
        }
    }
</script>

<style>
    .avatar {
        width: 1rem;
        height: 1rem;
    }
    .avatar.large {
        width: 3rem;
        height: 3rem;
    }
</style>
