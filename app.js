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
        extraNameClasses(){
            let extra = "";
            if (this.ship.lvl > 99) extra += "married";
            return extra;
        },
        extraFuelClasses(){
            let extra = "";
            if (this.ship.fuel[0] / this.ship.fuel[1] <= 0.6) extra += "penalty";
            return extra;
        },
        extraAmmoClasses(){
            let extra = "";
            if (this.ship.ammo[0] / this.ship.ammo[1] <= 0.6) extra += "penalty";
            return extra;
        },
        /*background:*/
        style(){
            let start = this.ship.exp[0], end = start;
            if (start < 90) end += 10;
            return `--gradient: linear-gradient(to right,#64fffe ${start}%,rgba(250,0,0,0.5 ) ${end}%);`
        }
    },
    template:
    '<div class="ship ship-main" v-bind:class="extraIconClasses">' +
    '<img :src="shipImagePath">' +
    '<div class="name" v-bind:class="extraNameClasses">{{ ship.name }}</div>' +
    '<div class="exp" v-bind:style="style"></div>' +
    '<div class="type">{{ ship.type }}</div>' +
    '<div class="lvl">{{ ship.lvl }}</div>' +
    '<div class="refuel-box">' +
    '<div class="ship-fuel" v-bind:class="extraFuelClasses">{{ fuelPercent }}%</div>' +
    '<div class="ship-ammo" v-bind:class="extraAmmoClasses">{{ ammoPercent }}%</div>' +
    '</div>' +
    '</div>'
});

new Vue({
    el: '#box',
    data: {
        commander: {
            rank: "Admiral",
            name: "Tanaka-kun",
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
                    fuel: [10, 20],
                    ammo: [20, 25],
                    morale: 40,
                    exp:[30,100]
                },
                {
                    id: 600,
                    masterId: 330,
                    name: "Teruzuki kai",
                    type: "dd",
                    lvl: 99,
                    fuel: [10, 20],
                    ammo: [20, 25],
                    morale: 20,
                    exp:[85,100]
                },
                {
                    id: 700,
                    masterId: 353,
                    name: "Graf Zeppelin Kai",
                    type: "CV",
                    lvl: 99,
                    fuel: [10, 40],
                    ammo: [20, 50],
                    morale: 70,
                    exp:[60,100]
                },
                {
                    id: 800,
                    masterId: 358,
                    name: "zara kai",
                    type: "ca",
                    lvl: 80,
                    fuel: [30, 30],
                    ammo: [35, 35],
                    morale: 70,
                    exp:[97,100]
                },
                {
                    id: 900,
                    masterId: 365,
                    name: "Aquilla kai",
                    type: "CV",
                    lvl: 70,
                    fuel: [40, 60],
                    ammo: [50, 55],
                    morale: 70,
                    exp:[50,100]
                },
                {
                    id: 1000,
                    masterId: 366,
                    name: "minazuki kai",
                    type: "dd",
                    lvl: 44,
                    fuel: [10, 20],
                    ammo: [20, 25],
                    morale: 70,
                    exp:[20,100]
                }
            ]
        ]

    }
});