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

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component'

	import {Data_Employees} from '../../data/employees';
	import {Data_People} from '../../data/people';
	import {Data_Positions} from '../../data/positions';
	import Employee from '../../types/Employee';
	import Position from '../../types/Position';
	import Human from 'src/types/Human';

	@Component({})
	export default class ListEmployees extends Vue {
		data: Employee[] = Data_Employees;
		people: Human[] = Data_People;
		positions: Position[] = Data_Positions;

			getHuman(id: number) {
				return this.people.find(human => human.id === id);
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
