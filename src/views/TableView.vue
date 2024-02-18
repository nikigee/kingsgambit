<template>
    <div class="table">
        <div class="monsterField">
            <MonsterCard v-for="monster in $store.state.monsters" v-bind="monster" />
        </div>
        <div class="ladder">
            <h2>Order of Battle</h2>
            <div class="ladder-wrap">
                <div v-for="monster in $store.getters.initiativeList">
                    <span class="ladder-name">{{ monster.mon.name
                    }}<span class="init">
                            <EditableNumber :v="monster.mon.init" @update-value="(v) =>
                                    $store.commit('UPDATE_MONSTER', {
                                        id: monster.mon.id,
                                        property: 'init',
                                        value: v,
                                    })
                                " />
                        </span></span>
                    <div class="arrow" v-if="monster.mon !=
                        $store.getters.initiativeList[
                            $store.getters.initiativeList.length - 1
                        ].mon
                        ">
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="tools-wrap">
            <div class="tools">
                <i class="fa-solid fa-plus"
                    @click="this.$store.commit('PUSH_MONSTER', JSON.parse(JSON.stringify(sampleMonster)))"></i>
                <i class="fa-solid fa-book" @click="this.$store.commit('PUSH_MONSTER', sampleMonster)"></i>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import MonsterCard from "@/components/MonsterCard.vue";
import EditableNumber from "@/components/EditableNumber.vue";

export default {
    name: "TableView",
    data() {
        return {
            initiative: [],
            sampleMonster: {
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
        };
    },
    methods: {},
    components: {
        MonsterCard,
        EditableNumber,
    },
};
</script>

<style scoped>
.tools {
    padding: 10px;
    background: white;
    box-shadow: 0px 1px 5px rgb(44 51 56 / 10%);
    border-radius: 10px;
}

.tools i {
    display: block;
    margin: 5px;
    font-size: 19px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.tools-wrap {
    position: absolute;
    right: 1.5em;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

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
    display: inline;
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
    display: inline-flex;
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
    min-height: 100%;
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
