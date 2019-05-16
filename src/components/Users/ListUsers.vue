<template>
  <div id="users">
    <div>Users</div>
		<div class="data" v-for="user in users" v-bind:key="user.id">
		<div>{{ user.id }}</div>
		<div>{{ user.login }}</div>
		<div>{{ getHuman(user.employeeId).lastName }} {{ getHuman(user.employeeId).firstName }} {{ getHuman(user.employeeId).MiddleName }}</div>
		<div>{{ positions.find(position => position.id === getHuman(user.employeeId).positionsID).titlePosition }}</div>
		<div>{{ getHuman(user.employeeId).email }}</div>
		<div>{{ user.dateRegistration }}</div>
		<div>{{ getHuman(user.employeeId).experience }}</div>
		<div>{{ getHuman(user.employeeId).pay }}</div>
	</div>
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
