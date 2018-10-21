<template>
    <div class="ship ship-main" :class="extraIconClasses">
        <div class="shipIcon" :style="styleIcon"></div>
        <div class="ship-hp" :class="extraHPClasses" :title="ship.hp.now+'/'+ship.hp.max+'  lost '+ship.hp.lost+' hp'">
            <div v-for="n in hpBarCount" class="hp-block" :key="'c'+n"></div>
            <div v-for="n in hpLostBarCount" class="hp-block hp-block-lost" :key="'l'+n"></div>
        </div>
        <div class="status-box">
            <div class="ship-morale" :class="moraleClass" :title="ship.morale"></div>
            <div class="ship-fuel" :class="extraFuelClasses"
                 :title="ship.fuel[0]+'/'+ship.fuel[1]+'  '+Math.floor(ship.fuel[0]/ship.fuel[1]*100)+'%'"></div>
            <div class="ship-ammo" :class="extraAmmoClasses"
                 :title="ship.ammo[0]+'/'+ship.ammo[1]+'  '+Math.floor(ship.ammo[0]/ship.ammo[1]*100)+'%'"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PanelShipBattle',
        props: ['ship'],
        computed: {
            shipImagePath() {
                return require(`../assets/img/ships/${this.ship.masterId}.png`);
            },
            styleIcon() {
                return `--icon-path: url('${this.shipImagePath}');`;
            },
            hpBarCount() {
                let bars = Math.ceil((this.ship.hp.now / this.ship.hp.max) / 0.25);
                if (bars === 0 && this.ship.hp.now > 0) return 1;
                else return bars;
            },
            hpLostBarCount() {
                let bars_was = Math.ceil(((this.ship.hp.now + this.ship.hp.lost) / this.ship.hp.max) / 0.25);
                return bars_was - this.hpBarCount;
            },
            extraIconClasses() {
                let extra = this.extraHPClasses + " ";
                if (this.ship.morale > 49) extra += "high-morale";
                return extra.trim();
            },
            extraNameClasses() {
                let extra = "";
                if (this.ship.lvl > 99) extra += "married";
                return extra;
            },
            extraFuelClasses() {
                if (this.ship.fuel[0] === this.ship.fuel[1]) return "fuel-100";
                if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.8) return "fuel-80";
                if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.6) return "fuel-60";
                if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.4) return "fuel-40";
                if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.2) return "fuel-20";
                return "fuel-0";
            },
            extraAmmoClasses() {
                if (this.ship.ammo[0] === this.ship.ammo[1]) return "ammo-100";
                if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.8) return "ammo-80";
                if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.6) return "ammo-60";
                if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.4) return "ammo-40";
                if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.2) return "ammo-20";
                return "ammo-0";
            },
            extraHPClasses() {
                if (this.ship.hp.now === this.ship.hp.max) return "hp-full";
                if (this.ship.hp.now / this.ship.hp.max > 0.75) return "";
                if (this.ship.hp.now / this.ship.hp.max > 0.5) return "hp-shouha";
                if (this.ship.hp.now / this.ship.hp.max > 0.25) return "hp-chuha";
                if (this.ship.hp.now / this.ship.hp.max > 0) return "hp-taiha";
                if (this.ship.hp.now === 0) return "hp-sunk";
            },
            moraleClass() {
                if (this.ship.morale >= 50) return "moraleHigh";
                if (this.ship.morale >= 40) return "moraleNormal";
                if (this.ship.morale >= 30) return "moraleLow";
                // if (this.morale >= 20) return "moraleBad";
                return "moraleBad";
            },
            /*background:*/
            style() {
                let start = this.ship.exp[0], end = start;
                if (start < 90) end += 10;
                return `--gradient: linear-gradient(to right,#64fffe ${start}%,rgba(250,0,0,0.5 ) ${end}%);`
            }
        }
    }
</script>