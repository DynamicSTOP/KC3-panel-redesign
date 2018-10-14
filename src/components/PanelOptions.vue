<template>
    <div id="panel-options" :class="{hidden:hidden}">
      <div class="switch" v-on:click="hidden=!hidden">{{ hidden ? "&lt;" : "&gt;" }}</div>
      <div class="mute"></div>
    </div>
</template>

<script>
    export default {
        name: 'PanelOptions',
        props: ['options'],
        data: function () {
            return {hidden: true};
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
