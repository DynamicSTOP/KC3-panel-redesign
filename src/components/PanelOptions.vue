<template>
    <div id="panel-options">
        <div class="title head">OPTIONS</div>
        <span class="close-options" @click="toggleOptions"></span>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'PanelOptions',
        computed: {
            ...mapGetters(['options'])
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
