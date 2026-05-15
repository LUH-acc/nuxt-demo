// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: {
      // 方式 A：用 theme 里的 font-archivo（推荐，见下方 theme.fontFamily）
      'rx-h2':
        'font-archivo font-bold text-black text-[24px] min-[641px]:text-[48px]',
      'rx-p': 'font-inter text-[#042144] mt-2',
      'wh-full': 'w-full h-full',
      'text-h3': 'font-archivo font-bold text-[40px]',
      'text-p': 'font-inter text-[#575D60] font-size-[18px] font-weight-400',
      'test-container': 'lg:max-w-[1280px] mx-auto px-4',
    },
    rules: [
        [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    ],
    theme: {
      fontSize: {
        h3: ['40px', { fontWeight: 'bold', fontFamily: 'var(--font-Archivo-family), system-ui, sans-serif' }],
        
      },
      colors: {
        // ...
      },
      fontFamily: {
        archivo: 'var(--font-Archivo-family), system-ui, sans-serif',
        inter: 'var(--font-Inter-family), system-ui, sans-serif',
      },
      breakpoints: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // ...
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })