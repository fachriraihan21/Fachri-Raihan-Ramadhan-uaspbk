import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product) {
      const item = this.cart.find(i => i.id === product.id)
      if (item) {
        item.qty++
      } else {
        this.cart.push({ ...product, qty: 1 })
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id)
    },
    clearCart() {
      this.cart = []
    },
    increaseQty(id) {
      const item = this.cart.find(i => i.id === id)
      if (item) item.qty++
    },
    decreaseQty(id) {
      const item = this.cart.find(i => i.id === id)
      if (item && item.qty > 1) item.qty--
    },
  },
  getters: {
    totalPrice: (state) => state.cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    totalItems: (state) => state.cart.reduce((sum, i) => sum + i.qty, 0)
  }
})
