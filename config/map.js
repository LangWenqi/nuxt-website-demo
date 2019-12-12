export const menuType = {
	navigation: 0,
	link: 1,
};
export const durationMap = {
	1: '天',
	2: '月',
	3: '年',
	4: '小时'
}
export const cType = {
	0: '',
	1: '夏令营',
	2: '冬令营',
}
export const categorys = {
	information: '学锋资讯',
	welfare: '学锋公益'

}
export const subjectsList = [
	{
    url: require('../images/science.png'),
    name: '科学',
		long: true
  },
  {
    url: require('../images/technology.png'),
    name: '技术',
		long: true
  },
  {
    url: require('../images/engineering.png'),
    name: '工程',
		long: true
  },
  {
    url: require('../images/art.png'),
    name: '艺术'
  },
  {
    url: require('../images/math.png'),
    name: '数学'
  }
];

export const courseTypeList = [
	{
		url: require('../images/15.png'),
    name: '人工智能课程',
		content: 'Dashdot创意编程、Lego wedo机器人编程、Lego EV3机器人编程、Makeblock电子机器人编程'
	},
	{
		url: require('../images/16.png'),
    name: 'APP创意编程',
		content: 'Dashdot创意编程、Lego wedo机器人编程、Lego EV3机器人编程、Makeblock电子机器人编程'
	},
	{
		url: require('../images/17.png'),
    name: 'CS创意编程',
		content: 'Dashdot创意编程、Lego wedo机器人编程、Lego EV3机器人编程、Makeblock电子机器人编程'
	},
	{
		url: require('../images/18.png'),
    name: '3D建模与打印',
		content: 'Dashdot创意编程、Lego wedo机器人编程、Lego EV3机器人编程、Makeblock电子机器人编程'
	}
]; 
export const courseTitleList = [
	{
		url: require('../images/Level1.png'),
    name: '幼儿园/小学低年级',
	},
	{
		url: require('../images/Level2.png'),
    name: '小学生',
	},
	{
		url: require('../images/Level3.png'),
    name: '小学高年级/初中生',
	},
	{
		url: require('../images/Level4.png'),
    name: '初中高年级/高中生',
	}
];
export const trainingList = [
	{
		title: '在线学习课程',
		url: require("../images/training1.png"),
		content: '可以通过文本、视频、音频等方式在线学习海量精品课程。'
	},
	{
		title: '在线练习编程',
		url: require("../images/training2.png"),
		content: '在线利用Scratch、AI2等工具进行编程练习，完成的作品一键保存在云端，也可以推荐和发布到其它社交工具上。'
	},
	{
		title: '在线答题',
		url: require("../images/training3.png"),
		content: '在线答题，实时了解知识掌握情况，方便学员针对错误题目进行巩固和练习。'
	}
];
export const practiceList = [
	{
		zh: '联系',
		en: 'contact',
		url: require("../images/practice1.png"),
		content: '已有的“知识库”和新知识联系起来，激发起学生了解更多知识的愿望'
	},
	{
		zh: '构建',
		en: 'build',
		url: require("../images/practice2.png"),
		content: '动手构建事物同时在脑海中构建知识，为完成课程任务设计解决方案。'
	},
	{
		zh: '反思',
		en: 'reflection',
		url: require("../images/practice3.png"),
		content: '对构建的事物进行思考、讨论和调整，对自己的体验加深理解。'
	},
	{
		zh: '延续',
		en: 'continue',
		url: require("../images/practice4.png"),
		content: '对学习的内容安排新的延展，在方法、创新等方面进行巩固。'
	}
];
export const mapList = [
	{
		url: require('../images/map.png'),
		universityList: [
			{
				name: '维多利亚大学',
				x: '430px',
				y: 0,
				font: '16px',
				opacity: '0.8'
			},
			{
				name: '哥伦比亚大学',
				x: '600px',
				y: '5px',
				font: '26px',
				opacity: '0.2'
			},
			{
				name: '戴维斯分校',
				x: '240px',
				y: '40px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '普渡大学明尼苏达大学',
				x: '440px',
				y: '80px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '东北大学',
				x: '860px',
				y: '60px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '北卡罗莱纳州立大学',
				x: '120px',
				y: '140px',
				font: '22px',
				opacity: '0.4'
			},
			{
				name: '波士顿学院',
				x: '390px',
				y: '190px',
				font: '20px',
				opacity: '0.5'
			},
			{
				name: '渥太华大学',
				x: '650px',
				y: '150px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '厄巴纳-香槟分校',
				x: '840px',
				y: '200px',
				font: '16px',
				opacity: '1'
			},
			{
				name: '欧文分校',
				x: '1000px',
				y: '140px',
				font: '16px',
				opacity: '1'
			},
			{
				name: '北卡罗来纳大学',
				x: '70px',
				y: '240px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '皇后大学',
				x: '360px',
				y: '270px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '伊利诺伊大学',
				x: '130px',
				y: '320px',
				font: '26px',
				opacity: '0.4'
			},
			{
				name: '塔夫茨大学',
				x: '530px',
				y: '250px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '英属哥伦比亚大学',
				x: '720px',
				y: '270px',
				font: '24px',
				opacity: '1'
			},
			{
				name: '加州州立大学',
				x: '970px',
				y: '250px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '多伦多大学',
				x: '400px',
				y: '350px',
				font: '20px',
				opacity: '0.8'
			},
			{
				name: '滑铁卢大学',
				x: '580px',
				y: '320px',
				font: '22px',
				opacity: '0.9'
			},
			{
				name: '教堂山分校',
				x: '190px',
				y: '400px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '迈阿密大学麦吉尔大学',
				x: '400px',
				y: '440px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '双城分校',
				x: '800px',
				y: '400px',
				font: '24px',
				opacity: '0.4'
			},
			{
				name: '波士顿大学',
				x: '940px',
				y: '370px',
				font: '26px',
				opacity: '1'
			},
			{
				name: '加利福尼亚大学',
				x: '370px',
				y: '530px',
				font: '22px',
				opacity: '0.2'
			},
			{
				name: '华盛顿大学',
				x: '800px',
				y: '500px',
				font: '26px',
				opacity: '1'
			}
		]
	}
];