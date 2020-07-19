<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
	</div>
</template>

<style lang="less" scoped="">
	#app {
		width: 100%;
		height: 100%;

		.slide-enter-active,
		.slide-leave-active {
			transition: all 0.3s;
		}

		.slide-enter-to,
		.slide-leave-to {
			transform: translate3d(0, -100%, 0);
			opacity: 0;
		}

	}
</style>
