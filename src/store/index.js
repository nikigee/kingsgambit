import { createStore } from "vuex";

export default createStore({
	state: {
		initiative: [],
		monsters: [
			{
				id: 0,
				init: 10,
				name: "Drow",
				ac: "15 (Chain Shirt)",
				currentHP: 13,
				maxHP: 13,
				speed: "30 ft.",
				abs: {
					str: { name: "STR", score: 10 },
					dex: { name: "DEX", score: 14 },
					con: { name: "CON", score: 10 },
					int: { name: "INT", score: 11 },
					wis: { name: "WIS", score: 11 },
					cha: { name: "CHA", score: 12 },
				},
				skills: `<ul><li><b>Skills</b> Perception +2, Stealth +4</li><li><b>Senses</b> Darkvision 120 ft., Passive Perception 12</li><li><b>Languages</b> Elvish, Undercommon</li><li><b>Challenge</b> 1/4 (50 XP)</li><li><b>Proficiency Bonus</b> +2</li></ul>`,
				traits: `<p><b>Fey Ancestry.</b> The drow has advantage on saving throws against being charmed, and magic can’t put the drow to sleep.</p><p><b>Innate Spellcasting.</b> The drow’s spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:</p><p>At will: dancing lights</p><p>1/day each: darkness, faerie fire</p><p><b>Sunlight Sensitivity.</b> While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.</p>`,
				actions: `<p><b>Shortsword.</b> Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.</p><p><b>Hand Crossbow.</b> Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.</p>`,
			},
			{
				id: 1,
				init: 10,
				name: "Bandit",
				ac: "12",
				currentHP: 11,
				maxHP: 11,
				speed: "30 ft.",
				abs: {
					str: { name: "STR", score: 11 },
					dex: { name: "DEX", score: 12 },
					con: { name: "CON", score: 12 },
					int: { name: "INT", score: 10 },
					wis: { name: "WIS", score: 10 },
					cha: { name: "CHA", score: 10 },
				},
				skills: `<ul><li><b>Senses</b> Passive Perception 10</li><li><b>Languages</b> Any one language (usually Common)</li><li><b>Challenge</b> 1/8 (25 XP)</li><li><b>Proficiency Bonus</b> +2</li></ul>`,
				actions: `<p><b>Scimitar.</b> Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.</p><p><b>Light Crossbow.</b> Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.</p>`,
			},
		],
	},
	getters: {
		initiativeList(state){
			let list = [];
			state.monsters.forEach((v, k) => {
				list.push({ init: v.init, mon: v });
			});
			list.sort(function (a, b) {
				return b.mon.init - a.mon.init;
			});
			return list;
		}
	},
	mutations: {
		UPDATE_MONSTER(state, payload) {
			// ID = the monster you wish to edit
			// property = the property of the monster you wish to edit
			// the new value to replace the old
			state.monsters[payload.id][payload.property] = payload.value;
			console.log(`Content updated: ${payload.property}`);
		},
		UPDATE_MONSTER_ABS(state, payload) {
			// Updates a monster's ability score like Strength, dex, etc.
			console.log(state.monsters[payload.id].abs[payload.property].score);
			state.monsters[payload.id].abs[payload.property].score = payload.value;
			console.log(
				`${state.monsters[payload.id].abs[payload.property].name} Updated: ${
					state.monsters[payload.id].abs[payload.property].score
				}`
			);
		},
		PUSH_MONSTER(state, payload) {
			state.monsters.push(payload);
			state.monsters.forEach((ele, key) => {
				ele.id = key;
			});
		},
		KILL_MONSTER(state, payload) {
			state.monsters.splice(payload, 1);
			state.monsters.forEach((ele, key) => {
				ele.id = key;
			});
		},
		UPDATE_MONSTER_IDS(state) {
			state.monsters.forEach((ele, key) => {
				ele.id = key;
			});
		},
	},
	actions: {
		initializeStore({ state, commit }) {
			if (localStorage.getItem("state")) {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem("state")))
				);
				commit('UPDATE_MONSTER_IDS');
			}
		},
	},
	modules: {},
});
