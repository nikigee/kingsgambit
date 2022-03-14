<template>
	<Push
		:isOpen="isOpen"
		width="400"
		@openMenu="handleOpenMenu"
		@closeMenu="handleCloseMenu"
	>
		<div class="menulist">
			<div id="logo">
				<img class="scaled-image" src="@/assets/logo.png" />
				<h1>Sword of Destiny</h1>
				<h2>The D&amp;D 5e Battletracker</h2>
			</div>
			<router-link to="/">Home</router-link>
			<router-link to="/table">Table</router-link>
			<router-link to="/about">About</router-link>
			<footer>
				<span>Created by Nikita &#169; 2022</span>
			</footer>
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
	mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/7b30c74067.js')
      document.head.appendChild(recaptchaScript)
    },
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		handleOpenMenu: function (event) {
			// this.isOpen = true;
			// document.querySelector("#page-wrap").classList.add("content-scaled");
		},
		handleCloseMenu: function (event) {
			// this.isOpen = false;
			// document.querySelector("#page-wrap").classList.remove("content-scaled");
		},
	},
};
</script>

<style src="@/assets/style.css"></style>
<style>
#app {
	height: 100%;
}

#page-wrap,
.router-contents {
	height: 100%;
}

.content-scaled {
	width: calc(100% - 400px);
}

nav {
	display: flex;
}
#page-wrap nav {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.bm-burger-button {
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
	background: #354045;
}

.bm-item-list {
	margin-left: 0px;
	color: #c1cace;
}

#appNav {
	padding: 30px;
}

#logo h1,
h2 {
	margin: 0px;
}
#logo h1 {
	font-size: 2em;
	padding-top: 15px;
	font-variant: small-caps;
}
#logo h2 {
	font-size: 16px;
	font-weight: normal;
	font-style: italic;
	font-family: "Lora", serif;
}

#logo {
	display: inline-block;
	padding-bottom: 25px;
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
.menulist footer {
	font-style: italic;
    font-size: 12px;
    position: absolute;
    display: flex;
    bottom: 0px;
    width: 100%;
    justify-content: space-around;
    align-content: space-around;
    min-height: 40px;
	padding-top: 5px;
	padding-bottom: 5px;
    flex-direction: column;
    flex-wrap: wrap;
}

.menulist a{
	color: #c1cace;
	font-family: 'Sorts Mill Goudy', serif;
	font-weight: normal;
}
.menulist a:hover{
	color: #42b983;
}
</style>
