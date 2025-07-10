<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Selamat Datang di <span class="brand">Kubang Store</span></h1>
        <p>Toko online terpercaya dengan produk berkualitas dan harga terjangkau.</p>
        <router-link to="/product" class="cta-button">Belanja Sekarang</router-link>
      </div>
    </section>

    <!-- Feature Section -->
    <section class="features">
      <h2>Mengapa Belanja di Kubang Store?</h2>
      <div class="feature-grid">
        <div class="feature-item">
          <img :src="trustIcon" alt="Terpercaya" />
          <h3>Terpercaya</h3>
          <p>Ribuan pelanggan puas di seluruh Indonesia.</p>
        </div>
        <div class="feature-item">
          <img :src="qualityIcon" alt="Berkualitas" />
          <h3>Produk Berkualitas</h3>
          <p>Hanya produk original & bergaransi resmi.</p>
        </div>
        <div class="feature-item">
          <img :src="deliveryIcon" alt="Pengiriman Cepat" />
          <h3>Pengiriman Cepat</h3>
          <p>Dikirim dalam 24 jam setelah pembayaran.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import trustIcon from '../assets/icons/trust.png';
import qualityIcon from '../assets/icons/quality.png';
import deliveryIcon from '../assets/icons/delivery.png';

export default {
  name: "HomePage",
  data() {
    return {
      trustIcon,
      qualityIcon,
      deliveryIcon,
    };
  },
};
</script>

<style scoped>
.home-container {
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

/* Hero Section */
.hero {
  background: linear-gradient(to right, #2193b0, #6dd5ed);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.hero-content .brand {
  color: #fff700;
  font-weight: bold;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #fff700;
  color: #333;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #ffeb3b;
  transform: translateY(-2px);
}

/* Features Section */
.features {
  padding: 3rem 2rem;
  text-align: center;
  background-color: #f7f9fb;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #007b8a;
}

.feature-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.feature-item {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  max-width: 280px;
  text-align: center;
  transition: 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

.feature-item img {
  width: 60px;
  margin-bottom: 1rem;
}

.feature-item h3 {
  margin-bottom: 0.5rem;
  color: #007b8a;
}

.feature-item p {
  font-size: 0.95rem;
  color: #555;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
