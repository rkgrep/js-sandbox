<template>
    <div>
        <my-nav/>
        <div class="container main">
            <nuxt/>
        </div>
        <my-footer/>
    </div>
</template>

<script>
    import MyFooter from '~/components/Footer.vue'
    import MyNav from '~/components/Nav.vue'

    export default {
        components: {
            MyFooter,
            MyNav,
        },
    }
</script>

<style>
    .container.main {
        padding-top: 20px;
        padding-bottom: 100px;
    }
</style>
