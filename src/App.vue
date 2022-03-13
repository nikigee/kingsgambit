<template>
	<Push
		noOverlay
		disableOutsideClick
		width="400"
		@openMenu="handleOpenMenu"
		@closeMenu="handleCloseMenu"
	>
		<div class="menulist">
			<div id="logo">
				<img class="scaled-image" src="@/assets/logo.png" />
				<h1>King's Gambit</h1>
				<h2>A DnD 5e Battletracker</h2>
			</div>
			<router-link to="/">Table</router-link>
			<router-link to="/about">About</router-link>
		</div>
	</Push>
	<main id="page-wrap">
		<!-- <nav id="appNav">
			
		</nav> -->
		<div class="router-contents">
			<router-view />
		</div>
	</main>
</template>

<script>
import { Push } from "vue3-burger-menu";

export default {
	components: {
		Push,
	},
	methods: {
		handleOpenMenu: function (event) {
			document.querySelector("#page-wrap").classList.add("content-scaled");
		},
		handleCloseMenu: function (event) {
			document.querySelector("#page-wrap").classList.remove("content-scaled");
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
}

.content-scaled {
	width: calc(100% - 400px);
}
nav {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.bm-burger-button{
	height: 20px;
	width: 26px;
}

.menulist {
	display: flex;
	flex-direction: column;
	padding: 0px;
}

body {
	margin: 0px;
	height: 100%;
}

.bm-menu {
	padding-top: 0px;
}

.bm-item-list {
	margin-left: 0px;
}

#appNav {
	padding: 30px;
}

#logo h1,
h2 {
	margin: 0px;
}
#logo h1 {
	font-size: 1.8em;
}
#logo h2 {
	font-size: 1em;
	font-weight: normal;
	font-style: italic;
}

#logo {
	display: inline-block;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	text-decoration: none;
}

.scaled-image {
	width: 400px;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
