<template lang="pug">
v-layout(column justify-center align-center)
  v-flex(xs12 sm8 md6)
    v-card
      v-card-title(class="headline") Auth sample
      v-card-text
        v-form
          v-text-field(
            v-model="login"
            label="Login"
            )
          v-text-field(
            v-model="password"
            label="Password"
            )
          v-btn(@click="doLogin") Login
          no-ssr
            div(v-if="$auth.loggedIn") Hello, {{ $auth.user.name }}
</template>

<script>
export default {
  data() {
    return {
      login: null,
      password: null
    }
  },
  methods: {
    doLogin() {
      if (this.login !== 'admin' || this.password !== 'admin') {
        return
      }
      this.$auth
        .loginWith('local', {
          data: {
            phone: this.phone,
            password: this.password
          }
        })
        .then(() => {
          this.$toast.success('Logged In!')
          //this.$router.push('/samples/auth/me')
        })
        .catch(() => {
          this.$toast.error('Неверный логин или пароль!')
        })
    }
  }
}
</script>
