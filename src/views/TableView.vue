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
.table {
	height: calc(100% - 50px);
  padding-top: 50px;
  padding-left: 10%;
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
.monsterCard span{
  display: block;
  padding: 2.5px 15px 2.5px 15px;
  font-size: 14px;
}
.monsterCard h3{
  margin: 0px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 21px;
}
.hpbar{
  text-align: center;
  background: #1a1a1a;
  margin-left: 15px;
  margin-right: 15px;
  padding: 0px !important;
  border-radius: 3px;
  overflow: hidden;
  color: white;
  margin-top: 5px;
}
.hpinner{
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
  height: 100%;
}
</style>
