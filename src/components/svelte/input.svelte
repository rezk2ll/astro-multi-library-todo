<script lang="ts">
  import { store } from '../../store';
  let input = '';
  let valid = true;

  const handleAdd = () => {
    if (!input.length) {
      valid = false;
      return;
    }

    store.addTodo({
      completed: false,
      id: Date.now(),
      text: input,
    });

    valid = true;
    input = "";
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  } 
</script>

<div class="relative w-full">
  <input
    bind:value={input}
    on:keydown={handleEnter}
    type="text"
    id="input"
    placeholder="write something to do"
    class="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-1 focus:outline-none { valid ? 'focus:ring-blue-300 border-green-300' : 'focus:ring-red-500 border-red-300'}"
    required
  />
  <button
    type="submit"
    on:click={handleAdd}
    class="text-gray-900 absolute right-2.5 bottom-2.5 bg-green-400 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
    >Add</button
  >
</div>
