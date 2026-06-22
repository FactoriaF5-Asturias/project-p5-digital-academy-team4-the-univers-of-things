<template>
  <div class="featured-management -mt-10 px-6">
    <h1 class="mb-8 text-3xl font-bold text-white">Dashboard Overview</h1>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 mb-10">
      <div class="rounded-xl bg-slate-900 p-6 shadow-lg border border-slate-800">
        <h2 class="text-slate-400">Total Users</h2>
        <p class="text-3xl font-bold text-white">0</p>
      </div>
      <div class="rounded-xl bg-slate-900 p-6 shadow-lg border border-slate-800">
        <h2 class="text-slate-400">Featured Movies</h2>
        <p class="text-3xl font-bold text-white">0</p>
      </div>
    </div>

    <h2 class="mb-4 text-xl font-semibold text-white">Quick Shortcuts</h2>
    <div class="flex gap-4">
      <button class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
        Manage Users
      </button>
      <button class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
        Manage Featured
      </button>
    </div>
  </div>
</template>