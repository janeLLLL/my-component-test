import { template } from '@babel/core'
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

export const Password = () => {
    components: { LgInput },
    template: '<LgInput type="password"></LgInput>'
}