<template>
	<transition name="found">
		<div class="found_content">
			55555
			
		</div>


	</transition>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.found-enter-active,
	.found-leave-active {
		transition: all 0.3s;
	}
	
	.found-enter,
	.found-leave-to {
		transform: translate3d(0, 100%, 0);
		opacity: 0;
	}
	.found_content {
		height: 100%;
		width: 100%;
		background-color: lawngreen;
	}
</style>
