import LgForm from '../'
import LgFormItem from '../../formitem'
import LgInput from '../../input'
import LgButton from '../../button'


export default {
    title: 'LgForm',
    component: LgForm
}

export const Login = () => ({
    components: { LgForm, LgFormItem, LgInput, LgButton },
    template: `
    <lg-form class="form" ref="form" :model="user" :rules="rules">
      <lg-form-item label="用户名" prop="username">
        <!-- <lg-input v-model="user.username"></lg-input> -->
        <lg-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></lg-input>
      </lg-form-item>
      <lg-form-item label="密码" prop="password">
        <lg-input type="password" v-model="user.password"></lg-input>
      </lg-form-item>
      <lg-form-item>
        <lg-button type="primary" @click="login">登 录</lg-button>
      </lg-form-item>
    </lg-form>
    `
})