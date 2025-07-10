<template>
  <div id="app">
    <nav class="navbar">
      <!-- Logo di kiri -->
      <router-link to="/" class="logo-container">
        <img src="@/assets/logo/Kubang Store.jpg" alt="Kubang Store Logo" class="logo" />

      </router-link>

      <!-- Navigasi utama di tengah -->
      <div class="nav-left">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/product" class="nav-link">Product</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>

      <!-- Login/Logout di kanan -->
      <div class="nav-right">
        <router-link v-if="!isLoggedIn" to="/login" class="login-button">Login</router-link>
        <button v-if="showLogout" @click="logout" class="logout-button">Logout</button>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { useUserStore } from './stores/userStore'

export default {
  name: 'App',
  computed: {
    isLoggedIn() {
      const userStore = useUserStore()
      return userStore.user !== null
    },
    showLogout() {
      return this.isLoggedIn && this.$route.name !== 'Login'
    }
  },
  methods: {
    logout() {
      const userStore = useUserStore()
      userStore.logout()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f6f8;
  color: #333;
}

#app {
  text-align: center;
}

.navbar {
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-right: 30px;
}

.logo {
  height: 70px;
  margin-right: 0px;
}

.logo-text {
  font-size: 1.3rem;
  font-weight: bold;
}

.nav-left {
  display: flex;
  gap: 50px;
  justify-content: center;
  flex: 1;
  margin-right: 150px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #18bc9c;
}

.nav-right {
  position: absolute;
  right: 40px;
  top: 45px;
}

.login-button {
  background-color: #3498db;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;
}

.login-button:hover {
  background-color: #2980b9;
}

.logout-button {
  background-color: #c6c1c1;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.logout-button:hover {
  background-color: #dedad9;
}

.main-content {
  padding: 40px 20px;
}

h1, h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

p {
  font-size: 18px;
  color: #555;
  max-width: 600px;
  margin: 0 auto 20px;
  line-height: 1.6;
}

.product-summary, .contact-box, .about-box {
  background: white;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
</style>
