<template>
    <div class="monster-card">
        <div class="mon-settings">
            <i class="fa-solid fa-eye" v-if="!ultraSmall" @click="toggleSmall"></i>
            <i class="fa-solid fa-eye-slash" v-if="ultraSmall" @click="toggleSmall"></i><i class="fa-solid fa-clone" @click="
                $store.commit(
                    'PUSH_MONSTER',
                    JSON.parse(JSON.stringify($store.state.monsters[id]))
                )
                "></i><i class="fa-solid fa-trash" @click="$store.commit('KILL_MONSTER', id)"></i>
        </div>
        <h3>
            <EditableText :v="name" @update-value="(v) =>
                    $store.commit('UPDATE_MONSTER', {
                        id: id,
                        property: 'name',
                        value: v,
                    })
                " />
        </h3>
        <span><b>AC: </b>
            <EditableText :v="ac" @update-value="(v) =>
                    $store.commit('UPDATE_MONSTER', {
                        id: id,
                        property: 'ac',
                        value: v,
                    })
                " />
        </span>
        <span><b>Speed: </b>
            <EditableText :v="speed" @update-value="(v) =>
                    $store.commit('UPDATE_MONSTER', {
                        id: id,
                        property: 'speed',
                        value: v,
                    })
                " />
        </span>
        <div class="hpbar">
            <span style="z-index: 300; position: relative">
                <EditableNumber :v="currentHP" @update-value="(v) => changeCurrentHP(v)" />/
                <EditableNumber :v="maxHP" @update-value="(v) => changeMaxHP(v)" />
            </span>
            <div class="hpinner" :style="{
                width: getPercentageDisplay(),
            }"></div>
        </div>
        <div class="ab-scores" v-if="!ultraSmall">
            <div class="score-wrap" v-for="ab in abs">
                <div class="ab-caption">{{ ab.name }}</div>
                <span class="ab-score">
                    <EditableCounter :v="ab.score" @update-value="(v) =>
                            $store.commit('UPDATE_MONSTER_ABS', {
                                id: id,
                                property: ab.name.toLowerCase(),
                                value: v,
                            })
                        " /><br />({{
        serAbility(ab.score) >= 0
        ? "+" + serAbility(ab.score)
        : serAbility(ab.score)
    }})
                </span>
            </div>
        </div>
        <div class="misc-info monsterCategory" v-if="!ultraSmall">
            <h4>Skills</h4>
            <QuillEditor @update:content="(v) =>
                    $store.commit('UPDATE_MONSTER', {
                        id: id,
                        property: 'skills',
                        value: v,
                    })
                " :content="skills" contentType="html" toolbar="minimal" theme="bubble" />
        </div>
        <hr v-if="!ultraSmall" />
        <div class="monsterCategory" v-if="!ultraSmall" v-show="v1">
            <h4>Traits</h4>
            <QuillEditor @update:content="(v) =>
                    $store.commit('UPDATE_MONSTER', {
                        id: id,
                        property: 'traits',
                        value: v,
                    })
                " :content="traits" contentType="html" toolbar="minimal" theme="bubble" />
            <!-- <div v-html="traits"></div> -->
        </div>
        <div class="monsterCategory" v-if="!ultraSmall" v-show="v1">
            <h4>Actions</h4>
            <QuillEditor @update:content="(v) =>
                    $store.commit('UPDATE_MONSTER', {
                        id: id,
                        property: 'actions',
                        value: v,
                    })
                " :content="actions" contentType="html" toolbar="minimal" theme="bubble" />
        </div>
        <div class="show-more">
            <a @click="showHide" v-show="!ultraSmall">EXPAND</a>
        </div>
    </div>
</template>

<script>
import EditableText from "@/components/EditableText.vue";
import EditableNumber from "@/components/EditableNumber.vue";
import EditableCounter from "@/components/EditableNumberCounter.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";

export default {
    name: "MonsterCard",
    props: {
        id: Number,
        name: String,
        ac: String,
        currentHP: Number,
        maxHP: Number,
        speed: String,
        traits: String,
        abs: Object,
        skills: String,
        actions: String
    },
    data() {
        return {
            v1: false,
            ultraSmall: true,
        };
    },
    methods: {
        getPercentageDisplay() {
            if ((this.currentHP / this.maxHP) * 100 >= 100) {
                return "100%";
            } else if (this.currentHP < 0) {
                return "0%";
            } else {
                return `${(this.currentHP / this.maxHP) * 100}%`;
            }
        },
        showHide(event) {
            this.v1 = this.v1 ? false : true;
            let text = event.target.innerText;
            if (text == "COLLAPSE") event.target.innerText = "EXPAND";
            else {
                event.target.innerText = "COLLAPSE";
            }
        },
        toggleSmall() {
            this.ultraSmall = this.ultraSmall ? false : true;
        },
        serAbility(value) {
            var modifier = -5;
            for (var i = 1; i <= 31; i += 2) {
                if (i >= value) {
                    return modifier;
                } else {
                    modifier++;
                }
            }
        },
        changeMaxHP(value) {
            if (value > 0) {
                if (value < this.currentHP) {
                    this.$store.commit("UPDATE_MONSTER", {
                        id: this.id,
                        property: "currentHP",
                        value: value,
                    });
                }
                if (this.currentHP == this.maxHP) {
                    this.$store.commit("UPDATE_MONSTER", {
                        id: this.id,
                        property: "currentHP",
                        value: value,
                    });
                }
                this.$store.commit("UPDATE_MONSTER", {
                    id: this.id,
                    property: "maxHP",
                    value: value,
                });
            }
        },
        changeCurrentHP(value) {
            if (value > this.maxHP) value = this.maxHP;
            this.$store.commit("UPDATE_MONSTER", {
                id: this.id,
                property: "currentHP",
                value: value,
            });
        },
    },
    components: {
        EditableText,
        EditableNumber,
        QuillEditor,
        EditableCounter,
    },
};
</script>

<style>
.mon-settings {
    position: absolute;
    right: 0;
    padding: 10px;
    padding-top: 0px;
    padding-right: 15px;
}

.mon-settings i {
    margin-left: 2px;
    margin-right: 2px;
}

.hpinner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.mon-settings i {
    font-size: 14px;
}

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
    margin-left: 2.5px;
    margin-right: 2.5px;
}

.show-more a:hover {
    background: #1a1a1a;
}

.monsterCategory {
    max-width: 500px;
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

.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1em;
}

.misc-info ul {
    margin: 0px;
    padding-top: 0px;
    padding-bottom: 5px;
    padding-right: 10px;
    padding-left: 0px;
    max-width: 250px;
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
    position: relative;
    margin: 10px;
    min-width: 150px;
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

.ql-editor {
    display: block;
    padding: 2.5px 10px 2.5px 10px !important;
    font-size: 14px;
    font-family: "Lora", serif;
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
    max-height: 100px;
    position: relative;
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
