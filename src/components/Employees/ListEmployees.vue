<template>
  <div id="employees">
    <div>Employees</div>
		<table width="100%">
			<tr>
				<th></th>
				<th>ФИО сотрудника</th>
				<th>Позиция</th>
				<th>Email</th>
				<th>Опыт</th>
				<th>З/П</th>
				<th>Дата принятия</th>
			</tr>
			<tr v-for="employee in employees" v-bind:key="employee.id">
				<td class="td_links">
			<router-link :to="`/DetailsEmployee/${employee.id}`"><img src="../../assets/img/view.jpg" /></router-link>
			<EditEmployee :calledFromList="true" :id="employee.id"/>
				</td>
				<td>{{ people.find(human => human.id === employee.personId).lastName }} {{ people.find(human => human.id === employee.personId).firstName }} {{ people.find(human => human.id === employee.personId).MiddleName }}</td>
				<td>{{ positions.find(position => position.id === people.find(human => human.id === employee.personId).positionsID).titlePosition }}</td>
				<td>{{ people.find(human => human.id === employee.personId).email }}</td>
				<td>{{ people.find(human => human.id === employee.personId).experience }}</td>
				<td>{{ people.find(human => human.id === employee.personId).pay }}</td>
				<td>{{ employee.dateEnrollment }}</td>
			</tr>
		</table>
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
	import EditEmployee from './EditEmployee.vue'

	@Component({
		components: { EditEmployee}
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

	.td_links {
		display: flex;
	}
</style>
