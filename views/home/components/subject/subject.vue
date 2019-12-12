<template>
  <div class="home__subjects" flex="main:justify cross:center" ref="subjects">
		<div :class="{ 'home__subjects__item_long': subject.long, 'home__subjects__item': !subject.long, 'animated': true, 'fadeInUp': animateSubject && subjectIndex%2 === 0, 'fadeInDown': animateSubject && subjectIndex%2 !== 0 }" v-for="(subject, subjectIndex) in subjectsList" :key="subject.name">
			<img class="img" :src="subject.url">
		</div>
	</div>
</template>

<script>
	import { subjectsList } from '@/config/map';
  export default {
		data () {
			return {
				subjectsList,
				animateSubject: false
			}
		},
    components: {
    },
    mounted () {
			this.initScroll();
			window.addEventListener('scroll', this.initScroll);
    },
		destroyed () {
			window.removeEventListener('scroll', this.initScroll);
		},
    methods: {
			initScroll () {
				if (!this.animateSubject && (this.$refs.subjects.getBoundingClientRect().top >= 0 && (window.innerHeight >=  this.$refs.subjects.getBoundingClientRect().top))) {
					this.animateSubject = true;
				}
			}
    }
  };
</script>

<style scoped lang="scss">
	.home__subjects {
		width: $common-width;
		margin: 0 auto;
		padding: 80px 0 40px;
		&__item {
			@include imgBox(144px, 93px, contain);
			&_long {
				@include imgBox(220px, 100px, contain);
			}
		}
	}
</style>
