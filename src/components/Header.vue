<template>
    <div>{{user}}</div>
</template>

<script>
export default {
    name: 'Header',
    mounted() {
        this.$store.dispatch('FETCH_USER')
    },
    computed: {
        user: function() {
            return this.$store.state.user;
        }
    }
}
</script>

<style>

</style>