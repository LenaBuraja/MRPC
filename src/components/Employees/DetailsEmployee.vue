<template>
	<div id='detailsEmployee'>
		{{getEmployee()}}
		<div>Details employee {{ $route.params.id }}</div>
		<div v-if="employee" class="details">
			<div>{{getFullName(employee.personId)}}</div>
			<div>{{positions.find(position => position.id === getHuman(employee.personId).positionsID).titlePosition}}</div>
			<div>{{getHuman(employee.personId).phone}}</div>
			<div>{{getHuman(employee.personId).experience}}</div>
			<div>{{getHuman(employee.personId).email}}</div>
			<div>{{getHuman(employee.personId).pay}}</div>
			<div>{{getHuman(employee.personId).skype}}</div>
			<div>{{employee.dateEnrollment}}</div>
		</div>
		<div v-else>Not found</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component'
	import { Watch } from 'vue-property-decorator';
	import { Route } from "vue-router";

	import {Data_Employees} from '../../data/employees';
	import {Data_People} from '../../data/people';
	import {Data_Positions} from '../../data/positions';
	import Employee from '../../types/Employee';
	import Human from '../../types/Human';
	import Position from '../../types/Position';

	@Component({})
	export default class DetailsEmployee extends Vue {
		employee: Employee | undefined;
		people: Human[] = Data_People;
		positions: Position[] = Data_Positions;
    	
		@Watch('$route.params.id') onEmployeeChanged(value: string, oldValue: string) {
			console.log(value)
			return this.employee = Data_Employees.find(item => item.id === Number(value));
		}

		getEmployee() {
			this.employee = Data_Employees.find(item => item.id === Number(this.$route.params.id)); 
		}

		getFullName(id: number) {
			const human = this.getHuman(id);
			return human ? `${human.lastName} ${human.firstName} ${human.MiddleName}` : '';
		}

		getHuman(id: number) {
			return this.people.find(item => item.id === id);
		}
	}
</script>

<style>
	#detailsCandidate {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 60px;
	}

</style>
