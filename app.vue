<script setup lang="ts">
// Disable right-click on images
onMounted(() => {
  document.addEventListener('contextmenu', (e) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault()
    }
  })
})
</script>

<template>
  <div class="min-h-screen bg-cosmic-void">
    <NuxtPage />
  </div>
</template>
