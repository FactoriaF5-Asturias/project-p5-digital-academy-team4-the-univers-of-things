import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [],
    search: '',
    topRatedCharacters: [],
    loading: false
  }),

  actions: {
    async fetchCharacters() {
      this.loading = true

      try {
        let allCharacters = []
        let page = 1
        let hasNextPage = true

        while (hasNextPage) {
          const response = await fetch(
            `https://api.disneyapi.dev/character?page=${page}`
          )

          const data = await response.json()

          allCharacters.push(
            ...data.data.filter((character) => character.imageUrl)
          )

          hasNextPage = data.info.nextPage !== null
          page++
        }

        this.characters = allCharacters
      } catch (error) {
        console.error('Error al obtener los personajes:', error)
      } finally {
        this.loading = false
      }
    },

    setSearch(searchText) {
      this.search = searchText
    }
  }
})