<template>
  <div class="bg-[#0d2f3e] p-6 rounded-lg shadow-lg h-full" data-aos="fade-up">
    <div class="flex items-center mb-4">
      <div class="text-[#ffe001]">
        <Icon name="ic:baseline-star" class="inline-block" />
        <Icon name="ic:baseline-star" class="inline-block" />
        <Icon name="ic:baseline-star" class="inline-block" />
        <Icon name="ic:baseline-star" class="inline-block" />
        <Icon name="ic:baseline-star" class="inline-block" />
      </div>
    </div>
    <p class="text-gray-300 mb-4">"{{ text }}"</p>
    <p class="font-semibold">- {{ author }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
})
</script> 