<template>
  <article>
    <img
      :src="personaje.imageUrl"
      :alt="personaje.name"
    >

    <h3>{{ personaje.name }}</h3>
  </article>
</template>
<script setup>
defineProps({
  personaje: {
    type: Object,
    required: true
  }
})
</script>