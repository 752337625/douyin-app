<template>
	<div class="home">
		<div class="van_swipe">
			<swiper ref="mySwiper" :options="swiperOptions" @slideChangeTransitionStart="slideChangeTransitionStart">
				<swiper-slide v-for="(item,index) in videoList" :key="item.id">
					<video class="video_box" loop="loop" @timeupdate="timeupdate" @click="pause" @ended="ended" preload="metadata"
					 :poster="item.cover" playsInline webkit-playsinline="true" x5-playsinline x5-video-player-type="h5"
					 x5-video-player-fullscreen="true" x5-video-orientation="portraint" ref="index" @loadeddata="loadeddata"
					 @loadedmetadata="loadedmetadata" @loadstart="loadstart">
						<source :src="item.url" type="audio/mp4">
						</source>
						<p> 当前浏览器不支持video标签 </p>
					</video>
					<img v-show="iconPlayShow" class="icon_play" @click="playvideo()" :src="HR" />
				</swiper-slide>
			</swiper>
		</div>
		<bootom-tab :videoProcess="videoProcess" @changeTab="changeTab"></bootom-tab>
	</div>
</template>
<script>
	import {
		Swiper,
		SwiperSlide
	} from 'vue-awesome-swiper'
	// If you use Swiper 6.0.0 or higher
	import 'swiper/swiper-bundle.css'
	import {
		videoList
	} from '@/util/api'
	export default {
		data( ) {
			return {
				current: 0,
				HR: "http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575340653940esdHR.png",
				videoProcess: 0,
				iconPlayShow: true,
				swiperOptions: {
					direction: 'vertical',
					allowSlideNext: true,
					allowSlidePrev: true,
					effect: 'fade',
					lazy: {
						loadPrevNext: true,
						loadPrevNextAmount: 1,
					},
					on: {
						init: function ( ) {
							//Swiper初始化了
							if ( this.activeIndex === 0 ) {
								this.allowSlidePrev = false;
							} else {}
						},
					},
				},
				videoList: videoList,
			}
		},
		created( ) {},
		mounted( ) {
			this.$nextTick( ( ) => {
				this.canvasImage( );
			} )
			//this.playvideo( );
		},
		methods: {
			canvasImage( ) {},
			loadeddata( a ) {
				/* //当浏览器已加载音频/视频的当前帧时触发。3
				let output = document.getElementsByClassName( "swiper-slide-active" )[ 0 ]
				let video = document.querySelectorAll( 'video' )[ this.current ];
				video.currentTime=1
				let img = document.createElement( "img" );
				let canvas = document.createElement( "canvas" )
				canvas.width = video.width
				canvas.height = video.height;
				canvas.getContext( '2d' ).drawImage( video, 0, 0, canvas.width, canvas.height );
				img.classList = "canvas_image"
				img.src = canvas.toDataURL( "image/jpg" );
				output.appendChild( img );
				console.log( canvas.toDataURL( "image/png" ) ) */
			},
			loadedmetadata( a ) {
				//当浏览器已加载音频/视频的元数据时触发。2
			},
			loadstart( a ) {
				//当浏览器开始查找音频/视频时触发。1
			},
			slideChangeTransitionStart( sw ) {
				//暂停当前视频
				this.pause( )
				//重置当前视频
				this.load( );
				this.current = sw.activeIndex;
				this.videoProcess = 0;
				//播放下一個
				this.playvideo( )
				if ( sw.activeIndex === 0 ) {
					sw.allowSlidePrev = false;
				} else {
					sw.allowSlidePrev = true;
				}
			},
			timeupdate( ) {
				let video = document.querySelectorAll( 'video' )[ this.current ];
				let currentTime = video.currentTime.toFixed( 1 );
				let duration = video.duration.toFixed( 1 );
				this.videoProcess = parseInt( ( currentTime / duration ).toFixed( 2 ) * 100 )
			},
			load( ) {
				let video = document.querySelectorAll( 'video' )[ this.current ];
				video.load( );
			},
			pause( ) {
				let video = document.querySelectorAll( 'video' )[ this.current ];
				this.iconPlayShow = true;
				video.pause( );
			},
			ended( ) {
				//视频结束
				console.log( 1 )
				this.iconPlayShow = true;
			},
			playvideo( ) {
				let video = document.querySelectorAll( 'video' )[ this.current ];
				this.iconPlayShow = false;
				video.play( );
			},
			changeTab( value ) {
				console.log( value )
			}
		},
		components: {
			Swiper,
			SwiperSlide,
			BootomTab: ( ) => import( '../components/BootomTab' )
		},
	}
</script>
<style lang="less" scoped="scoped">
	div {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.video_box {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.icon_play {
		position: absolute;
		top: 50%;
		right: 0;
		left: 0;
		bottom: auto;
		margin: auto;
		z-index: 1001;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		width: 30px;
		height: 30px;
		transform: translateX(-15px);
		background-color: #ccc;
	}
</style>
