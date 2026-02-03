<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <footer class="relative w-full text-maroon-deep rounded-t-3xl pt-10 pb-8 px-4 overflow-hidden shadow-[0_-5px_15px_rgba(0,0,0,0.2)] bg-ivory">
    <!-- Dotted Pattern Background -->
    <div 
      class="absolute inset-0 opacity-10" 
      style="background-image: radial-gradient(#8B0000 1px, transparent 1px); background-size: 20px 20px;"
      aria-hidden="true"
    />
    
    <div class="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
      <!-- Decorative Header -->
      <div class="mb-6">
        <div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mb-4" />
        <h2 class="text-2xl font-bold text-maroon-deep font-bengali">
          {{ t('সবিনয় নিবেদন', 'Humble Submission') }}
        </h2>
        <div class="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-4" />
      </div>
      
      <!-- Welcome Message Card -->
      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-gold-royal/30 shadow-lg">
        <p class="text-sm text-maroon-deep/80 mb-4 font-serif italic">
          {{ t('মাননীয় মহাশয়/মহাশয়া,', 'Sir / Madam,') }}
        </p>
        
        <p class="text-base text-maroon-deep leading-relaxed mb-4 font-bengali">
          {{ t(
            'আগামী ১৯শে ফাল্গুন, ১৪৩২ (ইংরেজি: ৪ঠা মার্চ, ২০২৬), বুধবার, আমাদের কন্যা কল্যাণীয়া রিমিতার সঙ্গে শ্রী প্রদীপ মান্না ও শ্রীমতী মাধবী মান্নার পুত্র কল্যাণীয় রোহিতের শুভ বিবাহ অনুষ্ঠিত হবে।',
            'On the upcoming 19th of Falgun, 1432 (English: 4th March, 2026), Wednesday, the wedding ceremony of our daughter, Kalyaniya Rimita, will be solemnized with Kalyaniya Rohit, son of Sri Pradip Manna and Srimati Madhabi Manna'
          ) }}
        </p>
        
        <div class="w-16 h-px bg-gold-royal/40 mx-auto my-4" />
        
        <p class="text-base text-maroon-deep leading-relaxed font-bengali">
          {{ t(
            'এই উপলক্ষ্যে উক্ত দিন সন্ধ্যায় প্রীতিভোজে আপনার / আপনাদের শুভ উপস্থিতি কামনা করি নবদম্পতিকে আশীর্বাদ প্রদানের জন্য।',
            'On this occasion, on the said day in the evening, your presence is solicited at the reception (Preetibhoj) to bless the newlywed couple.'
          ) }}
        </p>
      </div>
      
      <!-- Closing -->
      <div class="mt-8 font-serif text-sm text-maroon/80">
        <p class="italic">{{ t('আপনার উপস্থিতির অপেক্ষায় আমরা', 'Looking forward to your presence') }}</p>
        <div class="mt-4 flex justify-center gap-2">
          <span class="text-gold-royal">✦</span>
          <span class="text-gold-royal">✦</span>
          <span class="text-gold-royal">✦</span>
        </div>
      </div>
    </div>
  </footer>
</template>
