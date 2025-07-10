<template>
  <div class="product-container">
    <h1 class="title">Product HP</h1>

    <div v-if="showNotification" class="notification">
      {{ notificationMessage }}
    </div>

    <div class="product-grid">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-desc">{{ product.description }}</p>
        <p class="product-price">Rp {{ product.price.toLocaleString('id-ID') }}</p>
        <button class="add-to-cart-btn" @click="addToCart(product)">
          🛒 Tambah ke Keranjang
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
const cart = useCartStore()

const showNotification = ref(false)
const notificationMessage = ref('')

function addToCart(product) {
  cart.addToCart(product)
  notificationMessage.value = `${product.name} telah ditambahkan ke keranjang!`
  showNotification.value = true
  setTimeout(() => {
    showNotification.value = false
  }, 2500)
}

const products = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 13',
    price: 2499000,
    description: 'Layar AMOLED 6.67 inci, Kamera 108MP, Baterai 5000mAh',
    image: 'https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-redmi-note-13-4g-2.jpg'
  },
  {
    id: 2,
    name: 'Realme C51',
    price: 1599000,
    description: 'RAM 4GB+4GB, Layar 6.7\", Fast Charging 33W',
    image: 'https://fdn2.mobgsm.com/vv/pics/realme/realme-c51-4.jpg'
  },
  {
    id: 3,
    name: 'Infinix Hot 40i',
    price: 1749000,
    description: 'Storage 128GB, Kamera AI 50MP, Desain stylish',
    image: 'https://fdn2.mobgsm.com/vv/pics/infinix/infinix-hot-40i-2.jpg'
  },
  {
    id: 4,
    name: 'Vivo Y36',
    price: 2599000,
    description: 'RAM 8GB, Storage 256GB, Desain Premium',
    image: 'https://fdn2.mobgsm.com/vv/pics/vivo/vivo-y36-2.jpg'
  },
  {
    id: 5,
    name: 'Infinix Zero 5G 2023',
    price: 2899000,
    description: 'Dimensity 920, RAM 8GB, Kamera 50MP',
    image: 'https://fdn2.mobgsm.com/vv/pics/infinix/infinix-zero-5g-2023-2.jpg'
  },
  {
    id: 6,
    name: 'iPhone SE 2022',
    price: 7999000,
    description: 'Chip A15 Bionic, Kamera 12MP, Touch ID',
    image: 'https://fdn2.mobgsm.com/vv/pics/apple/apple-iphone-se-2022-1.jpg'
  },
]
</script>

<style scoped>
.product-container {
  padding: 1.5rem;
  background-color: #f4f7fa;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #0b3c5d;
  margin-bottom: 1.5rem;
}

.notification {
  background-color: #28a745;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  animation: fadeInOut 2.5s ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: white;
  border-radius: 20px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.product-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.product-desc {
  font-size: 0.9rem;
  color: #555;
  min-height: 45px;
  margin-bottom: 0.5rem;
}

.product-price {
  font-weight: bold;
  color: #007f00;
  margin-bottom: 0.8rem;
}

.add-to-cart-btn {
  background-color: orange;
  color: white;
  font-weight: bold;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s;
}

.add-to-cart-btn:hover {
  background-color: darkorange;
}
</style>