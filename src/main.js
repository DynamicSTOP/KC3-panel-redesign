import Vue from 'vue'
// import PanelHeader from ''
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

const vm = new Vue({
  store,
  render: h => h(App)
}).$mount('#box');

vm.$on('switch_main_panel', function (tabName) {
    vm.$data.current_main_panel = tabName;
});
