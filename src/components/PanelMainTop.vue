<template>
    <div id="panel-main-top" :class="currentMainTab">
        <div class="battle" :class="{active:currentMainTab==='battle'}" @click="switchMainTab('battle')">battle</div>
        <div class="fleet" :class="{active:currentMainTab==='fleet'}" @click="switchMainTab('fleet')">fleet</div>
        <div class="port" :class="{active:currentMainTab==='port'}" @click="switchMainTab('port')">port</div>
        <div class="quests" :class="{active:currentMainTab==='quests'}" @click="switchMainTab('quests')">quests</div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'PanelMainTop',
        computed: {
            ...mapGetters(['currentMainTab'])
        },
        methods: {
            switchMainTab(name) {
                this.$store.commit('switchMainTab', name);
            }
        }
    }
</script>