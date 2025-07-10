import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    users: [] // Simpan daftar user yang sudah register
  }),
  actions: {
    register(username, password) {
      const exists = this.users.find(u => u.username === username)
      if (exists) throw new Error('Username sudah terdaftar')

      this.users.push({ username, password })
    },
    login(username, password) {
      const found = this.users.find(
        u => u.username === username && u.password === password
      )
      if (found) {
        this.user = found
        return true
      } else {
        throw new Error('Username atau password salah')
      }
    },
    logout() {
      this.user = null
    }
  }
})
