[media pointer="file-service://file-LAGQszRxEQjwh7ADXE2ux9"]
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

          <div class="qty-controls">
            <button @click="decreaseQty(item.id)">−</button>
            <input type="number" :value="item.qty" readonly />
            <button @click="increaseQty(item.id)">+</button>
          </div>

          <button class="delete" @click="removeItem(item.id)">Hapus</button>
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

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

const cart = useCartStore()
const { cart: cartItems, totalPrice: total } = storeToRefs(cart)

function removeItem(id) {
  cart.removeFromCart(id)
}
function increaseQty(id) {
  cart.increaseQty(id)
}
function decreaseQty(id) {
  cart.decreaseQty(id)
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
.qty-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}
.qty-controls input {
  width: 50px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.3rem;
}
.qty-controls button {
  background-color: #007b8a;
  color: white;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;
}
.delete {
  background-color: crimson;
  margin-top: 0.5rem;
}
.checkout-btn {
  background-color: #007b8a;
  margin-top: 1rem;
  padding: 0.7rem 1.2rem;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>


