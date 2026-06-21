<template>
  <article class="favorite-card">
    <img class="favorite-card__image" :src="image" :alt="title" />

    <div class="favorite-card__content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <div class="favorite-card__rating">
        ★★★★☆
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String
})
</script>

<style scoped lang="scss">
.favorite-card {
  height: 305px;
}

.favorite-card__image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: top;
  display: block;
  background-color: #ffffff;
}

.favorite-card__content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.favorite-card__rating {
  margin-top: auto;
  padding-top: 12px;
}
</style>