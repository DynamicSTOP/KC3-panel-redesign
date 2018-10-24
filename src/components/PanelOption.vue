<template>
    <div class="panel-option">
        <div class="option-name">{{option.text || option.id}}</div>
        <div class="option-box" v-if="option.type==='input'">
            <input type="text" :value="options[option.id] || option.default" @keyup="changed" @change="changed"
                   :placeholder="option.placeholder"/>
        </div>
        <div class="option-box" v-else-if="option.type==='radio'">
            <div v-for="choice in option.choices" :key="option.id+'_'+choice.value">
                <input type="radio" :name="'option_'+option.id" :id="'option_'+choice.value"
                       :checked="options[option.id] && options[option.id]===choice.value" @change="changed"
                       :value="choice.value"/>
                <label :for="'option_'+choice.value">{{choice.text}}</label>
            </div>
        </div>
        <div class="option-box" v-else-if="option.type==='checkbox'">
            <input type="checkbox" @change="changed" :checked="options[option.id] && options[option.id]==='on'"/>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        name: "PanelOption",
        props: ["option"],
        computed: {
            ...mapGetters(['options']),
        },
        methods: {
            changed(event) {
                this.$store.commit('optionChanged', {id: this.option.id, value: event.target.value});
            }
        },
        data() {
            return {};
        }
    }
</script>
