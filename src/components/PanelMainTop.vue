<template>
    <div id="panel-main-top" :class="current_main_panel">
        <div class="battle" :class="{active:current_main_panel==='battle'}" @click="switchMainTab('battle')">battle</div>
        <div class="fleet" :class="{active:current_main_panel==='fleet'}" @click="switchMainTab('fleet')">fleet</div>
        <div class="port" :class="{active:current_main_panel==='port'}" @click="switchMainTab('port')">port</div>
        <div class="quests" :class="{active:current_main_panel==='quests'}" @click="switchMainTab('quests')">quests</div>
    </div>
</template>

<script>
    export default {
        name: 'PanelMainTop',
        props: ['current_main_panel'],
        methods: {
            switchMainTab(name) {
                this.$root.$emit('switch_main_panel', name);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
