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
  background: #172133;
  border: 1px solid #334155;
  border-radius: 14px;
  overflow: hidden;
  color: white;
  height: 270px;
  display: flex;
  flex-direction: column;
}

.favorite-card__image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  object-position: center;
  display: block;
  background-color: #172133;
}

.favorite-card__content {
  padding: 14px;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-size: 1rem;
    margin-bottom: 6px;
  }

  p {
    color: #cbd5e1;
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 10px;
  }
}

.favorite-card__rating {
  margin-top: auto;
  color: #facc15;
}
</style>