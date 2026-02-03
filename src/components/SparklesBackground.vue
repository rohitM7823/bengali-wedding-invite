<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Sparkle {
  id: number
  left: string
  fontSize: string
  duration: string
  delay: string
}

const sparkles = ref<Sparkle[]>([])

onMounted(() => {
  const count = 20
  for (let i = 0; i < count; i++) {
    sparkles.value.push({
      id: i,
      left: `${Math.random() * 100}vw`,
      fontSize: `${Math.random() * 15 + 8}px`,
      duration: `${Math.random() * 5 + 5}s`,
      delay: `${Math.random() * 5}s`,
    })
  }
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
    <span
      v-for="sparkle in sparkles"
      :key="sparkle.id"
      class="sparkle"
      :style="{
        left: sparkle.left,
        fontSize: sparkle.fontSize,
        animationDuration: sparkle.duration,
        animationDelay: sparkle.delay,
      }"
    >
      ✦
    </span>
  </div>
</template>
