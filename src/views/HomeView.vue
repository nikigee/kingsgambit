<template>
	<div class="home">
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
}
.home h1,
h2 {
	margin: 0px;
}
.home h1 {
	font-size: 3em;
	font-variant: small-caps;
}

.main-logo img{
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
	border: solid 2px #2c3e50;
	border-radius: 5px;
	padding: 15px;
	font-family: "Lora", serif;
	background: none;
	transition: 0.5s;
}
button:hover{
	border: solid 2px #42b983;
	color: #42b983;
	box-shadow: 0px 0px 10px #42b983;
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
</style>
