<template>
	<div id='detailsEmployee'>
		<div>Details employee {{ $route.params.id }}</div>
		<div class="details">
			<div>{{getFullName(employee.personId)}}</div>
			<div>{{positions.find(position => position.id === getHuman(employee.personId).positionsID).titlePosition}}</div>
			<div>{{getHuman(employee.personId).phone}}</div>
			<div>{{getHuman(employee.personId).experience}}</div>
			<div>{{getHuman(employee.personId).email}}</div>
			<div>{{getHuman(employee.personId).pay}}</div>
			<div>{{getHuman(employee.personId).skype}}</div>
			<div>{{employee.dateEnrollment}}</div>
		</div>
	</div>
</template>

<script>
	import {Data_Employees} from '../../data/employees';
	import {Data_People} from '../../data/people';
	import {Data_Positions} from '../../data/positions';

	export default {
		el: '#detailsEmployee',
		name: 'DetailsEmployee',
		data() {
			return {
				employee: Data_Employees.find(item => item.id === Number(this.$route.params.id)),
				people: Data_People,
				positions: Data_Positions
			}
		},
		watch: {
    		'$route.params.id': function(newId) {
				console.log(newId)
				return this.candidate = Data_Employees.find(item => item.id === Number(newId));
			}
		},
		methods: {
			getFullName(id) {
				const human = this.getHuman(id);
				return human ? `${human.lastName} ${human.firstName} ${human.MiddleName}` : '';
			},
			getHuman(id) {
				return this.people.find(item => item.id === id);
			}
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
