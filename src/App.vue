<template>
  <div id="app">
    <nav class="navbar">
      <!-- Logo -->
      <router-link to="/" class="logo-container">
        <img src="@/assets/logo/Kubang Store.jpg" alt="Kubang Store Logo" class="logo" />
      </router-link>

      <!-- Navigasi -->
      <div class="nav-left">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/product" class="nav-link">Product</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>

      <!-- Ikon Keranjang, Login, Logout -->
      <div class="nav-right">
        <router-link to="/cart" class="cart-icon-wrapper" title="Lihat Keranjang">
          <img src="@/assets/icons/shopping-cart.png" alt="Cart" class="cart-icon" />
          <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
        </router-link>

        <router-link v-if="!isLoggedIn" to="/login" class="login-button">Login</router-link>
        <button v-if="showLogout" @click="logout" class="logout-button">Logout</button>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { useUserStore } from './stores/userStore'
import { useCartStore } from './stores/cartStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'App',
  setup() {
    const cart = useCartStore()
    const { totalItems } = storeToRefs(cart)
    return { totalItems }
  },
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
/* Global & Layout */
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

/* Navbar */
.navbar {
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  align-items: center;
  position: relative;
}

/* Logo */
.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-right: 30px;
}

.logo {
  height: 70px;
}

/* Menu Tengah */
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

/* Kanan: Cart & Auth */
.nav-right {
  position: absolute;
  right: 40px;
  top: 45px;
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Cart Ikon */
.cart-icon-wrapper {
  position: relative;
  cursor: pointer;
}

.cart-icon {
  width: 30px;
  height: 30px;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background: #e74c3c;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 3px 7px;
}

/* Login & Logout */
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
</style>
