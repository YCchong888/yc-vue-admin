<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <div class="login-form-wrap">
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
      <a class="login-form-forgot">Forgot password</a>
    </div>

    <a-form-item>
      <a-button
        :disabled="disabled"
        type="primary"
        html-type="submit"
        class="login-form-button"
      >Log in</a-button>Or
      <a>register now!</a>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useUserStore } from "@/store/modules/user";
import { useRouter } from "vue-router";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const useStore = useUserStore();
    const router = useRouter();
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      //mock 登录请求
      useStore.login({
        unserAcount: values.username,
        passward: values.password
      });
      console.log('Success:', values);
    };

    /** */
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },
});
</script>
<style lang="less" scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#components-form-demo-normal-login .login-form-forgot {
  margin-bottom: 24px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
