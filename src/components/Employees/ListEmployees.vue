<template>
  <div id="employees">
    <div>Employees</div>
		<div class="data" v-for="employee in employees" v-bind:key="employee.id">
			<router-link :to="`/DetailsEmployee/${employee.id}`"><img src="../../assets/img/view.jpg" /></router-link>
			<EditPerson :calledFromList="true"/>
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
	import { State, Action, Getter } from "vuex-class"

	import {Data_Employees} from '../../data/employees';
	import {Data_People} from '../../data/people';
	import {Data_Positions} from '../../data/positions';
	import Employee from '../../types/Employee';
	import Position from '../../types/Position';
	import Human from 'src/types/Human';
	import EditPerson from '../People/EditPerson.vue'

	@Component({
		components: { EditPerson}
	})
	export default class ListEmployees extends Vue {
		@State(state => state.dataBase.employees) employees!: Employee[];
		@State(state => state.dataBase.people) people!: Human[];
		@State(state => state.dataBase.positions) positions!: Position[];

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
