<template>
    <div id="box">
        <div id="panel">
            <panel-header></panel-header>
            <panel-main></panel-main>
            <div id="panel-help"></div>
        </div>
        <div id="twitter"><a href="https://twitter.com/tsekino0530" rel="noopener" target="_blank">https://twitter.com/tsekino0530</a>
        </div>
        <panel-options></panel-options>
    </div>
</template>

<script>
    import PanelHeader from '@/components/PanelHeader'
    import PanelOptions from '@/components/PanelOptions'
    import PanelMain from '@/components/PanelMain'
    import '@/sass/main.scss'

    export default {
        name: 'box',
        components: {PanelHeader, PanelMain, PanelOptions}
    }
</script>