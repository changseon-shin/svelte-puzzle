<script>
    import Block from './Block.svelte';
    import {blocks} from '../stores.ts';
</script>

<template>
    <div class="board">
        {#each $blocks as blockNumber, i (i)}
            <Block
                blockNumber={blockNumber}
            />
        {/each}
    </div>
</template>

<style>
    .board {
        width: 500px;
        border: 1px solid #ccc;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }
</style>