<template>
  <div class="cart-container">
    <h1>🛒 Keranjang Belanja</h1>

    <div v-if="cartItems.length === 0">
      <p>Keranjang masih kosong.</p>
    </div>

    <div v-else>
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" class="cart-image" />
        <div class="cart-info">
          <h3>{{ item.name }}</h3>
          <p>Harga: Rp {{ item.price.toLocaleString() }}</p>
          <input type="number" v-model.number="item.quantity" min="1" @change="updateQty(item.id, item.quantity)" />
          <button @click="removeItem(item.id)">Hapus</button>
        </div>
      </div>

      <div class="cart-total">
        <p>Total: <strong>Rp {{ total.toLocaleString() }}</strong></p>
        <router-link to="/checkout">
          <button class="checkout-btn">Checkout</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'CartPage',
  setup() {
    const cart = useCartStore()
    const { items: cartItems, totalPrice: total } = storeToRefs(cart)

    const updateQty = (id, qty) => cart.updateQuantity(id, qty)
    const removeItem = (id) => cart.removeFromCart(id)

    return { cartItems, total, updateQty, removeItem }
  }
}
</script>

<style scoped>
.cart-container {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}
.cart-item {
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}
.cart-image {
  width: 100px;
  height: auto;
  margin-right: 1rem;
}
.cart-info {
  flex: 1;
}
input[type="number"] {
  width: 60px;
  margin: 0.5rem 0;
}
button {
  background-color: crimson;
  color: white;
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.checkout-btn {
  background-color: #007b8a;
  margin-top: 1rem;
}
</style>
