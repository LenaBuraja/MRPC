<template>
  <div id="candidates">
  	<div>Candidates</div>
		<div class="data" v-for="candidate in data" v-bind:key="candidate.id">
			<div>{{ candidate.id }}</div>
			<div>{{ getFullName(candidate.personId) }}</div>
			<div>{{ getFullName(candidate.employId) }}</div>
			<div>{{ getFullName(candidate.TechnicalSpecial) }}</div>
			<div>{{ statuses.find(status => status.id === candidate.statusId).titleStatus }}</div>
			<div>{{ positions.find(position => position.id === getHuman(candidate.personId).positionsID).titlePosition }}</div>
			<div>{{ getHuman(candidate.personId).email }}</div>
			<div>{{ getHuman(candidate.personId).experience }}</div>
			<div>{{ getHuman(candidate.personId).pay }}</div>
			<div>{{ candidate.AnswerId ? answers.find(answer => answer.id === candidate.AnswerId).titleAnswer : '' }}</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import {Data_Candidates} from '../../data/candidates';
	import {Data_People} from '../../data/people';
	import {Data_Statuses} from '../../data/statuses';
	import {Data_Positions} from '../../data/positions';
	import {Data_Answers} from '../../data/answers';

	import Candidate from '../../types/Candidate';
	import Human from '../../types/Human';
	import Status from '../../types/Status';
	import Position from '../../types/Position';
	import Answer from '../../types/Answer';

	@Component({})
	export default class ListCandidates extends Vue {
		data: Candidate[] = Data_Candidates;
		people: Human[] = Data_People;
		statuses: Status[] = Data_Statuses;
		positions: Position[] = Data_Positions;
		answers: Answer[] = Data_Answers;

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
	#candidates {
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
</style>
