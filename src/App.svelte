<script lang="typescript">
	import Board from "./components/Board.svelte";
	import {blocks} from './stores.ts';
	import {generateRandomBlocks, distinguishValidGame} from './utils/blockGenerator.ts';

	let isResetable: boolean = false;

	const generateGame = () => {
		const randomBlocks = generateRandomBlocks();
		return distinguishValidGame(randomBlocks) ? randomBlocks : generateGame();
	}

	const resetBlocks = (): void => {
		blocks.update(_ => generateGame());
		isResetable = true;
	}
</script>

<template>
	<main>
		<header>
			<h1>SVELTE TODO LIST</h1>
			<img src="logo-puzzle.png" alt="15puzzle">
		</header>
		<div class="button" on:click={resetBlocks}>
			<span>{isResetable ? '다시하기' : '시작하기'}</span>
		</div>
		<Board />
	</main>
</template>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	header {
		margin: 50px 0 30px 0;
		display: flex;
		justify-content: center;
	}
	header h1 {
		text-indent: -9999px;
		overflow: hidden;
	}
	.button {
		width: 100px;
		height: 50px;
		border: 1px solid #ccc;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 30px;
	}
</style>