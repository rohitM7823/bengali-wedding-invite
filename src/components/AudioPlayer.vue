<script setup lang="ts">
import { ref, onMounted } from 'vue'

const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

const togglePlay = () => {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}

onMounted(() => {
  if (audioRef.value) {
    // Attempt to autoplay
    const playAudio = async () => {
      if (!audioRef.value) return
      
      try {
        await audioRef.value.play()
        isPlaying.value = true
        // Remove listener if it exists
        document.removeEventListener('click', playAudio)
        document.removeEventListener('touchstart', playAudio)
      } catch (error) {
        console.log('Autoplay prevented:', error)
        isPlaying.value = false
        // Add listeners for user interaction to retry play
        document.addEventListener('click', playAudio, { once: true })
        document.addEventListener('touchstart', playAudio, { once: true })
      }
    }

    playAudio()
  }
})

// Expose play method for parent control
const play = () => {
  if (audioRef.value) {
    audioRef.value.play().catch(e => console.log('Manual play failed:', e))
    isPlaying.value = true
  }
}

defineExpose({ play })
</script>

<template>
  <div class="fixed top-6 left-6 z-50">
    <!-- Audio Element -->
    <audio 
      ref="audioRef" 
      loop
      @play="isPlaying = true"
      @pause="isPlaying = false"
    >
      <source src="/audio/invitation.mp3" type="audio/mpeg">
    </audio>

    <!-- Play/Pause Button -->
    <button
      @click="togglePlay"
      class="bg-gold-royal/90 hover:bg-gold-royal text-sindoor p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border-2 border-ivory/20"
      :aria-label="isPlaying ? 'Pause music' : 'Play music'"
    >
      <!-- Play Icon -->
      <svg 
        v-if="!isPlaying"
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z"/>
      </svg>
      
      <!-- Pause Icon -->
      <svg 
        v-else
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
      </svg>
    </button>
  </div>
</template>
