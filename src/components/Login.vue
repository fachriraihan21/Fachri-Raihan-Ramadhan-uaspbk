<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <label for="username">Username</label>
      <input id="username" v-model="username" type="text" placeholder="Masukkan username" required />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="Masukkan password" required />

      <button type="submit">Login</button>
    </form>

    <p class="switch-text">
      Belum punya akun?
      <router-link to="/register" class="register-link">Daftar di sini</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // logika autentikasi disini
      // contoh:
      // this.$store.dispatch('login', {username: this.username, password: this.password})
    }
  }
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
}

label {
  display: block;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 6px;
  color: #34495e;
}

input {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #bdc3c7;
  border-radius: 6px;
  font-size: 15px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #2980b9;
}

button {
  margin-top: 25px;
  width: 100%;
  padding: 12px;
  background-color: #2980b9;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgb(41 128 185 / 0.5);
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1c5d8f;
}

.switch-text {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #7f8c8d;
}

.register-link {
  color: #2980b9;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin-left: 5px;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
