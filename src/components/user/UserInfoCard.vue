<template>
  <article class="user-info-card">
    <div class="user-info-card__avatar">
      A
    </div>

    <div>
      <h2>Nombre del usuario</h2>
      <p>Miembro de CineMagic</p>
    </div>
  </article>
</template>

<script setup>
</script>

<style scoped lang="scss">
.user-info-card {
  width: 280px;
  background-color: #172133;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 24px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info-card__avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
</style>