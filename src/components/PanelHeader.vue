<template>
    <div id="panel-top">
        <div id="panel-top-player">
            <div id="panel-top-teitoku">
                <span id="panel-top-teitoku-rank">{{ commander.rank }}</span>
                <span id="panel-top-teitoku-name"
                      :class="{censor:commander.censor}"
                      v-on:click="commander.censor=!commander.censor">{{ commander.censor ? "nope.jpg" : commander.name }}</span>
            </div>
            <div id="panel-top-hq" :style="expBar" :title="commander.HQ.exp+'/'+commander.HQ.next">
                <span id="panel-top-hq-rank">HQ {{ commander.HQ.lvl }}</span>
                <span id="panel-top-hq-points">+{{ commander.HQ.points }}</span>
            </div>
            <div id="panel-top-comment">{{ commander.comment }}</div>
        </div>
        <div id="panel-top-stats">
            <div id="panel-top-stats-tl">
                <span id="stats-tl-ships">{{ slots.ship[0] }}/{{ slots.ship[1] }}</span>
                <span id="stats-tl-equip">{{ slots.equip[0] }}/{{ slots.equip[1] }}</span>
                <span id="stats-tl-buck">{{ storage.buckets }}</span>
            </div>
            <div id="panel-top-stats-stock">
                <span id="stats-tl-fuel">{{ storage.fuel }}</span>
                <span id="stats-tl-steel">{{ storage.steel }}</span>
                <br>
                <span id="stats-tl-ammo">{{ storage.ammo }}</span>
                <span id="stats-tl-baux">{{ storage.bauxite }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'PanelHeader',
        computed: {
            ...mapGetters(['commander', 'storage', 'slots']),
            expBar() {
                let start = this.commander.HQ.exp, end = this.commander.HQ.next;
                if (start < 90) end = start + 10;
                return `--gradient: linear-gradient(to right, green ${start}%, rgba(250, 0, 0, 0.5) ${end}%);`
            }
        }
    }
</script>