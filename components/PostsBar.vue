<template>
    <div class="border border-left-0 border-right-0 p-2 my-2">
        <div class="btn-group">
            <button class="btn btn-primary" @click.prevent="reload">Reload</button>
            <button class="btn btn-default" @click.prevent="shuffle">Shuffle</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            module: {
                type: String,
            },
        },

        data () {
            return {
                loadedAt: null,
            }
        },

        mounted () {
            //
        },

        methods: {
            async reload () {
                await this.$store.dispatch(`${this.module}/fetch`)
            },
            async shuffle () {
                await this.$store.dispatch(`${this.module}/shuffle`)
            },
        }
    }
</script>
