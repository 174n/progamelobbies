import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
//firebase
import VueFire from 'vuefire'
//timeago
import VueTimeago from 'vue-timeago'

import App from './App.vue'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.use(VueFire);

Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})


const router = new VueRouter({
    routes: Routes
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  data () {
    return {
      
    }
  }
});