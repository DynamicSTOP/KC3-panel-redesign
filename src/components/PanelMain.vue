<template>
    <div id="panel-main">
        <panel-main-top></panel-main-top>
        <div id="panel-main-battle" :class="{hidden:currentMainTab!=='battle'}">
            <div>
                <div id="panel-main-left">
                    <div class="ships">
                        <panel-ship-battle v-for="ship in fleets[0]"
                                           :ship="ship"
                                           :key="ship.id">
                        </panel-ship-battle>
                    </div>
                </div>
                <div id="panel-main-right">
                    <div class="enemies">
                        <panel-enemy-battle v-for="(enemy, index) in enemies"
                                            :enemy="enemy"
                                            :key="index">
                        </panel-enemy-battle>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PanelMainTop from '@/components/PanelMainTop.vue';
    import PanelShipBattle from '@/components/PanelShipBattle.vue';
    import PanelEnemyBattle from '@/components/PanelEnemyBattle.vue';
    import {mapGetters} from 'vuex'

    export default {
        name: 'PanelMain',
        computed: {
            ...mapGetters(['currentMainTab', 'fleets', 'enemies'])
        },
        components: {PanelMainTop, PanelEnemyBattle, PanelShipBattle}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
