<template>
  <div class="checkout-page">
    <h1>✅ Checkout Berhasil!</h1>
    <p>Terima kasih telah berbelanja di <strong>Kubang Store</strong>.</p>
    <p>Total pembayaran: <strong>Rp {{ total.toLocaleString() }}</strong></p>
    <router-link to="/">
      <button>Kembali ke Beranda</button>
    </router-link>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const cart = useCartStore()
    const { totalPrice: total } = storeToRefs(cart)

    onMounted(() => {
      cart.clearCart()
    })

    return { total }
  }
}
</script>

<style scoped>
.checkout-page {
  padding: 2rem;
  text-align: center;
}
button {
  margin-top: 1.5rem;
  background-color: #007b8a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
