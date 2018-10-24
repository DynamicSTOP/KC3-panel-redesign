<template>
    <div id="panel-options">
        <div class="head">OPTIONS</div>
        <span class="close-options" @click="toggleOptions"></span>
        <section v-for="section in sections" :key="section.id">
            <div class="title">{{ section.section }}</div>
            <div class="options">
                <panel-option v-for="option in section.contents" :option="option" :key="option.id"></panel-option>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import PanelOption from '@/components/PanelOption';

    const oConfig = [
        {
            section: "General",
            contents: [
                {
                    id: "language",
                    type: "radio",
                    text: "Language",
                    choices: [
                        {value: "en", text: "English"},
                        {value: "en2", text: "English2"}
                    ]
                },
                {
                    id: "panelBackground",
                    text: "Panel background css style",
                    type: "input"
                },
                {
                    id: "notifications",
                    text: "Notifications enabled",
                    type: "checkbox"
                }
            ]
        },
        {
            section: "Battle Panel",
            contents: [
                {
                    id: "showMoraleIcon",
                    text: "Show morale icon",
                    type: "checkbox"
                },
                {
                    id: "showFuelAmmo",
                    text: "Show fuel and ammo icons",
                    type: "checkbox"
                }
            ]
        }
    ];

    export default {
        name: 'PanelOptions',
        components: {PanelOption},
        computed: {
            ...mapGetters(['options']),
            sections() {
                const sectionsArray = [];
                for (let i in oConfig) {
                    if (!oConfig.hasOwnProperty(i)) continue;
                    sectionsArray.push(oConfig[i]);
                }
                return sectionsArray;
            }
        },
        methods: {
            toggleOptions() {
                this.$store.commit('toggleOptionsPanel');
            }
        },
        data() {
            return {};
        }
    }
</script>
