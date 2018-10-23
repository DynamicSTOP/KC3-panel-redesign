<template>
    <div id="panel-options" :class="{hidden:hidden}">
        <div class="switch" v-on:click="hidden=!hidden">{{ hidden ? "&lt;" : "&gt;" }}</div>
        <div class="mute"></div>
        <div class="optionsPopup"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'PanelSide',
        computed: {
            ...mapGetters(['options'])
        },
        data: function () {
            return {hidden: true};
        }
    }
</script>
