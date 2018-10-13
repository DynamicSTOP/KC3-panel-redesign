Vue.component('panel-ship-battle', {
    props: ['ship', 'num'],
    computed: {
        shipImagePath() {
            return `./img/ships/${this.ship.masterId}.png`;
        },
        styleIcon() {
            return `--icon-path: url('${this.shipImagePath}');`;
        },
        hpBarCount() {
            let bars = Math.ceil((this.ship.hp.now / this.ship.hp.max) / 0.25);
            if (bars === 0 && this.ship.hp.now > 0) return 1;
            else return bars;
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
    },
    template: "#panel-ship-battle-template"

});
Vue.component('panel-enemy-battle', {
    props: ['enemy', 'num'],
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
    },
    template: "#panel-enemy-battle-template"
});
Vue.component('panel-header', {
    props: ['commander', 'storage', 'slots'],
    computed: {
        expBar() {
            let start = this.commander.HQ.exp, end = this.commander.HQ.next;
            if (start < 90) end = start + 10;
            return `--gradient: linear-gradient(to right, green ${start}%, rgba(250, 0, 0, 0.5) ${end}%);`
        }
    },
    template: "#panel-header-template"
});
Vue.component('panel-main', {
    props: ["fleets", "current_main_panel", "enemies"],
    template: "#panel-main-template"
});
Vue.component('panel-main-top', {
    props: ["fleets", "current_main_panel"],
    template: "#panel-main-top-template",
    methods: {
        switchMainTab(name) {
            this.$root.$emit('switch_main_panel', name);
        }
    }
});
Vue.component('panel-options', {
    props: ['options'],
    data: function () {
        return {hidden: true};
    },
    template: "#panel-options-template",
});
var vm = new Vue({
    el: '#box',
    data: {
        current_main_panel: "battle",
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
            buckets: 100,
            steel: 30000,
            bauxite: 30000,
            fuel: 30000,
            ammo: 30000
        },

        slots: {
            ship: [80, 100],
            equip: [400, 520]
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
                    hp: {now: 100, max: 100, lost: 0}
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
                    hp: {now: 100, max: 100, lost: 0}
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
                    hp: {now: 100, max: 100, lost: 0}
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
                    hp: {now: 100, max: 100, lost: 0}
                },
                {
                    id: 900,
                    masterId: 365,
                    name: "Aquilla kai",
                    type: "CV",
                    lvl: 70,
                    fuel: [20, 100],
                    ammo: [20, 100],
                    morale: 37,
                    exp: [50, 100],
                    hp: {now: 100, max: 100, lost: 0}
                },
                {
                    id: 1000,
                    masterId: 366,
                    name: "minazuki kai",
                    type: "dd",
                    lvl: 44,
                    fuel: [0, 20],
                    ammo: [0, 25],
                    morale: 0,
                    exp: [20, 100],
                    hp: {now: 100, max: 100, lost: 0}
                }
            ]
        ],
        options: {
            mute: false
        },
        enemies: []
    }
});

vm.$on('switch_main_panel', function (tabName) {
    vm.$data.current_main_panel = tabName;
});


/****************************************************/
/****************************************************/
/****************************************************/
//just filling with random data
const enemy_ids = [589, 601, 807, 562, 810, 501];
const count = Math.ceil(Math.random() * 5 + 1);
let enemies = [];
for (let i = 0; i < count; i++) {
    const sunk = Math.random() > 0.6;
    const enemy = {
        id: enemy_ids[Math.floor(Math.random() * 6)],
        lvl: Math.ceil(Math.random() * 30),
        hp: {
            max: 20 + Math.ceil(Math.random() * 20)
        }
    };
    enemy.hp.now = sunk ? 0 : (Math.floor(Math.random() * (enemy.hp.max - 1)) + 1);
    enemies.push(enemy);
}
;

vm.$data.enemies = enemies;

vm.$data.storage = {
    buckets: Math.ceil(Math.random() * 2000),
    steel: Math.ceil(Math.random() * 300000),
    bauxite: Math.ceil(Math.random() * 300000),
    fuel: Math.ceil(Math.random() * 300000),
    ammo: Math.ceil(Math.random() * 300000)
};

const slot_limit = 390;
const slot_exp_num = Math.floor(Math.random() * ((slot_limit - 100) / 10));
vm.$data.slots = {
    ship: [100 + 10 * slot_exp_num - Math.floor(Math.random() * 50), 100 + 10 * slot_exp_num],
    equip: [520 + 40 * slot_exp_num - Math.floor(Math.random() * 200), 520 + 40 * slot_exp_num]
};
vm.$data.commander.HQ = {
    lvl: 10 + Math.ceil(Math.random() * (120 - 10)),
    exp: Math.floor(Math.random() * 100),
    next: 100,
    points: Math.floor(Math.random() * 500) / 10
};

vm.$data.fleets.map((f) => f.map((ship) => {
    ship.morale = Math.floor(Math.random() * 100);
    const hp_max = 20 + Math.ceil(Math.random() * 20);
    const hp_now = Math.ceil(Math.random() * (hp_max - 1)) + 1;
    ship.hp = {
        max: hp_max,
        now: hp_now,
        lost: Math.floor(Math.random() * (hp_max - hp_now))
    };
    ship.fuel = [(Math.ceil(Math.random() * 30)), 30];
    ship.ammo = [(Math.ceil(Math.random() * 30)), 30]
}));