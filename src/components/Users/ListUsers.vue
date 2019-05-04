<template>
  <div id="users">
    <div>Users</div>
		<div class="data" v-for="user in data" v-bind:key="user.id">
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

<script>
import {Data_Users} from '../../data/users';
import {Data_Employees} from '../../data/employees';
import {Data_People} from '../../data/people';
import {Data_Positions} from '../../data/positions';

	export default {
		el: '#users',
		name: 'ListUsers',
		data() {
			return {
				data: Data_Users,
				employees: Data_Employees,
				people: Data_People,
				positions: Data_Positions
			}
		},
		methods: {
			getHuman(id) {
				return this.people.find(human => human.id === this.employees.find(employee => employee.id === id).personId);
			}
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
