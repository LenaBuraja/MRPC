<template>
  <div id="app">
		<div class="navbar">
			<div>MRPC</div>
			<router-link to="/Employees">Employees</router-link>
			<router-link to="/Candidates">Candidates</router-link>
			<router-link to="/Users">Users</router-link>
		</div>
    <router-view/>
  </div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		width: 100vw;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		text-align: center;
		color: #303030;
	}

	.navbar {
		color: #008fbb;
		background-color: #303030;
		display: flex;
		flex-direction: row;
	}

	.navbar > *:hover {
		background-color: #60606088;
	}

	.navbar > * {
		color: #0076bb;
		font-size: 24pt;
		text-decoration: none;
		cursor: pointer;
		margin: 16px;
	}
</style>
