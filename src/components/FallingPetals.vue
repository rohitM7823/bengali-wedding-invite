<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Petal {
  id: number
  left: string
  width: string
  height: string
  duration: string
  delay: string
  rotation: string
  colorType: 'gold' | 'light-gold' | 'champagne'
}

const petals = ref<Petal[]>([])

onMounted(() => {
  const count = 35 // Increased petal count
  const colorTypes: Petal['colorType'][] = ['gold', 'light-gold', 'champagne']
  
  for (let i = 0; i < count; i++) {
    petals.value.push({
      id: i,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 8 + 10}px`,
      height: `${Math.random() * 8 + 10}px`,
      duration: `${Math.random() * 5 + 8}s`,
      delay: `${Math.random() * 8}s`,
      rotation: `${Math.random() * 360}deg`,
      colorType: colorTypes[Math.floor(Math.random() * colorTypes.length)],
    })
  }
})

const getColor = (type: Petal['colorType']): string => {
  switch (type) {
    case 'gold': return '#D4AF37'
    case 'light-gold': return '#E5C585'
    case 'champagne': return '#F7E7CE'
  }
}
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-40" aria-hidden="true">
    <div
      v-for="petal in petals"
      :key="petal.id"
      class="petal-gold"
      :style="{
        left: petal.left,
        width: petal.width,
        height: petal.height,
        animationDuration: petal.duration,
        animationDelay: petal.delay,
        '--petal-color': getColor(petal.colorType),
        '--petal-rotation': petal.rotation,
      }"
    />
  </div>
</template>

<style scoped>
.petal-gold {
  position: absolute;
  top: -20px;
  background: var(--petal-color, #D4AF37);
  border-radius: 150% 0 150% 0;
  opacity: 0.8;
  animation: petalFall linear infinite;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: rotate(var(--petal-rotation, 0deg));
}

@keyframes petalFall {
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}
</style>
