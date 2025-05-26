<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
      <router-link to="/product" class="nav-link">Product</router-link>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Reset dan gaya dasar */
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

/* Navbar styling */
.navbar {
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #18bc9c;
}

/* Content styling */
.main-content {
  padding: 40px 20px;
}

/* Page layout */
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

/* Card styling for sections */
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

/* Button styling */
.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #18bc9c;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #149b82;
}

/* Product image styling */
.product-image {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>
