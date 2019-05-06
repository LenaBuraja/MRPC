<template>
	<div id='detailsCandidate'>
		{{getCandidate()}}
		<div>Details candidate {{ $route.params.id }}</div>
		<div v-if="candidate" class="details">
			<div>
				<div>{{getFullName(candidate.personId)}}</div>
				<div>{{positions.find(position => position.id === getHuman(candidate.personId).positionsID).titlePosition}}</div>
				<div>{{getHuman(candidate.personId).phone}}</div>
				<div>{{getHuman(candidate.personId).experience}}</div>
				<div>{{getHuman(candidate.personId).email}}</div>
				<div>{{getHuman(candidate.personId).pay}}</div>
				<div>{{getHuman(candidate.personId).skype}}</div>

				<div> {{getFullName(candidate.employId)}} </div>
				<div> {{getFullName(candidate.techicalSpecialId)}} </div>
				<div> {{statuses.find(status => status.id === candidate.statusId).titleStatus}} </div>
				<div> {{candidate.ConnectionId ? connections.find(connection => connection.id === candidate.ConnectionId).titleConnection : ''}} </div>
				<div> {{candidate.commingId ? comings.find(coming => coming.id === candidate.commingId).titleComing : ''}} </div>
				<div> {{candidate.dateInterview}} </div>
				<div> {{candidate.decisionTime}} </div>
				<div> {{candidate.AnswerId ? answers.find(answer => answer.id === candidate.AnswerId).titleAnswer : ''}} </div>
				<div> {{candidate.TitleFileCV}} </div>
				<div> {{candidate.TitleFileWS}} </div>
				<div> {{candidate.TitleFileT}} </div>
			</div>
			<Comments :id='candidate.id'></Comments>
		</div>
		<div v-else>Not found</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component'
	import { Watch } from 'vue-property-decorator';

	import {Data_Candidates} from '../../data/candidates';
	import {Data_People} from '../../data/people';
	import {Data_Positions} from '../../data/positions';
	import {Data_Statuses} from '../../data/statuses';
	import {Data_Answers} from '../../data/answers';
	import {Data_Comings} from '../../data/commings';
	import {Data_Connections} from '../../data/connections';
	import Comments from './Comments.vue'

	import Candidate from '../../types/Candidate';
	import Human from '../../types/Human';
	import Position from '../../types/Position';
	import Status from '../../types/Status';
	import Answer from '../../types/Answer';
	import Coming from '../../types/Coming';
	import Connection from '../../types/Connection';

	@Component({
		components: {Comments}
	})
	export default class DetailsCandidate extends Vue {
		candidate: Candidate | undefined;
		people: Human[] = Data_People;
		statuses: Status[] = Data_Statuses;
		positions: Position[] = Data_Positions;
		answers: Answer[] = Data_Answers;
		comings: Coming[] = Data_Comings;
		connections: Connection[] = Data_Connections;

		@Watch('$route.params.id') onCandidateChanged(value: string, oldValue: string) {
			return this.candidate = Data_Candidates.find(item => item.id === Number(value));
		}

		getCandidate() {
			this.candidate = Data_Candidates.find(item => item.id === Number(this.$route.params.id));
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

	.details {
		display: flex;
	}
</style>
