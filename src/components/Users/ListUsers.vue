<template>
  <div id="users">
    <div>Users</div>
		<table width="100%">
			<tr>
				<th></th>
				<th>Логин</th>
				<th>ФИО сотрудника</th>
				<th>Позиция</th>
				<th>Email</th>
				<th>Дата регистрации</th>
				<th>Опыт</th>
				<th>З/П</th>
			</tr>
			<tr v-for="user in users" v-bind:key="user.id">
				<td class="td_links">
					<EditCandidate :calledFromList="true" :id="candidate.id"/>
				</td>
				<td>{{ user.login }}</td>
				<td>{{ getHuman(user.employeeId).lastName }} {{ getHuman(user.employeeId).firstName }} {{ getHuman(user.employeeId).MiddleName }}</td>
				<td>{{ positions.find(position => position.id === getHuman(user.employeeId).positionsID).titlePosition }}</td>
				<td>{{ getHuman(user.employeeId).email }}</td>
				<td>{{ user.dateRegistration }}</td>
				<td>{{ getHuman(user.employeeId).experience }}</td>
				<td>{{ getHuman(user.employeeId).pay }}</td>
			</tr>
		</table>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component'
	import { State, Action, Getter } from "vuex-class"

	import Employee from '../../types/Employee';
	import Human from '../../types/Human';
	import User from '../../types/User';
	import Position from '../../types/Position';
	import {RootState} from '../../store/types'

	@Component({})
	export default class ListUsers extends Vue {
		@State(state => state.dataBase.users) users!: User[];
		@State(state => state.dataBase.employees) employees!: Employee[];
		@State(state => state.dataBase.people) people!: Human[];
		@State(state => state.dataBase.positions) positions!: Position[];

		getHuman(id: number) {
			return this.people.find(human => {
				const employee = this.employees.find(employee => employee.id === id);
				return employee ? human.id === employee.personId : false;
			});
		}
	}
</script>

<style>
	#users {
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
