<template>
    <div class="enemy enemy-main" :class="extraHPClasses">
        <div class="enemyIcon" :style="styleIcon"></div>
        <div class="ship-hp" :class="extraHPClasses" :title="enemy.hp.now+'/'+enemy.hp.max +'   ' + Math.floor(enemy.hp.now/enemy.hp.max*100)+'%'">
            <div v-for="n in hpBarCount" class="hp-block"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PanelEnemyBattle',
        props: ['enemy'],
        computed: {
            enemyImagePath() {
                if (this.enemy.masterId)
                    return `./img/ships/${this.enemy.masterId}.png`;
                return `./img/abyss/${this.enemy.id}.png`;
            },
            styleIcon() {
                return `--icon-path: url('${this.enemyImagePath}');`;
            },
            hpBarCount() {
                let bars = Math.ceil((this.enemy.hp.now / this.enemy.hp.max) / 0.25);
                if (bars === 0 && this.enemy.hp.now > 0) return 1;
                else return bars;
            },
            extraNameClasses() {
                let extra = "";
                if (this.enemy.lvl > 99) extra += "married";
                return extra;
            },
            extraHPClasses() {
                if (this.enemy.hp.now === this.enemy.hp.max) return "hp-full";
                if (this.enemy.hp.now / this.enemy.hp.max > 0.75) return "";
                if (this.enemy.hp.now / this.enemy.hp.max > 0.5) return "hp-shouha";
                if (this.enemy.hp.now / this.enemy.hp.max > 0.25) return "hp-chuha";
                if (this.enemy.hp.now / this.enemy.hp.max > 0) return "hp-taiha";
                if (this.enemy.hp.now <= 0) return "hp-sunk";
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
