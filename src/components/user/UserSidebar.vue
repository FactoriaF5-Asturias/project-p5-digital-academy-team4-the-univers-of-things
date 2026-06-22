<template>
  <aside class="user-sidebar">
    <h2 class="user-sidebar__logo">CineMagic</h2>

    <nav class="user-sidebar__nav">
  <RouterLink to="/">
    <span class="user-sidebar__icon">⌂</span>
    Inicio
  </RouterLink>

  <RouterLink to="/user/favorites">
    <span class="user-sidebar__icon">♡</span>
    Favoritos
  </RouterLink>

  <RouterLink to="/user">
    <span class="user-sidebar__icon">○</span>
    Perfil
  </RouterLink>

  <RouterLink to="/user/settings">
    <span class="user-sidebar__icon">⚙</span>
    Ajustes
  </RouterLink>
</nav>
      <div class="user-sidebar__profile">
        <div class="user-sidebar__avatar">A</div>
        <span>Nombre del usuario</span>
      </div>
    <button class="user-sidebar__logout">
      Cerrar sesión
    </button>
  </aside>
</template>

<script setup>
</script>

<style scoped lang="scss">
.user-sidebar {
  width: 210px;
  min-height: 100vh;
  height: 100%;
  background-color: #172133;
  color: white;
  padding: 12px 16px 16px;
  display: flex;
  flex-direction: column;
}

.user-sidebar__logo {
  margin-bottom: 28px;
  font-size: 1.15rem;
  font-weight: 700;
}

.user-sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;

  a {
    display: block;
    color: #cbd5e1;
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 0.95rem;
    &:hover,
    &.router-link-active {
      background-color: #253247;
      color: #ffffff;
    }
  }
}

.user-sidebar__profile {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #cbd5e1;
  font-size: 0.85rem;
  line-height: 1.2;
}

.user-sidebar__profile span {
  white-space: nowrap;
}

.user-sidebar__avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

.user-sidebar__logout {
  margin-top: 12px;
  color: #cbd5e1;
  background: transparent;
  border: 1px solid #334155;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background-color: #253247;
    color: #ffffff;
  }
}

@media (max-width: 1000px) {
  .user-sidebar {
    width: 100%;
    min-height: auto;
  }

  .user-sidebar__nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .user-sidebar__bottom {
    display: none;
  }
}
</style>

