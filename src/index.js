import f7 from './f7'

import './methods/navbar'
import './methods/toolbar'
import './methods/panel'

import SearchBar from './components/searchbar.vue'

function install (Vue) {
  Vue.prototype.$f7 = f7
  regComponent(SearchBar)

  function regComponent (component) {
    Vue.component(component.name, component)
  }
}

export default install

// auto install
const { Vue } = window
if (Vue) {
  Vue.use(install)
}
