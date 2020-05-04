<script>
    export let blockNumber;
</script>

<template>
    <div class="block">
        {#if blockNumber}
            <span class="number">{blockNumber}</span>
        {/if}
    </div>
</template>

<style>
    .block {
        width: 25%;
        height: 125px;
        padding: 5px;
    }

    .number {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: blueviolet;
        color: white;
        font-size: 25px;
        border-radius: 50%;
    }
</style>