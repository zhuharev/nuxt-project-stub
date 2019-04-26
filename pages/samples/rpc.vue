<template lang="pug">
v-layout(column justify-center align-center)
  v-flex(xs12 sm8 md6)
    v-card
      v-card-title(class="headline") RPC sample
      v-card-text
        v-btn(@click="doApi") Do
</template>

<script>
export default {
  methods: {
    doApi() {
      this.$api.call('users.get', { userId: 1 })
    }
  }
}
</script>
