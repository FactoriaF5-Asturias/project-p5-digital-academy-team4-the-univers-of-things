<template>
  <div class="favorites-page">
    <UserSidebar />

    <main class="favorites-page__content">
      <section class="favorites-page__header">
        <h1>Mis favoritos</h1>
        <p>Consulta todos tus personajes y películas favoritas.</p>
      </section>

      <section class="favorites-page__add">
        <h2>Añadir favorito</h2>
        <p>Busca y organiza tus personajes favoritos desde aquí.</p>
      </section>

      <section class="favorites-page__grid">
        <FavoriteCard
          v-for="favorite in favorites"
          :key="favorite._id"
          :title="favorite.name"
          description="Personaje del universo Disney."
          :image="favorite.imageUrl"
        />
      </section>

      <div class="favorites-page__footer">
        <Footer />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserSidebar from '@/components/user/UserSidebar.vue'
import Footer from '@/components/Footer.vue'
import FavoriteCard from '@/components/user/FavoriteCard.vue'

const favorites = ref([])

onMounted(async () => {
  const response = await fetch('https://api.disneyapi.dev/character?pageSize=4')
  const data = await response.json()

  favorites.value = data.data
    .filter((character) => character.imageUrl)
    .slice(0, 4)
})
</script>

<style scoped lang="scss">
.favorites-page {
  display: flex;
  min-height: 100vh;
  background: #0f172a;
}

.favorites-page__content {
  flex: 1;
  min-height: 100vh;
  padding: 32px 48px 24px;
  color: white;
  display: flex;
  flex-direction: column;
}

.favorites-page__header {
  margin-bottom: 24px;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 8px;
  }

  p {
    color: #cbd5e1;
  }
}

.favorites-page__add {
  background: #172133;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;

  h2 {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  p {
    color: #cbd5e1;
  }
}

.favorites-page__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.favorites-page__footer {
  margin-top: 95;
  padding-top: 40px;
}
</style>