<template>
	<div class="home">
		<div style="display: none;">
			1.取消控件，防止不同端的不同。
			2.取消自动播放，在点击进入或者切换屏幕的时候进行自动播放。主要不同浏览器不允许自动播放。这里的自动播放，无论是 video 标签的 autoplay 属性还是通过 js 自动调用 video 的 play 方法都是自动播放
			开始的时候就有过来人的同事提醒过要我注意下微信的视屏自动播放，经过别人的反馈，其实不止是微信不允许，有些机器浏览器也是不允许，这个时候该怎么办？结合 touch 事件一起实现。视频播放是监听 scroll 事件，等到可视范围内调用
			video.play() 自动播放，既然有些浏览器需要用户交互，那可以选择 touch 事件，当用户 touch 到这块展示播放区域，触发 touch 事件调用 play, 这里我们的动画区域足够大，不担心用户 touch
			不到。这里使用变量来表示视频是否已经播放，如果已经播放就不再执行 touch 事件，避免频繁调用 play
			3.层级问题:在安卓手机下，不管是微信内置的浏览器还是自带的浏览器，当你点击视频播放后，该视频就会始终显示在最上层，播放结束后也是在最上层，这时候假如我们有在视频的容器中放一些其他元素的话，都会被盖住了，就点击不到
			4.playsInline/webkit-playsinline="true"/x5-playsinline解决一些浏览器自动全屏外加广告的特性

		</div>
		<div class="van_swipe">
			<swiper ref="mySwiper" :options="swiperOptions">
				<swiper-slide v-for="item in videoList" :key="item.id">
					<video class="video_box" loop :poster="item.cover" timeupdate playsInline webkit-playsinline="true" x5-playsinline
					 :src="item.url">
						<p> 当前浏览器不支持video标签 </p>
					</video>
				</swiper-slide>
			</swiper>
		</div>
		<div class="container_bottom" @click="changeTab">
			<div class="border_progress" :style="'width:'+videoProcess+'%'"></div>
			<div class="bottom_tab ">
				<router-link tag="span" class="bottom_tab_span" to="/Home">首页</router-link>
			</div>
			<div class="bottom_tab">
				<router-link tag="span" class="bottom_tab_span" to="/Found">发现</router-link>
			</div>
			<div class="bottom_tab bottom_icon_flex">
				<img src="http://oss.jishiyoo.com/images/file-1575427746903.png" alt="" class="bottom_tab_icon">
			</div>
			<div class="bottom_tab">
				<router-link tag="span" class="bottom_tab_span" to="/Message">消息</router-link>
			</div>
			<div class="bottom_tab">
				<router-link tag="span" class="bottom_tab_span" to="/My">我的</router-link>
			</div>
		</div>

	</div>
</template>
<script>
	import {
		Swiper,
		SwiperSlide
	} from 'vue-awesome-swiper'
	// If you use Swiper 6.0.0 or higher
	import 'swiper/swiper-bundle.css'

	export default {
		data() {
			return {
				videoProcess: 10,
				swiperOptions: {
					direction: 'vertical',
					allowSlideNext: true,
					allowSlidePrev: true,
					lazy: {
						loadPrevNext: true,
						loadPrevNextAmount: 1,
					},
					on: {
						init: function() {
							//Swiper初始化了
							if (this.activeIndex === 0) {
								this.allowSlidePrev = false;
							} else {

							}
						},
						slideChangeTransitionStart: function() {
							console.log(this.activeIndex)
							if (this.activeIndex === 0) {
								this.allowSlidePrev = false;
							} else {
								this.allowSlidePrev = true;
							}
						},
					},
				},
				videoList: [{
					id: 1,
					url: 'http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4', //视频源
					cover: 'http://oss.jishiyoo.com/images/file-1575341210559.png', //封面
					tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449277018pF3XL.jpg', //作者头像
					fabulous: false, //是否赞过
					tagFollow: false, //是否关注过该作者
					author_id: 1, //作者ID
					author: 'superKM',
					des: '武汉加油'
				}, {
					id: 2,
					url: 'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4',
					cover: 'http://oss.jishiyoo.com/images/file-1575343195934.jpg',
					tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449298299M3V50.jpg',
					fabulous: true, //是否赞过
					tagFollow: false, //是否关注过该作者
					author_id: 2, //作者ID
					author: 'superKM',
					des: '中国加油'
				}, {
					id: 3,
					url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
					cover: 'http://oss.jishiyoo.com/images/file-1575343262684.jpg',
					tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449277018pF3XL.jpg',
					fabulous: false, //是否赞过
					tagFollow: false, //是否关注过该作者
					author_id: 1, //作者ID
					author: 'superKM',
					des: '武汉加油'
				}, {
					id: 4,
					url: 'http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4',
					cover: 'http://oss.jishiyoo.com/images/file-1575343508574.jpg',
					tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449277018pF3XL.jpg',
					fabulous: false, //是否赞过
					tagFollow: false, //是否关注过该作者
					author_id: 1, //作者ID
					author: 'superKM',
					des: '中国加油'
				}],
			}
		},
		mounted() {

		},
		methods: {
			changeTab() {
				console.log(this)
			}
		},
		components: {
			Swiper,
			SwiperSlide
		},
	}
</script>
<style lang="less" scoped="scoped">
	div {
		width: 100%;
		height: 100%;
		//background: #000;
	}

	.video_box {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.container_bottom {
		position: fixed;
		bottom: 0;
		background-color: rgba(204, 204, 204, 0.1);
		height: 50px;
		/* border-top: 1px solid rgba(255, 255, 255, 0.7); */
		z-index: 10001;
		display: flex;

		&::after {
			position: absolute;
			top: 0;
			left: 0;
			content: '';
			background-color: #ffffff;
			display: block;
			width: 100%;
			height: 1px;
			/*no*/
			transform: scale(1, 0.5);

		}

		.border_progress {
			width: 0;
			height: 1px;
			background: #bababa;
			position: absolute;
			top: 0;
			transition: .1s all;
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
