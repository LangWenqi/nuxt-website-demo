<template>
  <div class="abroad__list">
		<div class="abroad__item cursor" flex v-for="item in list" :key="item.id">
			<div class="abroad__item__img" flex-box="0">
				<img class="img" :src="item.thumb">
			</div>
			<!-- <div class="abroad__item__img__flag"></div> -->
			<div flex-box="1">
				
				<div class="abroad__item__middle" flex="main:justify cross:top">
					<div flex-box="1" class="abroad__item__left">
						<div class="abroad__item__title">
							{{item.title}}
						</div>
						<div v-if="item.course.tags && item.course.tags.length > 0">
							<!-- :style="{color: colorList[tagIndex%5], border: `1px solid ${colorList[tagIndex%5]}`, 'margin-right': '6px'}" -->
							<el-tag
								:style="{color: tag.color, border: `1px solid ${tag.color}`, 'margin-right': '6px'}"
								color="#fff"
								v-for="(tag) in item.course.tags"
								:key="tag.id"
								size="mini"
								effect="plain"
								>
								{{ tag.text }}
							</el-tag>
						</div>
						<div class="abroad__item__wrapper" v-html="item.content">
							<!-- <div class="abroad__item__wrap" flex="cross:center" v-for="child in item.children" :key="child.id">
								<div class="abroad__item__wrap__title" flex-box="0">
									{{child.title}}：
								</div>
								<div class="abroad__item__wrap__content" flex-box="1">
									{{child.content}}
								</div>
							</div> -->
						</div>
					</div>
					<div flex-box="0" class="abroad__item__right">
						<div style="height: 28px">
							<div class="abroad__item__right__value">{{item.course.ctype ? cType[item.course.ctype] : ''}}</div>
						</div>
						<div class="abroad__item__right__wrapper">
							<div class="abroad__item__right__label">研学时长</div>
							<div class="abroad__item__right__value">{{item.course.time.len + '' + (item.course.time.unit ? durationMap[item.course.time.unit] : '')}}</div>
						</div>
						<div class="abroad__item__right__wrapper">
							<div class="abroad__item__right__label">适合年龄</div>
							<div class="abroad__item__right__value">{{item.course.age.src + '岁' + ' - ' + item.course.age.dst + '岁'}}</div>
						</div>
					</div>
				</div>
				<div class="abroad__item__bottom" flex="main:right cross:center">
					<div class="abroad__item__bottom__mark" flex="main:right" flex-box="1">{{item.course.note || ''}}</div>
					<div class="abroad__item__bottom__btn cursor" flex-box="0" flex="main:center cross:center" @click="dialogVisible = true">立即咨询</div>
				</div>
			</div>
		</div>
		<el-dialog
			title="联系方式"
			:visible.sync="dialogVisible"
			width="432px"
			top="30vh"
			>
			<div>
				<div class="dia__wrap" flex="cross:center" v-for="(contactItem, contactIndex) in contactList" :key="contactIndex">
					<div class="dia__title" flex-box="0">{{contactItem.title}}：</div>
					<div class="dia__content" flex-box="1">{{contactItem.content}}</div>
					<el-tag size="mini" style="margin-left: 12px; cursor: pointer" flex-box="0" @click="doCopy(contactItem.content)">复制</el-tag>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	import { durationMap, cType } from '@/config/map';
  export default {
		props: {
			list: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data () {
			return {
				cType,
				durationMap,
				contactList: [
					{
						title: 'QQ',
						content: '2645765344'
					},
					{
						title: '微信',
						content: '微信'
					},
					{
						title: '电话',
						content: '021-6100-5055 转 6410'
					}
				],
				dialogVisible: false,
				colorList: [
					'#e7a23d',
					'#6dc354',
					'#f95285',
					'#dd4bd0',
					'#2292ef'
				]
			}
		},
    components: {
    },
    mounted () {
			
    },
		destroyed () {
		},
    methods: {
			doCopy (content) {
				let oInput = document.createElement('input')
        oInput.value = content;
        document.body.appendChild(oInput)
        oInput.select()
        document.execCommand('Copy')
        oInput.style.display = 'none';
        document.body.removeChild(oInput);
				this.$message({
					type: 'success',
					message: `复制成功`
				});
			},
    }
  };
</script>

<style scoped lang="scss">
	.dia__wrap {
		padding-bottom: $margin-12;
		&:nth-last-child(1) {
			padding-bottom: 0;
		}
	}
	.dia__title {
		color: $color-black-3;
		font-size: $font-16;
	}
	.dia__content {
		color: $color-black-6;
		font-size: $font-16;
		@include ellipsis(1);
		width: 0;
	}
	.abroad__list {
		overflow: hidden;
		width: $common-width;
		margin: 0 auto;
		padding: 50px 0;
	}
	.abroad__item {
		min-height: 290px;
		background: #fff;
		padding: $margin-24;
		margin-bottom: $margin-24;
		position: relative;
		&__img {
			margin-right: 30px;
			@include imgBox(340px, 240px, cover, 4px);
			&__flag {
				background: #e94928;
				min-width: 40px;
				height: 46px;
				padding: 0 8px;
				border-radius: 4px;
				position: absolute;
				left: 36px;
				top: 18px;
				font-size: $font-12;
				color: $color-white;
				text-align: center;
				line-height: 50px;
			}
		}
		&__title {
			color: $color-primary;
			font-size: $font-20;
			padding-bottom: $margin-12;
			@include ellipsis(1);
			font-weight: bold;
		}
		&__middle {
			min-height: 128px;
		}
		&__wrapper {
			padding-top: $margin-12;
		}
		&__wrap {
			padding-top: 8px;
			&__title {
				font-size: $font-16;
				color: $color-black-3;
			}
			&__content {
				font-size: $font-14;
				color: $color-gray;
				@include ellipsis(1);
			}
		}
		&__left {
			width: 0;
		}
		&__right {
			padding: 0 40px 0;
			&__wrapper {
				padding: $margin-24 0 0;
			}
			&__label {
				color: #8591a9;
				font-size: $font-14;
			}
			&__value {
				color: #8591a9;
				padding: 6px 0 0;
				font-size: $font-16;
				color: $color-red;
				font-weight: bold;
			}
		}
		&__bottom {
			padding: $margin-24 0 0;
			&__btn {
				background: $color-primary;
				color: $color-white;
				font-size: $font-16;
				width: 172px;
				height: 44px;
				border-radius: 44px; 
				margin-left: $margin-12;
			}
			&__mark {
				color: $color-red;
				font-size: $font-14;
			}
		}
	}
</style>
