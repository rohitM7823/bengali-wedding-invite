<script setup lang="ts">
import { useLanguage } from './composables/useLanguage'
import HeaderSection from './components/HeaderSection.vue'
import EventCard from './components/EventCard.vue'
import FooterSection from './components/FooterSection.vue'
import SparklesBackground from './components/SparklesBackground.vue'
import KolkaBorder from './components/KolkaBorder.vue'
import AudioPlayer from './components/AudioPlayer.vue'
import WelcomeOverlay from './components/WelcomeOverlay.vue'
import { ref } from 'vue'

const { t } = useLanguage()
const audioPlayerRef = ref<{ play: () => void } | null>(null)

const handleWelcomeEnter = () => {
  if (audioPlayerRef.value) {
    audioPlayerRef.value.play()
  }
}

// Event data
const events = [
  {
    titleBn: 'বিবাহ',
    titleEn: 'Marriage',
    dateBn: 'রাত্রি, ৪ঠা মার্চ, ২০২৬, ৭:০০ মি',
    dateEn: 'Night, 4th March, 2026, 7:00 PM',
    imageSrc: '/images/marriage.png',
    venueUrl: 'https://maps.app.goo.gl/1d8eZao7QQS6CeNQA?g_st=aw',
  },
  {
    titleBn: 'রিসেপশন',
    titleEn: 'Reception',
    dateBn: 'রাত্রি, ৬ই মার্চ, ২০২৬, ৮:০০ মি',
    dateEn: 'Night, 6th March, 2026, 8:00 PM',
    imageSrc: '/images/kissing.png',
    venueUrl: 'https://maps.app.goo.gl/MjaFs3rN5aKvkibB6',
  },
]
</script>

<template>
  <div class="bg-sindoor font-bengali text-ivory overflow-x-hidden antialiased relative min-h-screen">
    <!-- Welcome Overlay -->
    <WelcomeOverlay @enter="handleWelcomeEnter" />

    <!-- Audio Player -->
    <AudioPlayer ref="audioPlayerRef" />
    
    <!-- Damask Pattern Overlay -->
    <div 
      class="fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-overlay"
      style="background-image: url('https://www.transparenttextures.com/patterns/damask-pattern.png');"
      aria-hidden="true"
    />

    <!-- Sparkles Background -->
    <SparklesBackground />

    <!-- Kolka Borders -->
    <KolkaBorder side="left" />
    <KolkaBorder side="right" />

    <!-- Header Section -->
    <HeaderSection />

    <!-- Main Content -->
    <main class="relative z-10 w-full max-w-lg mx-auto px-4 pb-16">
      <!-- Events Section Title -->
      <div class="text-center mb-10 mt-6">
        <h2 class="text-3xl font-bold text-gold-royal border-b-2 border-gold-royal inline-block pb-1 px-4">
          {{ t('শুভ অনুষ্ঠান', 'Auspicious Events') }}
        </h2>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <EventCard
          v-for="event in events"
          :key="event.titleEn"
          :title-bn="event.titleBn"
          :title-en="event.titleEn"
          :date-bn="event.dateBn"
          :date-en="event.dateEn"
          :image-src="event.imageSrc"
          :venue-url="event.venueUrl"
        />
      </div>
    </main>

    <!-- Footer Section -->
    <FooterSection />
  </div>
</template>
