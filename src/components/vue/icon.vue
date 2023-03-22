<script lang="ts" setup>
withDefaults(defineProps<{ size?: "small" | "big" }>(), {
  size: "big"
})
</script>

<template>
  <svg :class="{ 'w-6 h-6 hover:animate-pulse': size === 'small', 'w-28 h-28': size === 'big' }" version="1.1"
    viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
      <g transform="translate(178.06 235.01)">
        <path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883" />
      </g>
      <g transform="translate(178.06 235.01)">
        <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e" />
      </g>
    </g>
  </svg>
</template>