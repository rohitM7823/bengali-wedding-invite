<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['enter'])
const isVisible = ref(true)

const handleEnter = () => {
  isVisible.value = false
  emit('enter')
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-1000 ease-out"
    enter-from-class="transform translate-y-0 opacity-100"
    enter-to-class="transform -translate-y-full opacity-0"
    leave-active-class="transition duration-1000 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-full opacity-0"
  >
    <div 
      v-if="isVisible"
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sindoor text-ivory overflow-hidden"
    >
      <!-- Background Pattern -->
      <div 
        class="absolute inset-0 z-0 opacity-20 pot-pattern"
        style="background-image: url('/images/kolka-pattern.png'); background-size: 200px;"
      />
      
      <div class="z-10 text-center p-8 max-w-md w-full relative">
        <!-- Decorative Top Element -->
        <div class="mb-8">
           <svg class="w-full h-12 text-gold-royal" viewBox="0 0 100 20" fill="currentColor">
             <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" stroke-width="2"/>
             <circle cx="50" cy="10" r="5" />
           </svg>
        </div>

        <h1 class="font-bengali text-5xl md:text-7xl mb-4 text-gold-royal drop-shadow-lg">
          শুভ বিবাহ
        </h1>
        
        <p class="font-serif italic text-xl md:text-2xl mb-12 text-ivory/90">
          We invite you to celebrate our union
        </p>

        <button 
          @click="handleEnter"
          class="group relative px-8 py-4 bg-transparent border-2 border-gold-royal text-gold-royal font-bold tracking-wider hover:bg-gold-royal hover:text-sindoor transition-all duration-500 rounded-full"
        >
          <span class="relative z-10 flex items-center justify-center gap-2">
            ENTER INVITATION
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
        
        <!-- Decorative Bottom Element -->
        <div class="mt-12">
           <svg class="w-full h-12 text-gold-royal" viewBox="0 0 100 20" fill="currentColor">
             <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" stroke-width="2"/>
             <circle cx="50" cy="10" r="3" />
           </svg>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.pot-pattern {
  mask-image: linear-gradient(to bottom, transparent, black, transparent);
}
</style>
