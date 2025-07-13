import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),

  getters: {
    totalPrice: (state) =>
      state.cart.reduce((sum, item) => sum + item.price * item.qty, 0),

    totalItems: (state) =>
      state.cart.reduce((sum, item) => sum + item.qty, 0)
  },

  actions: {
    addToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.qty++
      } else {
        this.cart.push({ ...product, qty: 1 })
      }
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId)
    },

    increaseQty(productId) {
      const item = this.cart.find((item) => item.id === productId)
      if (item) {
        item.qty++
      }
    },

    decreaseQty(productId) {
      const item = this.cart.find((item) => item.id === productId)
      if (item && item.qty > 1) {
        item.qty--
      }
    },

    clearCart() {
      this.cart = []
    }
  }
})
