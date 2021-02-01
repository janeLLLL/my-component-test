import LgInput from '../'

export default {
    title: 'LgInput',
    component: LgInput
}

export const Text = {} => ({
    components: {LgInput},
    template: '<lg-input></lg-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})