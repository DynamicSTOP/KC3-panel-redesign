<template>
    <div id="panel-main">
        <panel-main-top></panel-main-top>
        <panel-battle :class="{hidden:currentMainTab!=='battle'}"></panel-battle>
    </div>
</template>

<script>
    import PanelMainTop from '@/components/PanelMainTop.vue';
    import PanelBattle from '@/components/PanelBattle.vue';
    import {mapGetters} from 'vuex'

    export default {
        name: 'PanelMain',
        computed: {
            ...mapGetters(['currentMainTab'])
        },
        components: {PanelMainTop, PanelBattle}
    }
</script>