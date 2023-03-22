<script lang="ts">
  import { store } from '../../store';

  export let id: number;
  export let completed: boolean;
</script>

<div
  class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
>
  <input
    type="checkbox"
    name="toggle"
    id="toggle-{id}"
    bind:checked={completed}
    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
    on:click={() => store.toggle(id)}
  />
  <label
    for="toggle-{id}"
    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
  />
</div>
