<template>
	<div class="table">
		<div class="monsterField">
			<MonsterCard v-for="monster in monsters" v-bind="monster" />
		</div>
		<div class="ladder">
			<h2>Order of Battle</h2>
			<div class="ladder-wrap">
				<span class="ladder-name">Jamal<span class="init">19</span></span>
				<div class="arrow">></div>
				<span class="ladder-name">Kathleen<span class="init">16</span></span>
				<div class="arrow">></div>
				<span class="ladder-name">Lun'rilda<span class="init">23</span></span>
				<div class="arrow">></div>
				<span class="ladder-name">Kanakon<span class="init">10</span></span>
				<div class="arrow">></div>
				<span class="ladder-name">Vernon<span class="init">5</span></span>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import MonsterCard from "@/components/MonsterCard.vue";

// class exists just to provide default options to a monster card if no data is entered.
// To serve as a template or in case data is missing that the component needs to rely on.
class MonsterData {
	constructor(props = {}) {
		const {
			name = "Guard",
			ac = 16,
			speed = "30 ft.",
			maxHP = 11,
			currentHP = maxHP,
			abs = [
				{ name: "STR", score: 10 },
				{ name: "DEX", score: 10 },
				{ name: "CON", score: 10 },
				{ name: "INT", score: 10 },
				{ name: "WIS", score: 10 },
				{ name: "CHA", score: 10 },
			],
			skills = [
				"<b>Skills</b> Perception +2",
				"<b>Senses</b> Passive Perception 12",
				"<b>Languages</b> Any one language (usually Common)",
				"<b>Challenge</b> 1/8 (25 XP)",
				"<b>Proficiency Bonus</b> +2",
			],
			actions = [
				"<b>Spear.</b> Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
			],
		} = props;
		this.name = name;
		this.ac = ac;
		this.speed = speed;
		this.maxHP = maxHP;
		this.currentHP = currentHP;
		this.abs = abs;
		this.skills = skills;
		this.actions = actions;
	}
	get obj() {
		return {
			id: -1,
			info: {
				name: this.name,
				ac: this.ac,
				speed: this.speed,
				maxHP: this.maxHP,
				currentHP: this.currentHP,
				abs: this.abs,
				skills: this.skills,
				actions: this.actions,
			},
		};
	}
}

export default {
	name: "TableView",
	data() {
		return {
			monsters: [
				{
					name: "Drow",
					ac: 15,
					currentHP: 13,
					maxHP: 13,
					speed: "30 ft.",
					abs: [
						{ name: "STR", score: 10 },
						{ name: "DEX", score: 14 },
						{ name: "CON", score: 10 },
						{ name: "INT", score: 11 },
						{ name: "WIS", score: 11 },
						{ name: "CHA", score: 12 },
					],
					skills: [
						"<b>Skills</b> Perception +2, Stealth +4",
						"<b>Senses</b> Darkvision 120 ft., Passive Perception 12",
						"<b>Languages</b> Elvish, Undercommon",
						"<b>Challenge</b> 1/4 (50 XP)",
						"<b>Proficiency Bonus</b> +2",
					],
					actions: [
						"<b>Shortsword.</b> Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
						"<b>Hand Crossbow.</b> Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
					],
				},
				{
					name: "Bandit",
					ac: 12,
					currentHP: 11,
					maxHP: 11,
					speed: "30 ft.",
					abs: [
						{ name: "STR", score: 11 },
						{ name: "DEX", score: 12 },
						{ name: "CON", score: 12 },
						{ name: "INT", score: 10 },
						{ name: "WIS", score: 10 },
						{ name: "CHA", score: 10 },
					],
					skills: [
						"<b>Senses</b> Passive Perception 10",
						"<b>Languages</b> Any one language (usually Common)",
						"<b>Challenge</b> 1/8 (25 XP)",
						"<b>Proficiency Bonus</b> +2",
					],
					actions: [
						"<b>Scimitar.</b> Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
						"<b>Light Crossbow.</b> Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
					],
				},
			],
		};
	},
	components: {
		MonsterCard,
	},
};
</script>

<style scoped>
.monsterField {
	padding-top: 50px;
}

.ladder h2 {
	text-transform: uppercase;
	font-size: 15px;
}

.arrow {
	font-weight: bold;
	font-size: 18px;
}

.ladder-wrap {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	margin: auto;
	padding-bottom: 10px;
}

.ladder-name {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	background: #2c3e50;
	margin: 5px 20px 5px 15px;
	border-radius: 0px;
	color: white;
	font-style: italic;
	/* font-variant: small-caps; */
	flex-direction: row;
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	transition: 0.5s;
	border-radius: 3px;
}
.init {
	margin-left: 15px;
}

.table {
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	background: rgb(238, 238, 238);
}

.monsterField {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-content: flex-start;
	align-items: flex-start;
	padding-left: 10%;
}
</style>
