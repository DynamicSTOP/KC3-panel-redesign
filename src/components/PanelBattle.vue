<template>
    <div id="panel-main-battle">
        <div>
            <div id="panel-main-left">
                <div class="units">
                    <panel-unit-battle v-for="ship in fleets[0]"
                                       :unit="ship"
                                       :side="'ally'"
                                       :key="ship.id">
                    </panel-unit-battle>
                </div>
            </div>
            <div id="panel-main-right">
                <div class="units">
                    <panel-unit-battle v-for="(enemy, index) in enemies"
                                        :unit="enemy"
                                        :side="'enemy'"
                                        :key="'e'+index">
                    </panel-unit-battle>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PanelUnitBattle from '@/components/PanelUnitBattle.vue';
    import {mapGetters} from 'vuex'

    export default {
        name: 'PanelMain',
        computed: {
            ...mapGetters(['currentMainTab', 'fleets', 'enemies'])
        },
        components: {PanelUnitBattle}
    }
</script>