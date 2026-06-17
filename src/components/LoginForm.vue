<template>
  <form class="login-form" @submit.prevent="handleLogin">
    <div class="input-group">
      <label>Email Address</label>
      <input v-model="email" type="email" placeholder="name@example.com" />
    </div>
    <div class="input-group">
      <label>Password</label>
      <input v-model="password" type="password" placeholder="••••••••" />
    </div>

    <!-- Hata mesajı eklendi -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <button type="submit" class="login-btn" :disabled="loading">
      {{ loading ? 'Logging in...' : 'Log In →' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../services/authService'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)
const router = useRouter()

const handleLogin = () => {
  errorMessage.value = ''
  loading.value = true

  const result = authService.login(email.value, password.value)

  if (result.success) {
    // Token'ı kaydet
    localStorage.setItem('token', result.token)
    // Ana sayfaya yönlendir
    router.push('/')
  } else {
    errorMessage.value = result.message
  }

  loading.value = false
}
</script>