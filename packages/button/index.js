import LgButton from './src/button.vue'

LgButton.install = Vue => {
    Vue.component(LgButton.name, Button)
}

export default LgButton