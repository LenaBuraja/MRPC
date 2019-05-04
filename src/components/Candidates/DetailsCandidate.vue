<template>
	<div id='detailsCandidate'>
		<div>Details candidate {{ $route.params.id }}</div>
		<div class="details">
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
			<comments :id='$route.params.id'></comments>
		</div>
	</div>
</template>

<script>
	import {Data_Candidates} from '../../data/candidates';
	import {Data_People} from '../../data/people';
	import {Data_Positions} from '../../data/positions';
	import {Data_Statuses} from '../../data/statuses';
	import {Data_Answers} from '../../data/answers';
	import {Data_Comings} from '../../data/commings';
	import {Data_Connections} from '../../data/connections';
	import Comments from './Comments.vue'

	export default {
		el: '#detailsCandidate',
		name: 'DetailsCandidate',
		data() {
			return {
				candidate: Data_Candidates.find(item => item.id === Number(this.$route.params.id)),
				people: Data_People,
				statuses: Data_Statuses,
				positions: Data_Positions,
				answers: Data_Answers,
				comings: Data_Comings,
				connections: Data_Connections
			}
		},
		components: {
			'comments': Comments
		},
		watch: {
    		'$route.params.id': function(newId) {
				console.log(newId)
				return this.candidate = Data_Candidates.find(item => item.id === Number(newId));
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

	.details {
		display: flex;
	}
</style>
