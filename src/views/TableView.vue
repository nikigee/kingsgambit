<template>
	<div class="table">
		<div class="monsterField">
			<div class="monsterCard">
				<h3>Bandit</h3>
				<span><b>AC:</b> 12</span>
				<span><b>Speed:</b> 30 ft.</span>
				<span class="hpbar"><span class="hpinner">15/30</span></span>
			</div>
			<div class="monsterCard">
				<h3>Bandit</h3>
				<span><b>AC:</b> 12</span>
				<span><b>Speed:</b> 30 ft.</span>
				<span class="hpbar"><span class="hpinner">15/30</span></span>
			</div>
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

export default {
	name: "TableView",
	components: {},
};
</script>

<style scoped>
.monsterField {
	padding-top: 50px;
}

.ladder h2{
  text-transform: uppercase;
  font-size: 15px;
}

.arrow {
	font-weight: bold;
  font-size: 18px;
}

.ladder-wrap{
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
}
.monsterCard {
	background: rgb(238, 238, 238);
	width: 200px;
	height: 250px;
	margin: 10px;
	border-radius: 3px;
	box-shadow: 0px 0px 5px rgb(177, 177, 177);
	text-align: left;
}
.monsterCard span {
	display: block;
	padding: 2.5px 10px 2.5px 10px;
	font-size: 14px;
}
.monsterCard h3 {
	margin: 0px;
	padding-top: 10px;
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
.monsterField {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-content: flex-start;
	padding-left: 10%;
}
</style>
