import LgButton from '../'

export default {
    title: 'LgButton',
    component: LgButton
}

export const Text = {} => ({
    components: {LgButton},
    template: '<lg-button></lg-button>',
    data () {
        return {
            value: 'admin'
        }
    }
})