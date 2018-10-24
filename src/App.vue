<template>
    <div id="box">
        <div id="panel" :class="{hidden:optionsPanelVisible}">
            <panel-header></panel-header>
            <panel-main></panel-main>
            <div id="panel-help"></div>
        </div>
        <div id="twitter"><a href="https://twitter.com/tsekino0530" rel="noopener" target="_blank">https://twitter.com/tsekino0530</a>
        </div>
        <panel-side></panel-side>
        <panel-options :class="{hidden:!optionsPanelVisible}"></panel-options>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import PanelHeader from '@/components/PanelHeader'
    import PanelSide from '@/components/PanelSide'
    import PanelMain from '@/components/PanelMain'
    import PanelOptions from '@/components/PanelOptions'
    import '@/sass/main.scss'

    export default {
        name: 'box',
        computed: {
            ...mapGetters(['optionsPanelVisible'])
        },
        components: {PanelHeader, PanelMain, PanelSide, PanelOptions}
    }
</script>