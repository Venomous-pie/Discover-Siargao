import presetWebFonts from '@unocss/preset-web-fonts'
import presetWind3 from '@unocss/preset-wind3'
import presetIcons from '@unocss/preset-icons'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({ 
      fetch: {
        css: 'none', 
      },
      fonts: {
        'pacifico': 'Pacifico',
        'oswald': 'Oswald',
        'inter': 'Inter',
        'lobster': 'Lobster',
      }
    }),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
  ],
})