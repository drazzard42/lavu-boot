import './bootstrap.js'

import Vue from 'vue'
import VTooltip from 'v-tooltip'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(fas, fab, far)

Vue.use(VTooltip)

Vue.component('app', () => import( /* webpackChunkName: 'main' */ './components/app.vue'))
Vue.component('construction', () => import( /* webpackChunkName: 'construction' */ './components/construction.vue'))
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

const app = new Vue({
  el: '#app'
})
