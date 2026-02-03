<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'

const props = defineProps<{
  titleBn: string
  titleEn: string
  dateBn: string
  dateEn: string
  imageSrc: string
  venueUrl: string
}>()

const { t } = useLanguage()

const openVenue = () => {
  window.open(props.venueUrl, '_blank')
}
</script>

<template>
  <article class="gold-border-shine transform transition hover:scale-[1.02] duration-300">
    <div class="content-inner flex flex-col p-0">
      <!-- Event Image -->
      <div class="relative w-full aspect-square overflow-hidden bg-maroon-deep">
        <img 
          :alt="t(props.titleBn, props.titleEn)" 
          :src="props.imageSrc"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Event Info -->
      <div class="p-6 text-center bg-maroon">
        <h3 class="text-2xl font-bold text-gold-royal mb-2">
          {{ t(props.titleBn, props.titleEn) }}
        </h3>
        <p class="text-sm text-gold-champagne mb-4 font-serif">
          {{ t(props.dateBn, props.dateEn) }}
        </p>
        <button 
          @click="openVenue"
          class="bg-gradient-to-r from-gold-royal to-gold-metallic hover:from-gold-light hover:to-gold-champagne text-maroon-deep text-xs font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
        >
          {{ t('ভেন্যু দেখুন', 'View Venue') }}
        </button>
      </div>
    </div>
  </article>
</template>
