<script setup lang="ts">
defineProps<{
  side: 'left' | 'right'
}>()
</script>

<template>
  <div 
    class="kolka-border"
    :class="side === 'left' ? 'kolka-border-left' : 'kolka-border-right'"
  >
    <!-- Kolka (Paisley) SVG Pattern - Traditional Bengali Design -->
    <svg 
      viewBox="0 0 120 1200" 
      preserveAspectRatio="xMidYMid slice"
      class="kolka-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Background decorative line -->
      <line x1="60" y1="0" x2="60" y2="1200" stroke="#D4AF37" stroke-width="0.5" opacity="0.3"/>
      
      <!-- Kolka Pattern 1 - Large -->
      <g transform="translate(15, 30)">
        <path 
          d="M50,0 C80,25 95,80 65,140 C35,200 5,170 20,110 C35,50 20,25 50,0 Z" 
          fill="url(#kolkaGradient1)" 
          stroke="#D4AF37" 
          stroke-width="2"
          opacity="0.9"
        />
        <path 
          d="M45,20 C65,40 75,75 55,120 C35,160 15,140 25,95 C35,50 30,35 45,20 Z" 
          fill="none" 
          stroke="#F7E7CE" 
          stroke-width="1.5"
          opacity="0.7"
        />
        <circle cx="48" cy="70" r="5" fill="#D4AF37" opacity="0.8"/>
        <circle cx="40" cy="95" r="3" fill="#F7E7CE" opacity="0.6"/>
        <circle cx="52" cy="45" r="3" fill="#F7E7CE" opacity="0.6"/>
        <!-- Inner decorative dots -->
        <circle cx="45" cy="60" r="1.5" fill="#FFF" opacity="0.5"/>
        <circle cx="50" cy="80" r="1.5" fill="#FFF" opacity="0.5"/>
      </g>

      <!-- Decorative Dots Row 1 -->
      <g transform="translate(10, 190)">
        <circle cx="30" cy="0" r="3" fill="#D4AF37" opacity="0.7"/>
        <circle cx="50" cy="10" r="2" fill="#F7E7CE" opacity="0.5"/>
        <circle cx="70" cy="5" r="2.5" fill="#D4AF37" opacity="0.6"/>
        <circle cx="40" cy="20" r="2" fill="#D4AF37" opacity="0.5"/>
      </g>

      <!-- Kolka Pattern 2 - Medium -->
      <g transform="translate(25, 230)">
        <path 
          d="M40,0 C65,20 75,60 50,100 C25,140 0,115 15,70 C30,25 15,15 40,0 Z" 
          fill="url(#kolkaGradient2)" 
          stroke="#F7E7CE" 
          stroke-width="2"
          opacity="0.85"
        />
        <path 
          d="M37,15 C55,30 62,55 45,85 C28,115 10,95 20,60 C30,25 25,20 37,15 Z" 
          fill="none" 
          stroke="#D4AF37" 
          stroke-width="1"
          opacity="0.6"
        />
        <circle cx="40" cy="55" r="4" fill="#F7E7CE" opacity="0.7"/>
        <circle cx="35" cy="75" r="2.5" fill="#D4AF37" opacity="0.5"/>
      </g>

      <!-- Floral Element 1 -->
      <g transform="translate(20, 360)">
        <ellipse cx="40" cy="25" rx="25" ry="12" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.7"/>
        <ellipse cx="40" cy="25" rx="15" ry="7" fill="none" stroke="#F7E7CE" stroke-width="1" opacity="0.5"/>
        <circle cx="40" cy="25" r="5" fill="#D4AF37" opacity="0.8"/>
        <circle cx="40" cy="25" r="2" fill="#FFF" opacity="0.6"/>
      </g>

      <!-- Kolka Pattern 3 - Large Inverted -->
      <g transform="translate(10, 410)">
        <path 
          d="M55,0 C85,22 100,70 70,125 C40,180 5,150 25,95 C45,40 25,20 55,0 Z" 
          fill="url(#kolkaGradient1)" 
          stroke="#D4AF37" 
          stroke-width="2"
          opacity="0.9"
        />
        <path 
          d="M50,18 C72,35 82,70 60,110 C38,150 15,130 28,85 C41,40 32,28 50,18 Z" 
          fill="none" 
          stroke="#F7E7CE" 
          stroke-width="1.5"
          opacity="0.6"
        />
        <circle cx="52" cy="65" r="5" fill="#D4AF37" opacity="0.8"/>
        <circle cx="45" cy="90" r="3" fill="#F7E7CE" opacity="0.6"/>
        <circle cx="55" cy="40" r="2.5" fill="#F7E7CE" opacity="0.5"/>
      </g>

      <!-- Decorative Dots Row 2 -->
      <g transform="translate(15, 565)">
        <circle cx="25" cy="5" r="2.5" fill="#D4AF37" opacity="0.6"/>
        <circle cx="50" cy="0" r="3" fill="#F7E7CE" opacity="0.5"/>
        <circle cx="75" cy="10" r="2" fill="#D4AF37" opacity="0.6"/>
        <circle cx="35" cy="18" r="1.5" fill="#D4AF37" opacity="0.4"/>
      </g>

      <!-- Kolka Pattern 4 - Medium -->
      <g transform="translate(20, 600)">
        <path 
          d="M45,0 C70,18 82,55 55,95 C28,135 0,110 18,65 C36,20 20,12 45,0 Z" 
          fill="url(#kolkaGradient2)" 
          stroke="#D4AF37" 
          stroke-width="2"
          opacity="0.85"
        />
        <circle cx="45" cy="50" r="4" fill="#D4AF37" opacity="0.7"/>
        <circle cx="40" cy="72" r="2.5" fill="#F7E7CE" opacity="0.5"/>
      </g>

      <!-- Floral Element 2 -->
      <g transform="translate(15, 720)">
        <ellipse cx="45" cy="20" rx="22" ry="10" fill="none" stroke="#F7E7CE" stroke-width="1.5" opacity="0.6"/>
        <ellipse cx="45" cy="20" rx="12" ry="6" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.5"/>
        <circle cx="45" cy="20" r="4" fill="#F7E7CE" opacity="0.7"/>
      </g>

      <!-- Kolka Pattern 5 - Large -->
      <g transform="translate(12, 770)">
        <path 
          d="M52,0 C82,24 95,75 65,130 C35,185 2,155 22,100 C42,45 22,22 52,0 Z" 
          fill="url(#kolkaGradient1)" 
          stroke="#D4AF37" 
          stroke-width="2"
          opacity="0.9"
        />
        <path 
          d="M48,18 C70,36 80,72 58,115 C36,158 12,135 26,90 C40,45 30,30 48,18 Z" 
          fill="none" 
          stroke="#F7E7CE" 
          stroke-width="1.5"
          opacity="0.6"
        />
        <circle cx="50" cy="70" r="5" fill="#D4AF37" opacity="0.8"/>
        <circle cx="42" cy="98" r="3" fill="#F7E7CE" opacity="0.6"/>
        <circle cx="52" cy="45" r="3" fill="#F7E7CE" opacity="0.5"/>
      </g>

      <!-- Decorative Dots Row 3 -->
      <g transform="translate(10, 930)">
        <circle cx="35" cy="0" r="3" fill="#D4AF37" opacity="0.7"/>
        <circle cx="55" cy="12" r="2.5" fill="#F7E7CE" opacity="0.5"/>
        <circle cx="70" cy="5" r="2" fill="#D4AF37" opacity="0.6"/>
      </g>

      <!-- Kolka Pattern 6 - Medium -->
      <g transform="translate(22, 965)">
        <path 
          d="M42,0 C67,18 78,52 52,90 C26,128 0,105 16,62 C32,19 18,10 42,0 Z" 
          fill="url(#kolkaGradient2)" 
          stroke="#F7E7CE" 
          stroke-width="2"
          opacity="0.85"
        />
        <circle cx="42" cy="48" r="4" fill="#F7E7CE" opacity="0.7"/>
        <circle cx="36" cy="68" r="2.5" fill="#D4AF37" opacity="0.5"/>
      </g>

      <!-- Bottom Floral -->
      <g transform="translate(18, 1100)">
        <ellipse cx="42" cy="22" rx="20" ry="10" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.6"/>
        <circle cx="42" cy="22" r="4" fill="#D4AF37" opacity="0.7"/>
      </g>

      <!-- Gradients -->
      <defs>
        <linearGradient id="kolkaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:0.15"/>
          <stop offset="50%" style="stop-color:#F7E7CE;stop-opacity:0.1"/>
          <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:0.15"/>
        </linearGradient>
        <linearGradient id="kolkaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F7E7CE;stop-opacity:0.12"/>
          <stop offset="50%" style="stop-color:#D4AF37;stop-opacity:0.08"/>
          <stop offset="100%" style="stop-color:#F7E7CE;stop-opacity:0.12"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.kolka-border {
  position: fixed;
  top: 0;
  width: 100px;
  height: 100vh;
  z-index: 30;
  pointer-events: none;
  overflow: hidden;
}

.kolka-border-left {
  left: 0;
}

.kolka-border-right {
  right: 0;
  transform: scaleX(-1);
}

.kolka-svg {
  width: 100%;
  height: 100%;
  opacity: 0.85;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .kolka-border {
    width: 60px;
  }
  
  .kolka-svg {
    opacity: 0.7;
  }
}

@media (max-width: 480px) {
  .kolka-border {
    width: 45px;
  }
  
  .kolka-svg {
    opacity: 0.6;
  }
}
</style>
