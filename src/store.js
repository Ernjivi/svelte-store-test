import { readable } from 'svelte/store';

export const time = readable(null, function start(set){
    const interval = setInterval(() => {
        set(new Date());
    }, 500)
    return function stop(){
        clearInterval(interval);
    };
})