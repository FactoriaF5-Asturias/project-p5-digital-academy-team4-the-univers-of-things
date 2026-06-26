<template>
  <div class="bg-surface-container border glass-stroke rounded-2xl overflow-hidden shadow-sm">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container-high border-b glass-stroke">
            <th class="px-6 py-5 font-label-lg text-label-lg text-primary">Character Name</th>
            <th class="px-6 py-5 font-label-lg text-label-lg text-primary">Rating</th>
          </tr>
        </thead>
        <tbody class="divide-y glass-stroke">
          <tr v-for="char in featuredCharacters" :key="char.id" class="hover:bg-surface-container-low transition-colors group">
            <td class="px-6 py-4 font-body-md font-semibold text-on-surface">{{ char.name }}</td>
            <td class="px-6 py-4">
              <div class="flex gap-0.5">
                <span v-for="star in 5" :key="star" class="material-symbols-outlined text-sm" 
                      :class="star <= char.rating ? 'text-accent-gold' : 'text-on-surface-variant/30'">
                  star
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const featuredCharacters = ref([
  { id: 1, name: 'Aurora Knight', rating: 5 },
  { id: 2, name: 'Ocean Pearl', rating: 4 }
])
</script>