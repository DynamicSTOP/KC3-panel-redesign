import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const slot_limit = 390;
const slot_exp_num = Math.floor(Math.random() * ((slot_limit - 100) / 10));
let slots = {
    ship: [100 + 10 * slot_exp_num - Math.floor(Math.random() * 50), 100 + 10 * slot_exp_num],
    equip: [520 + 40 * slot_exp_num - Math.floor(Math.random() * 200), 520 + 40 * slot_exp_num]
};

let commander = {
    rank: "Admiral",
    name: "Tanaka-kun",
    censor: false,
    comment: "All your salt belongs to us!",
    HQ: {
        lvl: 10 + Math.ceil(Math.random() * (120 - 10)),
        exp: Math.floor(Math.random() * 100),
        next: 100,
        points: Math.floor(Math.random() * 500) / 10
    }
};

let storage = {
    buckets: Math.ceil(Math.random() * 2000),
    steel: Math.ceil(Math.random() * 300000),
    bauxite: Math.ceil(Math.random() * 300000),
    fuel: Math.ceil(Math.random() * 300000),
    ammo: Math.ceil(Math.random() * 300000)
};

let enemies = [];

let fleets = [
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
];

const enemy_ids = [589, 601, 807, 562, 810, 501];
const count = Math.ceil(Math.random() * 5 + 1);
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

fleets.map((f) => f.map((ship) => {
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

let options = {
    mute: false
};


export default new Vuex.Store({
    state: {
        currentMainTab: "battle",
        commander,
        storage,
        slots,
        fleets,
        options,
        enemies
    },
    getters: {
        currentMainTab: state => state.currentMainTab,
        commander: state => state.commander,
        storage: state => state.storage,
        slots: state => state.slots,
        fleets: state => state.fleets,
        options: state => state.options,
        enemies: state => state.enemies
    },
    mutations: {
        switchMainTab(state, tabName) {
            state.currentMainTab = tabName;
        }
    },
    actions: {}
})
