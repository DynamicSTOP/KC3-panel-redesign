Vue.component('panel-ship-battle', {
    props: ['ship', 'num'],
    computed: {
        shipImagePath() {
            return `./img/ships/${this.ship.masterId}.png`;
        },
        fuelPercent() {
            return Math.floor(this.ship.fuel[0] / this.ship.fuel[1] * 100);
        },
        ammoPercent() {
            return Math.floor(this.ship.ammo[0] / this.ship.ammo[1] * 100);
        },
        hpBarCount(){
            return Math.floor((this.ship.hp[0] / this.ship.hp[1]) / 0.25);
        },
        extraIconClasses() {
            let extra = this.extraHPClasses + " " ;
            if (this.ship.morale > 49) extra += "high-morale";
            return extra.trim();
        },
        extraNameClasses() {
            let extra = "";
            if (this.ship.lvl > 99) extra += "married";
            return extra;
        },
        extraFuelClasses() {
            if (this.ship.fuel[0] === this.ship.fuel[1])      return "fuel-100";
            if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.8) return "fuel-80";
            if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.6) return "fuel-60";
            if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.4) return "fuel-40";
            if (this.ship.fuel[0] / this.ship.fuel[1] >= 0.2) return "fuel-20";
            return "fuel-0";
        },
        extraAmmoClasses() {
            if (this.ship.ammo[0] === this.ship.ammo[1])      return "ammo-100";
            if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.8) return "ammo-80";
            if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.6) return "ammo-60";
            if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.4) return "ammo-40";
            if (this.ship.ammo[0] / this.ship.ammo[1] >= 0.2) return "ammo-20";
            return "ammo-0";
        },
        extraHPClasses(){
            if (this.ship.hp[0] / this.ship.hp[1] > 0.75) return "";
            if (this.ship.hp[0] / this.ship.hp[1] > 0.5) return "hp-shouha";
            if (this.ship.hp[0] / this.ship.hp[1] > 0.25) return "hp-chuha";
            if (this.ship.hp[0] / this.ship.hp[1] > 0) return "hp-taiha";
            if (this.ship.hp[0] === 0) return "hp-your-f____d-boooy";
        },
        /*background:*/
        style() {
            let start = this.ship.exp[0], end = start;
            if (start < 90) end += 10;
            return `--gradient: linear-gradient(to right,#64fffe ${start}%,rgba(250,0,0,0.5 ) ${end}%);`
        }
    },
    template: "#panel-ship-battle-template"

});
Vue.component('panel-header', {
    props: ['commander', 'storage', 'slots'],
    template: "#panel-header-template"
});
Vue.component('panel-main', {
    props: ["fleets","current_main_panel"],
    template: "#panel-main-template"
});
Vue.component('panel-main-top', {
    props: ["fleets","current_main_panel"],
    template: "#panel-main-top-template",
    methods:{
        switchMainTab(name){
            this.$root.$emit('switch_main_panel', name);
        }
    }
});
Vue.component('panel-ship', {
    props: ['ship', 'num'],
    computed: {
        shipImagePath() {
            return `./img/ships/${this.ship.masterId}.png`;
        },
        fuelPercent() {
            return Math.floor(this.ship.fuel[0] / this.ship.fuel[1] * 100);
        },
        ammoPercent() {
            return Math.floor(this.ship.ammo[0] / this.ship.ammo[1] * 100);
        },
        expPercent() {

        },
        extraIconClasses() {
            let extra = "";
            if (this.ship.morale > 49) extra += "high-morale";
            return extra;
        },
        extraNameClasses() {
            let extra = "";
            if (this.ship.lvl > 99) extra += "married";
            return extra;
        },
        extraFuelClasses() {
            let extra = "";
            if (this.ship.fuel[0] / this.ship.fuel[1] <= 0.6) extra += "penalty";
            return extra;
        },
        extraAmmoClasses() {
            let extra = "";
            if (this.ship.ammo[0] / this.ship.ammo[1] <= 0.6) extra += "penalty";
            return extra;
        },
        /*background:*/
        style() {
            let start = this.ship.exp[0], end = start;
            if (start < 90) end += 10;
            return `--gradient: linear-gradient(to right,#64fffe ${start}%,rgba(250,0,0,0.5 ) ${end}%);`
        }
    },
    template: "#panel-ship-template"
});
Vue.component('panel-options', {
    props: ['options'],
    data: function() {
        return {hidden: true};
    },
    template: "#panel-options-template",
});
var vm = new Vue({
    el: '#box',
    data: {
        current_main_panel:"battle",
        commander: {
            rank: "Admiral",
            name: "Tanaka-kun",
            censor: false,
            comment: "All your salt belongs to us!",
            HQ: {
                lvl: 100,
                exp: 50,
                next: 100,
                points: 5.3
            }
        },

        storage: {
            buckets: 1020,
            steel: 123456,
            bauxite: 50000,
            fuel: 5000,
            ammo: 900
        },

        slots: {
            ship: [300, 320],
            equip: [1000, 1400]
        },

        fleets: [
            [
                {
                    id: 500,
                    masterId: 357,
                    name: "Hatsuzuki kai",
                    type: "dd",
                    lvl: 140,
                    fuel: [100, 100],
                    ammo: [100, 100],
                    morale: 40,
                    exp: [30, 100],
                    hp:[100,100]
                },
                {
                    id: 600,
                    masterId: 346,
                    name: "Teruzuki kai",
                    type: "dd",
                    lvl: 99,
                    fuel: [80, 100],
                    ammo: [80, 100],
                    morale: 20,
                    exp: [85, 100],
                    hp:[75,100]
                },
                {
                    id: 700,
                    masterId: 353,
                    name: "Graf Zeppelin Kai",
                    type: "CV",
                    lvl: 99,
                    fuel: [60, 100],
                    ammo: [60, 100],
                    morale: 70,
                    exp: [60, 100],
                    hp:[50,100]
                },
                {
                    id: 800,
                    masterId: 358,
                    name: "zara kai",
                    type: "ca",
                    lvl: 80,
                    fuel: [40, 100],
                    ammo: [40, 100],
                    morale: 70,
                    exp: [97, 100],
                    hp:[25,100]
                },
                {
                    id: 900,
                    masterId: 365,
                    name: "Aquilla kai",
                    type: "CV",
                    lvl: 70,
                    fuel: [20, 100],
                    ammo: [20, 100],
                    morale: 70,
                    exp: [50, 100],
                    hp:[100,100]
                },
                {
                    id: 1000,
                    masterId: 366,
                    name: "minazuki kai",
                    type: "dd",
                    lvl: 44,
                    fuel: [0, 20],
                    ammo: [0, 25],
                    morale: 70,
                    exp: [20, 100],
                    hp:[100,100]
                }
            ]
        ],
        options:{
            mute:false
        }

    }
});

vm.$on('switch_main_panel', function (tabName) {
    vm.$data.current_main_panel = tabName;
});