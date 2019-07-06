<script>
  import { time, elapsed } from './store.js';

  const formater = new Intl.DateTimeFormat('es', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });

</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>The time is {formater.format($time)}</h1>
<p>
  This page has ben opened for
  {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</p>





