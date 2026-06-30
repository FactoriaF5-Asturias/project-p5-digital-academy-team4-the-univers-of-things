<script setup>
import { ref } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})

const favoritesStore = useFavoritesStore()
const selectedRating = ref(0)

const rateCharacter = (rating) => {
  selectedRating.value = rating
  favoritesStore.addFavorite(props.character)
  favoritesStore.rateFavorite(props.character._id, rating)
}
</script>

<template>
  <div class="mt-3 flex justify-center gap-1">
    <button
      v-for="star in 5"
      :key="star"
      @click.stop.prevent="rateCharacter(star)"
      class="text-2xl transition hover:scale-110"
    >
      {{ star <= selectedRating ? '⭐' : '☆' }}
    </button>
  </div>
</template>