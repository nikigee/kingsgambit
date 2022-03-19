<template>
	<div
		style="display: inline"
		v-if="!editing"
		@click="enableEditing"
	>
		{{ v }}
	</div>
	<div v-if="editing">
		<input
			v-model="tempValue"
			class="input"
			:style="{ width: 10 * String(tempValue).length + 'px' }"
			@keyup.enter="saveEdit"
		/>
		<button @click="disableEditing">Cancel</button>
		<button @click="saveEdit">Save</button>
	</div>
</template>

<script>
export default {
	name: "EditableText",
	emits: ["updateValue"],
	props: {
		v: String,
	},
	data() {
		return {
			tempValue: null,
			editing: false,
		};
	},
	methods: {
		enableEditing() {
			this.tempValue = this.v;
			this.editing = true;
		},
		disableEditing() {
			this.tempValue = null;
			this.editing = false;
		},
		saveEdit() {
			// However we want to save it to the database
			this.$emit("updateValue", this.tempValue);
			this.disableEditing();
		},
	},
};
</script>

<style scoped>
.input {
	font-family: inherit;
	padding: 5px;
	padding-left: 10px;
	padding-right: 10px;
	font-style: italic;
	border: solid 1px #2c3e50;
	margin-left: 1px;
	margin-right: 1px;
	border-radius: 5px;
	transition: 0.5s;
	font-size: 1em;
}
button {
	border: solid 1px #2c3e50;
	border-radius: 5px;
	padding: 5px;
	font-family: "Lora", serif;
	background: none;
	color: inherit;
	transition: 0.5s;
	margin-left: 1px;
	margin-right: 1px;
}
button a {
	color: inherit;
}
button:hover {
	border: solid 1px #89e7bd;
	color: #89e7bd;
	box-shadow: 0px 0px 10px #89e7bd;
}
.input:focus-visible {
	outline: none;
	border: solid 1px #89e7bd;
	box-shadow: 0px 0px 10px #89e7bd;
}
</style>
