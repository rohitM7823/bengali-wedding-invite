import { ref, computed } from 'vue'

export type Language = 'bn' | 'en'

// Persistent language state
const currentLanguage = ref<Language>(
  (typeof localStorage !== 'undefined' && localStorage.getItem('preferredLanguage') as Language) || 'en'
)

// Translation helper
export function useLanguage() {
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'bn' ? 'en' : 'bn'
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('preferredLanguage', currentLanguage.value)
    }
  }

  const isBengali = computed(() => currentLanguage.value === 'bn')
  const isEnglish = computed(() => currentLanguage.value === 'en')

  // Translation function - returns Bengali or English based on current language
  const t = (bengali: string, english: string): string => {
    return currentLanguage.value === 'bn' ? bengali : english
  }

  return {
    currentLanguage,
    toggleLanguage,
    isBengali,
    isEnglish,
    t,
  }
}
