<template>
	<div>
		<button v-if="!calledFromList" id="show-modal" @click="showModal = true">Add candidate</button>
		<div v-if="calledFromList"><img src="../../assets/img/edit.png" @click="showModal = true" /></div>

		<modal v-if="showModal" @close="showModal = false" class="modal-mask">
			<div class="modal-container">
				<div class="modal-header">custom header</div>
				<div>custom header</div>

					<div id='editeCandidate'>
						<div>add candidate in database</div>
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
							<button @click="save">Add</button>
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
	export default class AddCandidate extends Vue {
		candidate?: Candidate = undefined
		@Prop(Boolean) readonly calledFromList!: boolean;
		@Prop(Number) readonly id!: Number;
		@Getter getStatusCandidate!: (id: number) => Status;

		@State(state => state.dataBase.positions) positions!: Position[];
		position: Position = new Position(0, '');
		showModal: boolean = false

		created() {
			this.candidate = (this.$store.state.dataBase.candidates! as Candidate[]).find(item => item.id === this.id)
			this.getStatusCandidate(this.candidate!.statusId);
		}

		onChangePosition(event: any) {
			const newPosition = this.positions.find(pos => pos.titlePosition === event.value);
			this.position = newPosition === undefined ? this.position : newPosition;
		}
		setEmployId(event: any) {
			this.candidate!.employId = event.target.value;
		}
		setTechnicalSpecial(event: any) {
			this.candidate!.TechnicalSpecial = event.target.value;
		}
		nextStatus() {
			this.candidate!.statusId = this.candidate!.statusId++;
		}
		setConnectionId(event: any) {
			this.candidate!.ConnectionId = event.target.value;
		}
		setcommingId(event: any) {
			this.candidate!.commingId = event.target.value;
		}
		setdateInterview(event: any) {
			this.candidate!.commingId = event.target.value;
		}
		setAnswerId(event: any) {
			this.candidate!.AnswerId = event.target.value;
		}
		setTitleFileCV(event: any) {
			this.candidate!.TitleFileCV = event.target.value;
		}
		setTitleFileWS(event: any) {
			this.candidate!.TitleFileWS = event.target.value;
		}
		setTitleFileT(event: any) {
			this.candidate!.TitleFileT = event.target.value;
		}
		
		setPosition(event: any) {
			this.position = event.target.value;
		}
		save() {
			this.$store.dispatch('addCandidate', this.candidate);
			this.showModal = false
		}
	}
</script>

<style>
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
</style>
