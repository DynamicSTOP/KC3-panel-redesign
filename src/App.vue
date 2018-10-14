<template>
  <div id="app">
    <div id="panel">
      <panel-header :storage="storage" :slots="slots" :commander="commander"></panel-header>
      <panel-main :fleets="fleets" :enemies="enemies" :current_main_panel="current_main_panel"></panel-main>
      <div id="panel-help"></div>
    </div>
    <div id="twitter"><a href="https://twitter.com/tsekino0530" rel="noopener" target="_blank">https://twitter.com/tsekino0530</a>
    </div>
    <panel-options :options="options"></panel-options>
  </div>
</template>

<script>
import PanelHeader from '@/components/PanelHeader'
import PanelOptions from '@/components/PanelOptions'
import PanelMain from '@/components/PanelMain'

export default {
  name: 'app',
  components: {PanelHeader,PanelMain,PanelOptions}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
