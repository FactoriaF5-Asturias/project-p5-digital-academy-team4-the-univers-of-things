<script setup>
defineEmits(['close'])
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div class="max-w-md rounded-2xl bg-slate-900 p-8 text-center text-white shadow-2xl">
      <h2 class="mb-4 text-3xl font-bold">
        ⭐ Personaje de la semana
      </h2>

      <p class="mb-6 text-lg">
        Esta semana... el personaje eres tú ✨
      </p>

      <button
        @click="$emit('close')"
        class="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700"
      >
        Cerrar
      </button>
    </div>
  </div>
</template>