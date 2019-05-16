<template>
	<div>
		<button id="show-modal" @click="showModal = true">Edit candidate</button>

		<modal v-if="showModal" @close="showModal = false" class="modal-mask">
			<div class="modal-container">
				<div class="modal-header">custom header</div>
				<div>custom header</div>

					<div id='editeCandidate'>
						<div>edit candidate in database</div>
							<div>Status</div>
							<div>{{getStatusCandidate(candidate.statusId).titleStatus}}</div>
							<button @click="nextStatus">next status: {{getStatusCandidate(candidate.statusId + 1).titleStatus}}</button>
						<div v-if="candidate.statusId === 0">
							<div>HR</div>
							<input type="text" v-on:input="setEmployId" />
						</div>
						<div v-if="candidate.statusId === 2">
							<div>TechnicalSpecial</div>
							<input type="text" v-on:input="setTechnicalSpecial" />
						</div>
						<div v-if="candidate.statusId === 0">
							<div>Connection</div>
							<input type="text" v-on:input="setConnectionId" />
						</div>
						<div v-if="candidate.statusId === 0">
							<div>Coming</div>
							<input type="text" v-on:input="setcommingId" />
						</div>
						<div v-if="candidate.statusId === 3">
							<div>Date interview</div>
							<input type="text" v-on:input="setdateInterview" />
						</div>
						<div v-if="candidate.statusId === 1">
							<div>FileCV</div>
							<input type="text" v-on:input="setTitleFileCV" />
						</div>
						<div v-if="candidate.statusId === 2">
							<div>FileWS</div>
							<input type="text" v-on:input="setTitleFileWS" />
						</div>
						<div v-if="candidate.statusId === 2">
							<div>FileT</div>
							<input type="text" v-on:input="setTitleFileT" />
						</div>
						<div>
							<div>Answer</div>
							<input type="text" v-on:input="setAnswerId" />
						</div>
						<div>
							<button @click="save">Edit</button>
						</div>
					</div>

				</div>
		</modal>
</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { Watch, Prop } from 'vue-property-decorator';
	import { State, Action, Getter } from "vuex-class"
	
	import Comment from '../../types/Comment';
	import User from '../../types/User';
	import Position from '../../types/Position';
	import Human from '../../types/Human';
	import Candidate from '../../types/Candidate';
	import Status from '../../types/Status';

	@Component({})
	export default class EditCandidate extends Vue {
		@State(state => state.candidateState.currCandidate) candidate!: Candidate
		@Getter getStatusCandidate!: (id: number) => Status;

		@State(state => state.dataBase.positions) positions!: Position[];
		position: Position = new Position(0, '');
		showModal: boolean = false

		created() {
			this.getStatusCandidate(this.candidate.statusId);
		}

		onChangePosition(event: any) {
			const newPosition = this.positions.find(pos => pos.titlePosition === event.value);
			this.position = newPosition === undefined ? this.position : newPosition;
		}
		setEmployId(event: any) {
			this.candidate.employId = event.target.value;
		}
		setTechnicalSpecial(event: any) {
			this.candidate.TechnicalSpecial = event.target.value;
		}
		nextStatus() {
			this.candidate.statusId = this.candidate.statusId++;
		}
		setConnectionId(event: any) {
			this.candidate.ConnectionId = event.target.value;
		}
		setcommingId(event: any) {
			this.candidate.commingId = event.target.value;
		}
		setdateInterview(event: any) {
			this.candidate.commingId = event.target.value;
		}
		setAnswerId(event: any) {
			this.candidate.AnswerId = event.target.value;
		}
		setTitleFileCV(event: any) {
			this.candidate.TitleFileCV = event.target.value;
		}
		setTitleFileWS(event: any) {
			this.candidate.TitleFileWS = event.target.value;
		}
		setTitleFileT(event: any) {
			this.candidate.TitleFileT = event.target.value;
		}
		
		setPosition(event: any) {
			this.position = event.target.value;
		}
		save() {
			this.$store.dispatch('editCandidate', this.candidate);
			this.showModal = false
		}
	}
</script>
