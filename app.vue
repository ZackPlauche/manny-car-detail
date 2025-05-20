<template>
  <div class="min-h-screen bg-[#103b4e] text-white relative">
    <!-- Navbar -->
    <nav class="bg-[#103b4e] fixed top-0 left-0 right-0 z-50 shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <a href="#" class="flex items-center">
            <img src="/logo.png" alt="Manny Car Detail Logo" class="h-10" />
          </a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8 items-center">
            <a href="#services" class="hover:text-[#ffe001] transition-colors">Serviços</a>
            <a href="#testimonials" class="hover:text-[#ffe001] transition-colors">Testemunhos</a>
            <a href="#about" class="hover:text-[#ffe001] transition-colors">Sobre Nós</a>
            <a href="#contact" class="hover:text-[#ffe001] transition-colors">Contacto</a>
            <a href="tel:+351919258895" class="bg-[#ffe001] text-[#103b4e] font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center">
              <Icon name="ph:phone-fill" class="mr-2" /> 919 258 895
            </a>
          </div>
          
          <!-- Mobile Menu Toggle -->
          <input type="checkbox" id="menu-toggle" class="hidden peer" />
          <label for="menu-toggle" class="md:hidden cursor-pointer text-white">
            <Icon name="mdi:menu" class="text-2xl peer-checked:hidden block" />
            <Icon name="mdi:close" class="text-2xl peer-checked:block hidden" />
          </label>
          
          <!-- Mobile Menu -->
          <div class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-screen absolute top-full left-0 right-0 bg-[#0d2f3e] shadow-lg md:hidden">
            <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#services" class="py-3 px-4 border-b border-[#103b4e] hover:bg-[#103b4e] hover:text-[#ffe001] transition-colors rounded">Serviços</a>
              <a href="#testimonials" class="py-3 px-4 border-b border-[#103b4e] hover:bg-[#103b4e] hover:text-[#ffe001] transition-colors rounded">Testemunhos</a>
              <a href="#about" class="py-3 px-4 border-b border-[#103b4e] hover:bg-[#103b4e] hover:text-[#ffe001] transition-colors rounded">Sobre Nós</a>
              <a href="#contact" class="py-3 px-4 border-b border-[#103b4e] hover:bg-[#103b4e] hover:text-[#ffe001] transition-colors rounded">Contacto</a>
              <div class="flex flex-col space-y-3 pt-3">
                <a href="tel:+351919258895" class="bg-[#ffe001] text-[#103b4e] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                  <Icon name="ph:phone-fill" class="mr-2 text-xl" /> 919 258 895
                </a>
                <a href="https://maps.app.goo.gl/5c14186YesjMHJrC8" target="_blank" class="bg-white text-[#103b4e] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                  <Icon name="mdi:map-marker" class="mr-2 text-xl text-red-600" /> Direções
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B351919258895" target="_blank" class="bg-[#25D366] text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center">
                  <Icon name="mdi:whatsapp" class="mr-2 text-xl" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative h-screen pt-16">
      <div class="absolute inset-0 bg-gradient-to-b from-[#103b4e]/90 to-[#103b4e] z-10"></div>
      <NuxtImg 
        src="/backgrounds/facebook-banner.png" 
        alt="Manny Car Detail" 
        class="object-cover object-center h-full w-full absolute inset-0"
        format="webp"
        quality="90"
        loading="eager"
        placeholder
      />
      <div class="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20">
        <img 
          src="/logo.png" 
          alt="Manny Car Detail Logo" 
          class="w-48 mb-8" 
          data-aos="fade-down" 
          data-aos-delay="200"
        />
        <h1 class="text-4xl md:text-6xl font-bold text-center mb-4" data-aos="fade-up" data-aos-delay="400">
          <span class="text-[#ffe001]">MANNY</span> 
          <span class="font-light italic">Car Detail</span>
        </h1>
        <p class="text-lg md:text-xl max-w-3xl text-center mb-8" data-aos="fade-up" data-aos-delay="600">
          Lavagens Premium | Car Detail | Proteção em Acrílico | Polimento Exterior | 
          Limpeza e Higienização | Proteção em Cerâmica | Polimento de Ópticas
        </p>
        <div class="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="800">
          <a href="tel:+351919258895" class="bg-[#ffe001] text-[#103b4e] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all flex items-center">
            <Icon name="ph:phone-fill" class="mr-2 text-xl" /> 919 258 895
          </a>
          <a href="https://maps.app.goo.gl/5c14186YesjMHJrC8" target="_blank" class="bg-white text-[#103b4e] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all flex items-center">
            <Icon name="mdi:map-marker" class="mr-2 text-xl text-red-600" /> Direções
          </a>
          <a href="https://api.whatsapp.com/send?phone=%2B351919258895" target="_blank" class="bg-[#25D366] text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all flex items-center">
            <Icon name="mdi:whatsapp" class="mr-2 text-xl" /> WhatsApp
          </a>
        </div>
      </div>
    </header>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-[#0d2f3e]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          <span class="text-[#ffe001]">NOSSOS</span> SERVIÇOS
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-[#103b4e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div class="text-[#ffe001] text-4xl mb-4">
              <Icon name="mdi:car-wash" />
            </div>
            <h3 class="text-xl font-bold mb-3">Lavagem Premium</h3>
            <p class="text-gray-300">Lavagem completa com atenção aos detalhes, garantindo brilho e proteção para o seu veículo.</p>
          </div>
          
          <div class="bg-[#103b4e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div class="text-[#ffe001] text-4xl mb-4">
              <Icon name="mdi:car-cog" />
            </div>
            <h3 class="text-xl font-bold mb-3">Car Detail</h3>
            <p class="text-gray-300">Tratamento detalhado interior e exterior, restaurando a aparência original do seu automóvel.</p>
          </div>
          
          <div class="bg-[#103b4e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <div class="text-[#ffe001] text-4xl mb-4">
              <Icon name="mdi:shield-sun" />
            </div>
            <h3 class="text-xl font-bold mb-3">Proteção em Acrílico</h3>
            <p class="text-gray-300">Proteção duradoura que mantém a pintura do seu carro protegida contra os elementos.</p>
          </div>
          
          <div class="bg-[#103b4e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <div class="text-[#ffe001] text-4xl mb-4">
              <Icon name="mdi:car-wrench" />
            </div>
            <h3 class="text-xl font-bold mb-3">Polimento Exterior</h3>
            <p class="text-gray-300">Remoção de arranhões e marcas superficiais, devolvendo o brilho original da pintura.</p>
          </div>
          
          <div class="bg-[#103b4e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
            <div class="text-[#ffe001] text-4xl mb-4">
              <Icon name="mdi:spray-bottle" />
            </div>
            <h3 class="text-xl font-bold mb-3">Limpeza e Higienização</h3>
            <p class="text-gray-300">Limpeza profunda do interior, eliminando bactérias e odores indesejáveis.</p>
          </div>
          
          <div class="bg-[#103b4e] p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
            <div class="text-[#ffe001] text-4xl mb-4">
              <Icon name="mdi:diamond-stone" />
            </div>
            <h3 class="text-xl font-bold mb-3">Proteção em Cerâmica</h3>
            <p class="text-gray-300">Proteção avançada que proporciona brilho intenso e resistência superior.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section with Slideshow -->
    <section id="testimonials" class="py-20 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-[#103b4e]/95 to-[#103b4e]/95 z-0"></div>
      <div class="absolute inset-0 opacity-15 z-0">
        <NuxtImg 
          src="/backgrounds/luca-nicoletti-HzzKiPdjGd4-unsplash.jpg" 
          alt="Clean car interior" 
          class="object-cover object-center h-full w-full"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
          <span class="text-[#ffe001]">O QUE DIZEM</span> OS NOSSOS CLIENTES
        </h2>
        <p class="text-center text-gray-300 mb-16" data-aos="fade-up" data-aos-delay="200">
          Descubra o que nossos <span class="text-[#ffe001] font-bold">47 clientes</span> dizem sobre nós no Google
        </p>
        
        <!-- Testimonial Slideshow -->
        <div class="relative overflow-hidden" data-aos="fade-up">
          <!-- Review counter display -->
          <div class="flex justify-center mb-8">
            <div class="text-center bg-[#0d2f3e] px-6 py-2 rounded-lg">
              <p class="text-white text-lg">
                <span class="text-[#ffe001] font-bold">10</span> Avaliações Excelentes no Google
              </p>
            </div>
          </div>
          
          <!-- Static display of all testimonials in a grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Testimonial 1 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="100">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Recomendo vivamente! O carro ficou impecável após uma limpeza interior e exterior. Agradeço todo o cuidado e a atenção ao pormenor bem como o profissionalismo."</p>
              <p class="font-semibold">- Margarida Carmo</p>
            </div>
            
            <!-- Testimonial 2 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="150">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Fantastic cleaning with great attention to detail. Manuel is sincere and professional! I'm thrilled to bring my car here to clean."</p>
              <p class="font-semibold">- Coraini</p>
            </div>
            
            <!-- Testimonial 3 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="200">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Amazing car detailer and general cleaner in Coimbra! A must visit! Manuel is super humble and hardworking. I will repeat the treatment for my cars for sure!"</p>
              <p class="font-semibold">- José Nunes</p>
            </div>
            
            <!-- Testimonial 4 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="250">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Serviço excelente e com enorme atenção ao detalhe. O carro ficou como novo e tratado com os melhores produtos. Equipa simpática e disponível. Vou sem dúvida que vou voltar."</p>
              <p class="font-semibold">- Daniel Bilhau</p>
            </div>
            
            <!-- Testimonial 5 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="300">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Totalmente recomendado, levei meu carro para polir e dar brilho e fiquei muito satisfeito com o resultado."</p>
              <p class="font-semibold">- Carlos Alberto Rodriguez Portal</p>
            </div>
            
            <!-- Testimonial 6 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="350">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Qualidade de serviço muito a cima do normal desde os produtos usados até às técnicas. Muito atenciosos e profissionais. Voltarei com toda a certeza."</p>
              <p class="font-semibold">- Daniel Gomes</p>
            </div>
            
            <!-- Testimonial 7 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="400">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Exelente serviço! Depois de uma limpeza perfeita, ainda entregaram o meu carro no meu local de trabalho. Recomendo!"</p>
              <p class="font-semibold">- Ana Margarida Costa</p>
            </div>
            
            <!-- Testimonial 8 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="450">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Fui hoje com o carro para uma limpeza detalhada e o carro ficou impecável, o carro tinha sido usado nas obras e estava todo sujo por dentro e cheio de pó, saiu da limpeza como se nada tivesse acontecido, estofos lavados, carro aspirado."</p>
              <p class="font-semibold">- Raul Marian</p>
            </div>
            
            <!-- Testimonial 9 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="500">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Levei a viatura para fazer polimento dos faróis. Ficou excelente! Obrigado e até breve."</p>
              <p class="font-semibold">- Mário Alves</p>
            </div>
            
            <!-- Testimonial 10 -->
            <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up" data-aos-delay="550">
              <div class="flex items-center mb-4">
                <div class="text-[#ffe001]">
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                  <Icon name="ic:baseline-star" class="inline-block" />
                </div>
              </div>
              <p class="text-gray-300 mb-4">"Serviço nota mil levei meu carro para polir os faróis e lavar super recomendo ficou ótimo a limpeza, carro cheiro super indico e preço justo."</p>
              <p class="font-semibold">- Aimee Blante</p>
            </div>
          </div>
          
          <!-- View more reviews button -->
          <div class="mt-12 text-center">
            <a href="https://www.google.com/search?q=Manny+Car+Detail+Coimbra+reviews" target="_blank" class="inline-block bg-[#ffe001] text-[#103b4e] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all">
              <Icon name="mdi:google" class="mr-2 text-xl inline-block" /> Ver todas as 47 avaliações no Google
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- White Section -->
    <section id="about" class="py-20 bg-white relative">
      <div class="absolute inset-0 opacity-5 z-0">
        <NuxtImg 
          src="/backgrounds/swansway-motor-group-DyiDM013ARs-unsplash.jpg" 
          alt="Car being detailed" 
          class="object-cover object-center h-full w-full"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
          <span class="text-[#ffe001]">QUALIDADE</span> <span class="text-[#103b4e]">PREMIUM</span>
        </h2>
        <p class="text-lg text-center text-[#103b4e] mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Utilizamos os melhores produtos e técnicas para cuidar do seu veículo
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 class="text-2xl font-semibold text-[#103b4e] mb-4">Por que escolher a Manny Car Detail?</h3>
            <div class="space-y-4 text-[#103b4e]">
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-[#103b4e] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Icon name="mdi:check-bold" class="text-[#ffe001]" />
                </div>
                <p>Profissionais especializados e atentos aos detalhes</p>
              </div>
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-[#103b4e] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Icon name="mdi:check-bold" class="text-[#ffe001]" />
                </div>
                <p>Produtos de alta qualidade que garantem resultados duradouros</p>
              </div>
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-[#103b4e] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Icon name="mdi:check-bold" class="text-[#ffe001]" />
                </div>
                <p>Serviço de recolha e entrega de veículos</p>
              </div>
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-[#103b4e] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Icon name="mdi:check-bold" class="text-[#ffe001]" />
                </div>
                <p>Disponibilidade 24 horas, 7 dias por semana</p>
              </div>
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-[#103b4e] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Icon name="mdi:check-bold" class="text-[#ffe001]" />
                </div>
                <p>Satisfação garantida com compromisso de qualidade</p>
              </div>
            </div>
          </div>
          <div class="relative rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
            <div class="aspect-[4/3] bg-[#103b4e] flex items-center justify-center">
              <div class="text-white text-center p-8">
                <Icon name="mdi:car-limousine" class="text-8xl mb-4 text-[#ffe001]" />
                <h3 class="text-2xl font-bold mb-2">Restauramos a beleza do seu veículo</h3>
                <p class="mb-6">Soluções personalizadas para cada tipo de veículo e necessidade</p>
                <div class="flex flex-wrap justify-center gap-4">
                  <a href="https://api.whatsapp.com/send?phone=%2B351919258895" target="_blank" class="inline-block bg-[#0d2f3e] text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all">
                    Agende Agora
                  </a>
                  <a href="https://maps.app.goo.gl/5c14186YesjMHJrC8" target="_blank" class="inline-block bg-[#ffe001] text-[#103b4e] font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all">
                    <Icon name="mdi:map-marker" class="mr-2 inline-block" /> Como Chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-[#0d2f3e] relative">
      <div class="absolute inset-0 bg-[#0d2f3e]/90 z-0"></div>
      <div class="absolute inset-0 opacity-10 z-0">
        <NuxtImg 
          src="/backgrounds/vlad-grebenyev-7eCBiZgyr4E-unsplash.jpg" 
          alt="Polished car wheel" 
          class="object-cover object-center h-full w-full"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">
          <span class="text-[#ffe001]">ENTRE EM</span> CONTACTO
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-[#103b4e] p-8 rounded-lg shadow-lg" data-aos="fade-right">
            <h3 class="text-2xl font-semibold mb-6">Informações</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:map-marker" class="text-[#ffe001] text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold">Endereço</p>
                  <p class="text-gray-300">Rua Académico 140, 3045-081 Coimbra, Portugal</p>
                  <a href="https://maps.app.goo.gl/5c14186YesjMHJrC8" target="_blank" class="text-[#ffe001] hover:underline inline-flex items-center mt-1">
                    <span>Obter direções</span>
                    <Icon name="mdi:arrow-right" class="ml-1" />
                  </a>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:phone" class="text-[#ffe001] text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold">Telefone</p>
                  <p class="text-gray-300">919 258 895</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:email" class="text-[#ffe001] text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold">Email</p>
                  <p class="text-gray-300">mannycorporation81@gmail.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <Icon name="mdi:clock" class="text-[#ffe001] text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p class="font-semibold">Horário</p>
                  <p class="text-gray-300">Aberto 24 horas, 7 dias por semana</p>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div class="bg-[#103b4e] p-8 rounded-lg shadow-lg mb-8">
              <h3 class="text-2xl font-semibold mb-6">Redes Sociais</h3>
              <div class="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/mannycardetail/" target="_blank" class="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center hover:scale-110 transition-all">
                  <Icon name="mdi:instagram" class="text-2xl" />
                </a>
                <a href="https://www.facebook.com/mannycardetail" target="_blank" class="w-12 h-12 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-all">
                  <Icon name="mdi:facebook" class="text-2xl" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B351919258895" target="_blank" class="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-all">
                  <Icon name="mdi:whatsapp" class="text-2xl" />
                </a>
              </div>
            </div>
            
            <div class="bg-[#103b4e] p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold mb-6">Localização</h3>
              <div class="aspect-video overflow-hidden rounded-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0558072248554!2d-8.430847!3d40.1935902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f9043d3b8fef%3A0x34f6da4b059e767f!2sR.%20Acad%C3%A9mico%20140%2C%203045-081%20Coimbra!5e0!3m2!1sen!2spt!4v1623152469858!5m2!1sen!2spt" 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="true" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-[#092631]">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <img src="/logo.png" alt="Manny Car Detail Logo" class="h-12" />
          </div>
          <div class="text-center md:text-right">
            <p class="text-sm text-gray-400">© 2024 Manny Car Detail. Todos os direitos reservados.</p>
            <p class="text-sm text-gray-400">Rua Académico 140, 3045-081 Coimbra, Portugal</p>
            <p class="text-sm text-gray-400 mt-2">Website built and detailed by <a href="https://www.zackplauche.com" target="_blank" class="text-[#ffe001] hover:underline">Zack Plauché</a> 🧼🚗✨</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
