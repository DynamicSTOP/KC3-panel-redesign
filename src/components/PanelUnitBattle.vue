<template>
    <div class="unit" :class="extraUnitClasses">
        <div class="unitIcon" :style="styleIcon"></div>
        <div class="unit-hp" :class="extraHPClasses" :title="hpBarTitle">
            <div v-for="n in hpBarCount" class="hp-block" :key="'c'+n"></div>
            <div v-for="n in hpLostBarCount" v-if="side==='ally'"
                 class="hp-block hp-block-lost" :key="'l'+n"></div>
        </div>
        <div class="status-box" v-if="side==='ally'">
            <div class="unit-morale" :class="moraleClass" :title="unit.morale"></div>
            <div class="unit-fuel" :class="extraFuelClasses" :title="fuelTitle"></div>
            <div class="unit-ammo" :class="extraAmmoClasses" :title="ammoTitle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PanelUnitBattle',
        props: ['unit', 'side'],
        computed: {
            unitImagePath() {
                if (this.unit.masterId)
                    return require(`../assets/img/ships/${this.unit.masterId}.png`);
                return require(`../assets/img/abyss/${this.unit.id}.png`);
            },
            hpBarTitle() {
                if (this.side === 'ally') {
                    return this.unit.hp.now + '/' + this.unit.hp.max + '  lost ' + this.unit.hp.lost + ' hp';
                } else {
                    return this.unit.hp.now + '/' + this.unit.hp.max + '   ' + Math.floor(this.unit.hp.now / this.unit.hp.max * 100) + '%'
                }
            },
            fuelTitle(){
                return this.unit.fuel[0]+'/'+this.unit.fuel[1]+'  '+Math.floor(this.unit.fuel[0]/this.unit.fuel[1]*100)+'%'
            },
            ammoTitle(){
                return this.unit.ammo[0]+'/'+this.unit.ammo[1]+'  '+Math.floor(this.unit.ammo[0]/this.unit.ammo[1]*100)+'%'
            },
            styleIcon() {
                return `--icon-path: url('${this.unitImagePath}');`;
            },
            hpBarCount() {
                let bars = Math.ceil((this.unit.hp.now / this.unit.hp.max) / 0.25);
                if (bars === 0 && this.unit.hp.now > 0) return 1;
                else return bars;
            },
            hpLostBarCount() {
                if (this.side !== "ally") return;
                let bars_was = Math.ceil(((this.unit.hp.now + this.unit.hp.lost) / this.unit.hp.max) / 0.25);
                return bars_was - this.hpBarCount;
            },
            extraUnitClasses() {
                let extra = this.extraIconClasses + " ";

                return extra.trim();
            },
            extraIconClasses() {
                let extra = this.extraHPClasses + " ";
                if (this.unit.morale > 49) extra += "high-morale";
                return extra.trim();
            },
            extraNameClasses() {
                let extra = "";
                if (this.unit.lvl > 99) extra += "married";
                return extra;
            },
            extraFuelClasses() {
                if (this.unit.fuel[0] === this.unit.fuel[1]) return "fuel-100";
                if (this.unit.fuel[0] / this.unit.fuel[1] >= 0.8) return "fuel-80";
                if (this.unit.fuel[0] / this.unit.fuel[1] >= 0.6) return "fuel-60";
                if (this.unit.fuel[0] / this.unit.fuel[1] >= 0.4) return "fuel-40";
                if (this.unit.fuel[0] / this.unit.fuel[1] >= 0.2) return "fuel-20";
                return "fuel-0";
            },
            extraAmmoClasses() {
                if (this.unit.ammo[0] === this.unit.ammo[1]) return "ammo-100";
                if (this.unit.ammo[0] / this.unit.ammo[1] >= 0.8) return "ammo-80";
                if (this.unit.ammo[0] / this.unit.ammo[1] >= 0.6) return "ammo-60";
                if (this.unit.ammo[0] / this.unit.ammo[1] >= 0.4) return "ammo-40";
                if (this.unit.ammo[0] / this.unit.ammo[1] >= 0.2) return "ammo-20";
                return "ammo-0";
            },
            extraHPClasses() {
                if (this.unit.hp.now === this.unit.hp.max) return "hp-full";
                if (this.unit.hp.now / this.unit.hp.max > 0.75) return "";
                if (this.unit.hp.now / this.unit.hp.max > 0.5) return "hp-shouha";
                if (this.unit.hp.now / this.unit.hp.max > 0.25) return "hp-chuha";
                if (this.unit.hp.now / this.unit.hp.max > 0) return "hp-taiha";
                if (this.unit.hp.now === 0) return "hp-sunk";
            },
            moraleClass() {
                if (this.unit.morale >= 50) return "moraleHigh";
                if (this.unit.morale >= 40) return "moraleNormal";
                if (this.unit.morale >= 30) return "moraleLow";
                // if (this.morale >= 20) return "moraleBad";
                return "moraleBad";
            },
            /*background:*/
            style() {
                let start = this.unit.exp[0], end = start;
                if (start < 90) end += 10;
                return `--gradient: linear-gradient(to right,#64fffe ${start}%,rgba(250,0,0,0.5 ) ${end}%);`
            }
        }
    }
</script>