<script lang="ts">
  import Display from './display.svelte';
  import Icon from './icon.svelte';
  import Input from './input.svelte';
</script>

<div class="fixed animate-float shadow-none top-1/3 left-[80%]">
  <Icon size="big" />
</div>
<div class="flex flex-col h-full">
  <div class="flex-grow overflow-x-auto">
    <Display />
  </div>
  <Input />
</div>
