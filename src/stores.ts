import {Writable, writable} from 'svelte/store';

const answer: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

export const blocks: Writable<Array<Number>> = writable(answer);