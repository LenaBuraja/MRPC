<template>
  <div id="candidates">
  	<div>Candidates</div>
		<table width="100%">
			<tr>
				<th></th>
				<th>ФИО кандадата</th>
				<th>ФИО HR</th>
				<th>ФИО тех. спец.</th>
				<th>Статус</th>
				<th>Позиция</th>
				<th>Email</th>
				<th>Опыт</th>
				<th>З/П</th>
				<th>Ответ</th>
			</tr>
			<tr v-for="candidate in candidates" v-bind:key="candidate.id">
				<td class="td_links">
					<router-link :to="`/DetailsCandidate/${candidate.id}`"><img src="../../assets/img/view.jpg" /></router-link>
					<EditCandidate :calledFromList="true" :id="+candidate.id"/>
				</td>
				<td>{{ getFullName(candidate.personId) }}</td>
				<td>{{ getFullName(candidate.employId) }}</td>
				<td>{{ getFullName(candidate.TechnicalSpecial) }}</td>
				<td>{{ statuses.find(status => status.id === candidate.statusId).titleStatus }}</td>
				<td>{{ positions.find(position => position.id === getHuman(candidate.personId).positionsID).titlePosition }}</td>
				<td>{{ getHuman(candidate.personId).email }}</td>
				<td>{{ getHuman(candidate.personId).experience }}</td>
				<td>{{ getHuman(candidate.personId).pay }}</td>
				<td>{{ candidate.AnswerId ? answers.find(answer => answer.id === candidate.AnswerId).titleAnswer : '' }}</td>
			</tr>
		</table>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import { State, Action, Getter } from "vuex-class"

	import Candidate from '../../types/Candidate';
	import Human from '../../types/Human';
	import Status from '../../types/Status';
	import Position from '../../types/Position';
	import Answer from '../../types/Answer';
	import EditCandidate from './EditCandidate.vue'

	@Component({
		components: { EditCandidate}
	})
	export default class ListCandidates extends Vue {
		@State(state => state.dataBase.candidates) candidates!: Candidate[];
		@State(state => state.dataBase.statuses) statuses!: Status[];
		@State(state => state.dataBase.people) people!: Human[];
		@State(state => state.dataBase.positions) positions!: Position[];
		@State(state => state.dataBase.answers) answers!: Answer[];

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

	.td_links {
		display: flex;
	}

	img {
		width: 30px;
		height: 30px;
	}
</style>
