<template>
    <div id="panel-side" :class="{hidden:hidden}">
        <div class="switch" @click="toggle">{{ hidden ? "&lt;" : "&gt;" }}</div>
        <div class="mute"></div>
        <div class="optionsPopup" @click="toggleOptions"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'PanelSide',
        computed: {
            ...mapGetters(['options'])
        },
        methods: {
            toggle(){
                this.hidden = !this.hidden;
            },
            toggleOptions() {
                this.toggle();
                this.$store.commit('toggleOptionsPanel');
            }
        },
        data: function () {
            return {hidden: true};
        }
    }
</script>
