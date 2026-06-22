<template>
  <div class="flex min-h-screen bg-surface-dark">
    <SidebarAdmin />

    <main class="flex-1 md:ml-64 p-6 md:p-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SidebarAdmin from '@/components/layout/SidebarAdmin.vue'
</script>