<template>
    <div id="panel-main-battle">
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
</template>

<script>
    import PanelShipBattle from '@/components/PanelShipBattle.vue';
    import PanelEnemyBattle from '@/components/PanelEnemyBattle.vue';
    import {mapGetters} from 'vuex'

    export default {
        name: 'PanelMain',
        computed: {
            ...mapGetters(['currentMainTab', 'fleets', 'enemies'])
        },
        components: {PanelEnemyBattle, PanelShipBattle}
    }
</script>