<template>
    <div id="panel-options" :class="{hidden:hidden}">
        <div class="switch" v-on:click="hidden=!hidden">{{ hidden ? "&lt;" : "&gt;" }}</div>
        <div class="mute"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'PanelOptions',
        computed: {
            ...mapGetters(['options'])
        },
        data: function () {
            return {hidden: true};
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
