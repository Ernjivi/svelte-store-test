<script>
  import { time } from './store.js';
  import { onDestroy } from 'svelte';

  const formatter = new Intl.DateTimeFormat('es', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
  });
  
  onDestroy(time)
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>{formatter.format($time)}</h1>



