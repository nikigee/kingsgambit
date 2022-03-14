<template>
	<div class="home">
		<div class="home-overlay">
			<div class="main-logo">
				<h1>Sword of Destiny</h1>
				<h2>The D&amp;D 5e Battletracker</h2>
				<div class="main-menu">
					<p>
						Sword of Destiny is a tool which helps you manage your combat
						encounters in a fun and fast way, would you like to...
					</p>
					<button><router-link to="/table">BEGIN?</router-link></button>
				</div>
			</div>
			<div class="main-footer">
				<footer>
					<span>&#169;Sword of Destiny 2022</span><span>Created by Nikita</span
					><span>Contact Me</span><span>Github Repository</span
					><span>About</span>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "HomeView",
	components: {},
};
</script>

<style scoped>
.home {
	height: 100%;
	background: url("@/assets/269553.jpg") center center fixed;
	background-size: cover;
	color: rgb(241, 241, 241);
}
.home-overlay {
	height: 100%;
	background: rgba(20, 21, 22, 0.4);
	animation: fadeIn 10s;
}
@keyframes fadeIn {
	0% {
		background: rgba(20, 21, 22, 1);
	}
	100% {
		background: rgba(20, 21, 22, 0.4);
	}
}
.home h1,
h2 {
	margin: 0px;
	text-shadow: 0px 0px 7px #233241;
}
.home h1 {
	font-size: 3em;
	font-variant: small-caps;
}

.main-logo img {
	width: 300px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	border-radius: 3px;
	box-shadow: 0px 0px 5px grey;
}
.home h2 {
	padding-bottom: 50px;
	font-size: 1.4em;
}
.main-menu {
	text-align: center;
}

button {
	border: solid 2px rgb(241, 241, 241);
	border-radius: 5px;
	padding: 15px;
	font-family: "Lora", serif;
	background: none;
	color: inherit;
	transition: 0.5s;
}
button a {
	color: inherit;
}
button:hover {
	border: solid 2px #89e7bd;
	color: #89e7bd;
	box-shadow: 0px 0px 10px #89e7bd;
}

.main-menu p {
	font-style: italic;
	max-width: 500px;
	margin: auto;
	padding-bottom: 20px;
}
.main-logo {
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	text-align: center;
}
.main-footer{
	position: absolute;
	bottom: 0;
	width: 100%;
}
.main-footer footer{
	display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
	min-height: 50px;
}
.main-footer span{
	font-size: 14px;
	font-style: italic;
	margin-left: 10px;
	margin-right: 10px;
}
</style>
