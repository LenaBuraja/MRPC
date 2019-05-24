<template>
	<div id='detailsCandidate'>
		{{getCandidate()}}
		<div v-if="candidate" class="details">
			<div>
				<div>Details candidate {{ $route.params.id }}</div>
				<EditPerson :calledFromList="false"/>
				<EditCandidate :calledFromList="false" :id="candidate.id"/>
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
	import { State, Action, Getter } from "vuex-class"


	import {Data_Candidates} from '../../data/candidates';
	import Comments from './Comments.vue'
	import EditCandidate from './EditCandidate.vue'
	import EditPerson from '../People/EditPerson.vue'

	import Candidate from '../../types/Candidate';
	import Human from '../../types/Human';
	import Position from '../../types/Position';
	import Status from '../../types/Status';
	import Answer from '../../types/Answer';
	import Coming from '../../types/Coming';
	import Connection from '../../types/Connection';

	@Component({
		components: {Comments, EditPerson, EditCandidate}
	})
	export default class DetailsCandidate extends Vue {
		@State(state => state.dataBase.candidates) candidates!: Candidate[];
		@State(state => state.dataBase.statuses) statuses!: Status[];
		@State(state => state.dataBase.people) people!: Human[];
		@State(state => state.dataBase.positions) positions!: Position[];
		@State(state => state.dataBase.answers) answers!: Answer[];
		@State(state => state.dataBase.comings) comings!: Coming[];
		@State(state => state.dataBase.connections) connections!: Connection[];

		showModal: boolean = false;
		candidate?: Candidate;

		created() {
			this.$store.dispatch('setCandidate', this.candidate);
		}

		@Watch('$route.params.id') onCandidateChanged(value: string, oldValue: string) {
			this.$store.dispatch('setCandidate', Data_Candidates.find(item => item.id === Number(value)));
			return this.candidate = Data_Candidates.find(item => item.id === Number(value));
		}

		getCandidate() {
			this.candidate = Data_Candidates.find(item => item.id === Number(this.$route.params.id));
			this.$store.dispatch('setCandidate', this.candidate);
		}

		getFullName(id: number) {
			const human = this.getHuman(id);
			return human ? `${human.lastName} ${human.firstName} ${human.MiddleName}` : '';
		}
		getHuman(id: number) {
			return this.people.find(item => item.id === id);
		}
		saveChangeHuman() {
			
			this.showModal = false;
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

	.details > * {
		flex-grow: 1;
	}

	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
    	display: flex;
		transition: opacity .3s ease;
		align-items: center;
		align-content: center; 
		justify-content: center; 
		overflow: auto;  
	}

	.modal-container {
		width: 300px;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: Helvetica, Arial, sans-serif;
		display: block;
        border: none;
	}

	.modal-header {
		margin-top: 0;
		color: #42b983;
	}

	.activeButton {
		color: #c2deec;
		background-color: #6199be;
		border: 1px solid #44434b;
		border-radius: 8px;
	}
	
	.inactiveButton {
		color: #c2deec;
		background-color: #594f57;
		border: 1px solid #44434b;
		border-radius: 8px;
	}
</style>
