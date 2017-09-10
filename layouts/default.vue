<template>
    <div>
        <nuxt/>
        <my-footer/>
    </div>
</template>

<script>
    import MyFooter from '~/components/Footer.vue'

    export default {
        components: {
            MyFooter,
        },
    }
</script>

<style>
    .container.main {
        padding-top: 100px;
        padding-bottom: 100px;
    }
</style>
