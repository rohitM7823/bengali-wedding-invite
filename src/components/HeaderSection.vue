<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'
import FallingPetals from './FallingPetals.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const { t, toggleLanguage } = useLanguage()

// Parallax effect for palace image
const palaceRef = ref<HTMLImageElement | null>(null)
const parallaxOffset = ref(0)
const showScrollIndicator = ref(true)

const handleScroll = () => {
  const scrolled = window.scrollY
  const parallaxSpeed = 0.4
  parallaxOffset.value = scrolled * parallaxSpeed
  showScrollIndicator.value = scrolled < 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="relative w-full flex flex-col items-center pt-0 pb-12 z-10 bg-gradient-to-b from-maroon-deep via-sindoor to-sindoor">
    <!-- Language Toggle Button -->
    <button 
      class="language-toggle" 
      @click="toggleLanguage" 
      aria-label="Toggle Language"
    >
      <span class="material-icons text-lg">language</span>
    </button>

    <!-- Falling Petals (moved to full page overlay) -->
    <FallingPetals />

    <!-- Intro Video Hero Section -->
    <div class="w-full relative mb-4 overflow-hidden" style="height: 600px;">
      <!-- Video Background with 50% opacity and Parallax -->
      <div class="absolute inset-0 w-full h-full overflow-hidden bg-sindoor">
        <video 
          autoplay 
          muted 
          loop 
          playsinline
          class="w-full h-full object-cover object-center transition-transform duration-100 ease-out will-change-transform"
          :style="{
            opacity: 0.5,
            transform: `translateY(${parallaxOffset}px) scale(1.1)`,
            maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 98%)'
          }"
        >
          <source src="/videos/intro-video.mp4" type="video/mp4" />
        </video>
        <!-- Top overlay for darkening -->
        <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(102, 0, 0, 0.4) 0%, transparent 50%, transparent 100%);" />
      </div>
      
      <!-- Animated Title Overlay -->
      <div class="absolute inset-0 flex items-center justify-center z-10">
        <div class="text-center px-6 animate-title-entrance">
          <p class="text-gold-champagne text-lg md:text-xl font-bengali italic mb-2 animate-fade-up opacity-0" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
            {{ t('আপনাকে সাদর আমন্ত্রণ জানাচ্ছি', 'You are cordially invite to') }}
          </p>
          <p class="text-gold-champagne text-base md:text-lg font-bengali mb-4 animate-fade-up opacity-0" style="animation-delay: 0.6s; animation-fill-mode: forwards;">
            {{ t('শুভ বিবাহ অনুষ্ঠানে', 'the marriage ceremony of') }}
          </p>
          
          <!-- Names with slide-in animation - horizontal layout -->
          <div class="my-6 flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            <h2 class="text-4xl md:text-6xl font-bold text-gold-royal font-bengali gold-shimmer-text animate-slide-right opacity-0" style="animation-delay: 1s; animation-fill-mode: forwards;">
              {{ t('রোহিত', 'ROHIT') }}
            </h2>
            <span class="text-2xl md:text-4xl font-script text-cream animate-fade-up opacity-0" style="animation-delay: 1.3s; animation-fill-mode: forwards;">&amp;</span>
            <h2 class="text-4xl md:text-6xl font-bold text-gold-royal font-bengali gold-shimmer-text animate-slide-right opacity-0" style="animation-delay: 1.6s; animation-fill-mode: forwards;">
              {{ t('রিমিতা', 'RIMITA') }}
            </h2>
          </div>
          
          <div class="mt-6 animate-fade-up opacity-0" style="animation-delay: 2s; animation-fill-mode: forwards;">
            <div class="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto" />
          </div>
        </div>
      </div>
      
      <!-- Floating Balloons -->
      <div class="absolute top-2 left-6 md:left-16 w-16 h-20 z-20 animate-float opacity-90 balloon-trail">
        <svg class="w-full h-full drop-shadow-lg" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="balloonGrad1" cx="30%" cy="30%" r="70%">
              <stop offset="0%" style="stop-color:#FFF8E7;stop-opacity:1"/>
              <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:1"/>
            </radialGradient>
          </defs>
          <path d="M50,10 C25,10 5,30 5,55 C5,70 15,82 30,90 L30,95 L70,95 L70,90 C85,82 95,70 95,55 C95,30 75,10 50,10 Z M35,95 L35,100 L65,100 L65,95 Z" fill="url(#balloonGrad1)"/>
          <path d="M25,55 Q50,65 75,55" fill="none" stroke="#C5A059" stroke-width="2" opacity="0.3"/>
        </svg>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-4 h-3 bg-gold-metallic rounded-sm opacity-80" />
      </div>
      
      <div class="absolute top-8 right-8 w-20 h-24 z-20 animate-float-delayed balloon-trail">
        <svg class="w-full h-full drop-shadow-lg" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="balloonGrad2" cx="30%" cy="30%" r="70%">
              <stop offset="0%" style="stop-color:#FFFDF7;stop-opacity:1"/>
              <stop offset="100%" style="stop-color:#C41E3A;stop-opacity:1"/>
            </radialGradient>
          </defs>
          <path d="M50,10 C25,10 5,30 5,55 C5,70 15,82 30,90 L30,95 L70,95 L70,90 C85,82 95,70 95,55 C95,30 75,10 50,10 Z M35,95 L35,100 L65,100 L65,95 Z" fill="url(#balloonGrad2)"/>
          <path d="M25,55 Q50,65 75,55" fill="none" stroke="#C5A059" stroke-width="2" opacity="0.3"/>
        </svg>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-5 h-4 bg-gold-metallic rounded-sm opacity-80" />
      </div>
      
      <!-- Small Background Balloon -->
      <div class="absolute top-20 left-1/2 ml-10 w-8 h-10 z-10 animate-float opacity-60 blur-[1px]">
        <svg class="w-full h-full" viewBox="0 0 100 100">
          <path d="M50,10 C25,10 5,30 5,55 C5,70 15,82 30,90 L30,95 L70,95 L70,90 C85,82 95,70 95,55 C95,30 75,10 50,10 Z" fill="#E5C585"/>
        </svg>
      </div>

      <!-- Scroll Down Indicator -->
      <Transition
        enter-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="showScrollIndicator"
          class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
        >
          <span class="text-gold-champagne/70 text-[10px] uppercase tracking-[0.25em] font-serif">
            {{ t('নিচে স্ক্রল করুন', 'Scroll Down') }}
          </span>
          <div class="scroll-bounce-arrow">
            <svg class="w-5 h-5 text-gold-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Content Section -->
    <div class="px-6 text-center z-30 w-full max-w-lg mt-4 relative">
      <!-- Ganesha Icon -->
      <div class="mb-4 relative z-20">
        <div class="w-32 h-32 mx-auto flex items-center justify-center relative">
          <img src="/images/ganesha.png" alt="Ganesha" class="w-full h-full object-contain drop-shadow-lg"/>
        </div>
        <div class="text-center mt-2">
          <p class="text-xs uppercase tracking-[0.2em] text-gold-royal font-serif">
            {{ t('শ্রী গণেশায় নমঃ', 'Shri Ganeshaya Namah') }}
          </p>
        </div>
      </div>

      <!-- Invitation Title -->
      <div class="flex items-center justify-center font-serif text-gold-light mb-4 ornamental-divider">
        <span class="text-3xl md:text-4xl tracking-[0.1em] uppercase gold-shimmer-text font-serif px-4">
          {{ t('আমন্ত্রণ', 'Invitation') }}
        </span>
      </div>

      <!-- Parents Blessing -->
      <div class="text-center mb-6">
        <p class="font-serif italic text-gold-champagne/80 text-sm mb-1">
          {{ t('স্বর্গীয় আশীর্বাদ সহ', 'With heavenly blessings of') }}
        </p>
        <p class="font-serif text-lg text-gold-royal tracking-wide mb-2">
          {{ t('মা ভবানী ও মহাদেব', 'Maa Bhavani & Mahadev') }}
        </p>
        <div class="w-16 h-px bg-gold-royal/50 mx-auto mb-2" />
        <p class="font-serif italic text-gold-champagne/80 text-xs mb-1">
          {{ t('শ্রীমতী মাধবী মান্না এবং শ্রী প্রদীপ মান্না', 'Smt. Madhabi Manna and Shri Pradip Manna') }}
        </p>
        <p class="text-[10px] text-gold-champagne/60 uppercase tracking-widest mt-2">
          {{ t('পুত্র', 'Son') }}
        </p>
      </div>

      <!-- Couple Names -->
      <h1 class="text-5xl md:text-7xl font-bold text-gold-royal drop-shadow-lg mb-6 leading-tight text-shadow-gold relative py-4">
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] opacity-5 font-script whitespace-nowrap z-0">
          Rohit &amp; Rimita
        </span>
        <span class="relative z-10 block">{{ t('রোহিত', 'Rohit') }}</span>
        <span class="text-3xl md:text-4xl font-normal text-cream font-script relative z-10 my-2 block">&amp;</span>
        <span class="relative z-10 block">{{ t('রিমিতা', 'Rimita') }}</span>
      </h1>

      <!-- Bride's Parents -->
      <div class="mt-2 mb-6">
        <p class="text-[10px] text-gold-champagne/60 uppercase tracking-widest mb-1">
          {{ t('কন্যা', 'Daughter') }}
        </p>
        <p class="text-sm text-gold-champagne font-serif">
          {{ t('শ্রীমতী সুমিতা রায় এবং শ্রী সুবীর রায়', 'Smt. Sumita Roy and Shri Subir Roy') }}
        </p>
      </div>

      <!-- Invitation Message -->
      <p class="text-sm md:text-base text-cream/90 leading-relaxed max-w-xs mx-auto mt-4 border-t border-gold-royal/30 pt-4 font-bengali">
        {{ t('আপনাদের সকলকে আমন্ত্রণ জানাচ্ছি, রোহিত এবং রিমিতা বিবাহ অনুষ্ঠানে', 'We cordially invite you all to the wedding ceremony of Rohit and Rimita') }}
      </p>
    </div>
  </header>
</template>

<style scoped>
.scroll-bounce-arrow {
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(4px);
  }
}
</style>
