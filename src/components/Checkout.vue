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
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const cart = useCartStore()
    const { totalPrice } = storeToRefs(cart)
    const total = ref(0)

    onMounted(() => {
      // Simpan nilai total sebelum mengosongkan cart
      total.value = totalPrice.value
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
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}
</style>
