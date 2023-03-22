<script setup lang="ts">
import Display from './display.vue';
import Icon from './icon.vue';
import Input from './input.vue';
</script>

<template>
  <div class="fixed animate-float shadow-none top-1/3 left-[80%]">
    <Icon />
  </div>
  <div class="flex flex-col h-full">
    <div class="flex-grow overflow-x-auto">
      <Display />
    </div>
    <Input />
  </div>
</template>
