<script setup lang="ts">
import { ref } from 'vue';
import { store } from '../../store';

const input = ref<string>('');
const valid = ref<boolean>(true);

const handleAdd = () => {
  if (!input.value.length) {
    valid.value = false;
    return;
  }

  store.addTodo({
    completed: false,
    id: Date.now(),
    text: input.value,
  });

  valid.value = true;
  input.value = '';
};

</script>

<template>
  <div class="relative w-full">
    <input
      @keyup.enter="handleAdd"
      type="text"
      id="input"
      v-model="input"
      placeholder="write something to do"
      :class="[valid ? 'focus:ring-blue-300 border-green-300' : 'focus:ring-red-500 border-red-300']"
      class="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none "
      required
    />
    <button
      type="submit"
      @click="handleAdd"
      class="text-gray-900 absolute right-2.5 bottom-2.5 bg-green-400 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
    >
      Add
    </button>
  </div>
</template>
