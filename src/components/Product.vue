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
    description: 'Layar AMOLED 6.67 inci, Kamera 108MP',
    image: 'https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-redmi-note-13-4g-2.jpg'
  },
  {
 
    id: 2,
    name: 'POCO X5 Pro 5G',
    price: 3999000,
    description: 'Snapdragon 778G, AMOLED 120Hz, Kamera 108MP',
    image: 'https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-poco-x5-pro-5g-1.jpg'

  },
  {
    id: 3,
    name: 'Vivo Y33s',
    price: 2499000,
    description: 'Kamera 50MP, RAM 8GB + Extended, Baterai 5000mAh',
    image: 'https://fdn2.mobgsm.com/vv/pics/vivo/vivo-y33s-1.jpg'
  },
  { 
    id: 4,
    name: 'Vivo V21 5G',
    price: 4899000,
    description: 'Selfie Kamera 44MP OIS, Layar AMOLED, RAM 8GB',
    image: 'https://fdn2.mobgsm.com/vv/pics/vivo/vivo-v21-5g-1.jpg'
  },
  {
    id: 5,
    name: 'Samsung Galaxy A04',
    price: 1499000,
    description: 'Layar 6.5 inci, Kamera 50MP, Baterai 5000mAh',
    image: 'https://fdn2.mobgsm.com/vv/pics/samsung/samsung-galaxy-a04-1.jpg'

  },
  {
    id: 6,
    name: 'Realme 11 Pro+',
    price: 5999000,
    description: 'Kamera 200MP, RAM 12GB, Layar AMOLED Lengkung',
    image: 'https://fdn2.mobgsm.com/vv/pics/realme/realme-11-pro-plus-1.jpg'
  },
  {
    id: 7,
    name: 'Samsung Galaxy A14',
    price: 2499000,
    description: 'Layar 6.6 inci, Kamera 50MP, Baterai 5000mAh',
    image: 'https://fdn2.mobgsm.com/vv/pics/samsung/samsung-galaxy-a14-5g-1.jpg'
  },
  {
    id: 8,
    name: 'Oppo A78',
    price: 2999000,
    description: 'RAM 8GB, Layar AMOLED, Fast Charging',
    image: 'https://fdn2.mobgsm.com/vv/pics/oppo/oppo-a78-4g-1.jpg'
  },
  {
    id: 9,
    name: 'Nokia G60',
    price: 2999000,
    description: 'Layar 6.58 inci, Kamera 50MP, Baterai 4500mAh',
    image: 'https://fdn2.mobgsm.com/vv/pics/nokia/nokia-g60-5g-1.jpg'
  },
  {
    id: 10,
    name: 'Google Pixel 7a',
    price: 5999000,
    description: 'Kamera AI, Layar OLED, Chip Google Tensor',
    image: 'https://fdn2.mobgsm.com/vv/pics/google/google-pixel-7a-1.jpg'
  },
  {
    id: 11,
    name: 'iPhone 14',
    price: 12999000,
    description: 'Kamera 12MP f/1.5, A15 Bionic, Crash Detection',
    image: 'https://fdn2.mobgsm.com/vv/pics/apple/apple-iphone-14-1.jpg'
  },
  {
    id: 12,
    name: 'Vivo X80 Pro',
    price: 12999000,
    description: 'Kamera ZEISS, Snapdragon 8 Gen 1, Layar AMOLED 120Hz',
    image: 'https://fdn2.mobgsm.com/vv/pics/vivo/vivo-x80-pro-1.jpg'
  },
  {
    id: 13,
    name: 'OPPO A98 5G',
    brand: 'Oppo',
    price: 4999000,
    description: 'Layar 120Hz, Snapdragon 695 5G, Baterai 5000mAh',
    image: 'https://fdn2.mobgsm.com/vv/pics/oppo/oppo-a98-5g-1.jpg'
  },
  {
    id: 14,
    name: 'Huawei Nova 11 Pro',
    brand: 'Huawei',
    price: 7499000,
    description: 'Dual selfie camera, OLED 120Hz, Snapdragon 778G 4G',
    image: 'https://fdn2.mobgsm.com/vv/pics/huawei/huawei-nova11-pro-1.jpg'
  },
  {
    id: 15,
    name: 'OPPO Reno8 T',
    brand: 'Oppo',
    price: 4499000,
    description: 'Layar AMOLED, kamera 100MP, dan desain premium',
    image: 'https://fdn2.mobgsm.com/vv/pics/oppo/oppo-reno8-t-1.jpg'
  },
  {
    id: 16,
    name: 'Realme GT Neo 6',
    brand: 'Realme',
    price: 7199000,
    description: 'Snapdragon 8s Gen 3, Layar AMOLED 144Hz',
    image: 'https://fdn2.mobgsm.com/vv/pics/realme/realme-gt-neo6-1.jpg'
  },
  {
    id: 17,
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 18999000,
    description: 'Snapdragon 8 Gen 3, Layar LTPO AMOLED 120Hz',
    image: 'https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-14-ultra-1.jpg'
  },
  {
    id: 53,
    name: 'Nokia G42 5G',
    brand: 'Nokia',
    price: 3199000,
    description: 'Snapdragon 480+ 5G, RAM 6GB, layar 90Hz, Android 13',
    image: 'https://fdn2.mobgsm.com/vv/pics/nokia/nokia-g42-5g-1.jpg'
  }
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