  <script>
    import { count } from './store.js';
    import Increment from './Increment.svelte';
    import Decrement from './Decrement.svelte';
    import Resetter from './Resetter.svelte';

    let count_value;

    const unsubscribe = count.subscribe(value => {
      count_value = value;
    })
  </script>

  <style>
    h1 {
      color: purple;
    }
  </style>

  <h1>The count is {count_value}</h1>
  <Increment />
  <Decrement />
  <Resetter />

