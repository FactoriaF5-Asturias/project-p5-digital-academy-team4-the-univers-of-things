<template>
  <div class="settings-page">
    <UserSidebar />

    <main class="settings-page__content">
      <section class="settings-page__header">
        <h1>Ajustes de cuenta</h1>
        <p>Gestiona tu avatar y cambia tu contraseña.</p>
      </section>

      <section class="settings-page__card">
        <h2>Avatar de perfil</h2>

        <div class="settings-page__avatar-row">
          <div class="settings-page__avatar-main">A</div>

          <div>
            <p>Elige una imagen para tu perfil.</p>

            <div class="settings-page__avatar-options">
              <button>A</button>
              <button>M</button>
              <button>S</button>
              <button>E</button>
            </div>
          </div>
        </div>
      </section>

      <section class="settings-page__card">
        <h2>Cambiar contraseña</h2>

        <form class="settings-page__form">
          <label>
            Contraseña actual
            <input type="password" placeholder="Introduce tu contraseña actual" />
          </label>

          <div class="settings-page__form-row">
            <label>
              Nueva contraseña
              <input type="password" placeholder="Nueva contraseña" />
            </label>

            <label>
              Confirmar contraseña
              <input type="password" placeholder="Confirma la contraseña" />
            </label>
          </div>

          <button type="button">Actualizar contraseña</button>
        </form>
      </section>

      <div class="settings-page__footer">
        <Footer />
      </div>
    </main>
  </div>
</template>

<script setup>
import UserSidebar from '@/components/user/UserSidebar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped lang="scss">
.settings-page {
  display: flex;
  min-height: 100vh;
  background: #0f172a;
}

.settings-page__content {
  flex: 1;
  min-height: 100vh;
  padding: 24px 48px 16px;
  color: white;
  display: flex;
  flex-direction: column;
}

.settings-page__header {
  margin-bottom: 16px;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 6px;
  }

  p {
    color: #cbd5e1;
  }
}

.settings-page__card {
  max-width: 760px;
  background: #172133;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 18px 22px;
  margin-bottom: 16px;
}

.settings-page__avatar-row {
  display: flex;
  align-items: center;
  gap: 28px;

  p {
    color: #cbd5e1;
    margin-bottom: 16px;
  }
}

.settings-page__avatar-main {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}

.settings-page__avatar-options {
  display: flex;
  gap: 12px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #334155;
    color: white;
    cursor: pointer;
  }
}

.settings-page__form {
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    color: #cbd5e1;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    background: #253247;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 12px;
    color: white;
  }

  button {
    align-self: flex-end;
    background: #93c5fd;
    color: #0f172a;
    border: none;
    border-radius: 8px;
    padding: 12px 18px;
    font-weight: 700;
    cursor: pointer;
  }
}

.settings-page__form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.settings-page__footer {
  margin-top: auto;
}

@media (max-width: 1000px) {
  .settings-page {
    flex-direction: column;
  }

  .settings-page__content {
    padding: 20px;
  }

  .settings-page__card {
    max-width: 100%;
  }

  .settings-page__form-row {
    grid-template-columns: 1fr;
  }
}
</style>

