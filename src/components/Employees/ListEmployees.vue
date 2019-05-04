<template>
  <div id="employees">
    <div>Employees</div>
	<div class="data" v-for="employee in data" v-bind:key="employee.id">
		<div>{{ employee.id }}</div>
		<div>{{ people.find(human => human.id === employee.personId).lastName }} {{ people.find(human => human.id === employee.personId).firstName }} {{ people.find(human => human.id === employee.personId).MiddleName }}</div>
		<div>{{ positions.find(position => position.id === people.find(human => human.id === employee.personId).positionsID).titlePosition }}</div>
		<div>{{ people.find(human => human.id === employee.personId).email }}</div>
		<div>{{ people.find(human => human.id === employee.personId).experience }}</div>
		<div>{{ people.find(human => human.id === employee.personId).pay }}</div>
		<div>{{ employee.dateEnrollment }}</div>
	</div>
  </div>
</template>

<script>
import {Data_Employees} from '../../data/employees';
import {Data_People} from '../../data/people';
import {Data_Positions} from '../../data/positions';

	export default {
		el: '#employees',
		name: 'ListEmployees',
		data() {
			return {
				data: Data_Employees,
				people: Data_People,
				positions: Data_Positions
			}
		},
		methods: {
			getHuman(id) {
				return this.people.find(human => human.id === id);
			}
		}
	}
</script>

<style>
	#employees {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 60px;
	}

	.data {
		display: flex;
	}

	.data > * {
		margin: 5px;
		flex-grow: 1;
}
</style>
