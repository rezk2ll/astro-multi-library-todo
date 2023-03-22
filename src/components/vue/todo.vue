<script setup lang="ts">
import Display from './display.vue';
import Icon from './icon.vue';
import Input from './input.vue';
</script>

<template>
  <div class="fixed animate-float shadow-none top-20 left-[60%] md:top-1/3 md:left-[80%]">
    <Icon />
  </div>
  <div class="flex flex-col h-full">
    <div class="flex-grow overflow-x-auto">
      <Display />
    </div>
    <Input />
  </div>
</template>
