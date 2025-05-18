// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      title: 'Manny Car Detail - Lavagens & Detailing',
      meta: [
        { name: 'description', content: 'Serviços premium de lavagem, detailing e proteção para o seu veículo em Coimbra.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js' },
        { 
          innerHTML: `document.addEventListener('DOMContentLoaded', function() { 
            AOS.init({
              once: true,
              duration: 800,
              easing: 'ease-out-cubic'
            }); 
          });`
        }
      ]
    }
  }
})