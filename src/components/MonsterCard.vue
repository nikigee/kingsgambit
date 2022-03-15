<template>
	<div class="monster-card">
		<h3>{{ name }}</h3>
		<span><b>AC:</b> {{ ac }}</span>
		<span><b>Speed:</b> {{ speed }}</span>
		<span class="hpbar"
			><span class="hpinner" :style="{ width: (maxHP / currentHP) * 100 + '%' }"
				>{{ currentHP }}/{{ maxHP }}</span
			></span
		>
		<div class="ab-scores">
			<div class="score-wrap" v-for="ab in abs">
				<div class="ab-caption">{{ ab.name }}</div>
				<span class="ab-score">{{ ab.score }}<br />(+0)</span>
			</div>
		</div>
		<div class="misc-info monsterCategory">
			<h4>Skills</h4>
			<ul>
				<li v-for="skill in skills" v-html="skill"></li>
			</ul>
		</div>
		<hr />
		<div class="monsterCategory" v-show="v1">
			<h4>Actions</h4>
			<span v-for="action in actions" v-html="action"></span>
		</div>
		<div class="show-more"><a @click="showHide">EXPAND</a></div>
	</div>
</template>

<script>
export default {
	name: "MonsterCard",
	props: {
		name: String,
		ac: Number,
		currentHP: Number,
		maxHP: Number,
		speed: String,
		abs: Array,
		skills: Array,
		actions: Array,
	},
	data() {
		return {
			v1: false,
		};
	},
	methods: {
		showHide(event) {
			this.v1 = this.v1 ? false : true;
			let text = event.target.innerText;
			if (text == "COLLAPSE") event.target.innerText = "EXPAND";
			else {
				event.target.innerText = "COLLAPSE";
			}
		},
	},
};
</script>

<style scoped>
.show-more {
	font-family: "IM Fell English SC", serif;
	text-align: center;
}
.show-more a {
	font-size: 11px;
	cursor: pointer;
	background: #2c3e50;
	font-weight: normal;
	color: white;
	padding: 2.5px;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 3px;
}
.show-more a:hover {
	background: #1a1a1a;
}
.monsterCategory {
	max-width: 350px;
}
.monster-card hr {
	width: -webkit-fill-available;
	border-color: rgb(255 255 255 / 44%);
	margin-top: 5px;
	margin-bottom: 5px;
}
.monsterCategory h4 {
	margin: 10px;
	margin-top: 0px;
	margin-bottom: 0px;
	padding-top: 5px;
	font-size: 16px;
}
.misc-info ul {
	margin: 0px;
	padding-top: 0px;
	padding-bottom: 5px;
	padding-right: 10px;
	padding-left: 30px;
	max-width: 220px;
}
.misc-info h4 {
	padding-top: 10px;
}
.misc-info {
	padding-bottom: 0px;
}
.misc-info li {
	font-size: 14px;
}
.monster-card {
	min-width: 230px;
	margin: 10px;
	padding-top: 10px;
	padding-bottom: 15px;
	text-align: left;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: white;
	box-shadow: 0px 1px 5px rgb(44 51 56 / 10%);
	border-radius: 10px;
	padding-left: 5px;
	padding-right: 5px;
	transition: 0.3s;
}
.monster-card span {
	display: block;
	padding: 2.5px 10px 2.5px 10px;
	font-size: 14px;
}
.monster-card h3 {
	margin: 0px;
	padding-top: 5px;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 19px;
}
.hpbar {
	text-align: center;
	background: #1a1a1a;
	margin-left: 10px;
	margin-right: 10px;
	padding: 0px !important;
	border-radius: 3px;
	overflow: hidden;
	color: white;
	margin-top: 5px;
}
.hpinner {
	width: 50%;
	background: green;
	padding: 2.5px 0px 2.5px 0px !important;
}

.ab-scores {
	display: flex;
	padding-top: 10px;
	justify-content: space-evenly;
	padding-left: 5px;
	padding-right: 5px;
}
.ab-score {
	text-align: center;
	padding: 2.5px 2.5px 2.5px 2.5px !important;
	font-size: 11px;
}
.ab-caption {
	font-size: 10px;
	text-align: center;
	font-weight: bold;
}
.score-wrap {
	display: inline-block;
}
</style>
