<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="handleSubmit">
        <AppControlInput v-model="email" type="email" :value="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput v-model="password" type="password" :value="password"
          >Password</AppControlInput
        >
        <AppButtonInput type="submit">{{
          isLogin ? 'Login' : 'Sign Up'
        }}</AppButtonInput>
        <AppButtonInput
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButtonInput
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  data() {
    return {
      email: '',
      password: '',
      isLogin: true
    };
  },
  methods: {
    handleSubmit() {
      let authUrl = 'auth/login';
      if (!this.isLogin) {
        authUrl = 'auth/register';
      }
      this.$store
        .dispatch(authUrl, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then(res => {
          if (res && res.data.idToken) {
            this.$router.push('/');
          }
        });
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
