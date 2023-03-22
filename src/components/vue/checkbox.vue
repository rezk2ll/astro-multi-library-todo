<script setup lang="ts">
import { store } from '../../store';

defineProps<{
  id: number;
  completed: boolean;
}>();
</script>
<template>
  <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" :id="`toggle-${id}`" :checked="completed"
      class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      @click="() => store.toggle(id)" />
    <label :for="`toggle-${id}`" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
  </div>
</template>
