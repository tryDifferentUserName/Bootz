import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref([])

  async function fetchUsers() {
    const response = await fetch('/assets/users.json')
    const usersData = await response.json()
    users.value = usersData
  }

  return { users, fetchUsers }
})
