<template>
	<div class="container_bottom" @click="changeTab">
		<div class="border_progress" ref="progress" :style="'width:'+videoProcess+'%'"></div>
		<div class="bottom_tab ">
			<router-link tag="span" class="bottom_tab_span" to="/Home" id="home">首页</router-link>
		</div>
		<div class="bottom_tab">
			<router-link tag="span" class="bottom_tab_span" to="/Found" id="found">发现</router-link>
		</div>
		<div class="bottom_tab bottom_icon_flex">
			<img src="http://oss.jishiyoo.com/images/file-1575427746903.png" alt="" class="bottom_tab_icon" id="images">
		</div>
		<div class="bottom_tab">
			<router-link tag="span" class="bottom_tab_span" to="/Message" id="message">消息</router-link>
		</div>
		<div class="bottom_tab">
			<router-link tag="span" class="bottom_tab_span" to="/My" re="my">我的</router-link>
		</div>
	</div>
</template>
<script>
	import {
		prefixStyle
	} from '@/util/dom'
	export default {
		props: {
			videoProcess: {
				type: Number,
				default: 0
			}
		},
		methods: {
			changeTab( ev ) {
				ev = event || ev;
				let target = ev.target || ev.srcElement;
				if ( !target.id ) return;
				this.$emit( "changeTab", target.id )
			},
		},
		watch: {
			videoProcess( newPercent, oldPercent ) {
				//console.log(newPercent,videoProcess)
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	div {
		width: 100%;
		height: 100%;
	}

	.container_bottom {
		position: fixed;
		bottom: 0;
		background-color: rgba(204, 204, 204, 0.1);
		height: 50px;
		/* border-top: 1px solid rgba(255, 255, 255, 0.7); */
		z-index: 10001;
		display: flex;

		//1px
		/* &::after {
			position: absolute;
			top: 0;
			left: 0;
			content: '';
			background-color: #ffffff;
			display: block;
			width: 100%;
			height: 1px;
			transform: scale(1, 0.5)
		} */
		.border_progress {
			width: 0;
			height: 1px;
			transform: scale(1, 0.5);
			background-color: #FAF9F9;
			position: absolute;
			top: 0;
			transition: .1s all;
			&::after {
				position: absolute;
				top: 0;
				right: 0;
				content: '';
				width: 2px;
				height: 2px;
				border-radius: 50%;
				background-color: #FFFFFF;
				animation: progshow 1s infinite;
			}
		}

		.bottom_tab {
			line-height: 50px;
			font-size: 16px;
			text-align: center;
			font-weight: 700;
			color: #ccc;

			.bottom_tab_icon {
				height: 65%;
				width: 65%;
			}

			.bottom_tab_span {
				padding-bottom: 3px;
			}

			.router-link-active {
				border-bottom: 2px solid;
				color: #fff;
				transition: all .3s;
			}
		}

		.bottom_icon_flex {
			display: flex;
			align-items: center;
			justify-content: center
		}
	}
</style>
