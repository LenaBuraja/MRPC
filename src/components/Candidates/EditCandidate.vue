<template>
	<div>
		<button id="show-modal" @click="showModal = true">Show Modal</button>

		<modal v-if="showModal" @close="showModal = false" class="modal-mask">
			<div class="modal-container">
				<div class="modal-header">custom header</div>
				<div>custom header</div>

	<div id='addPerson'>
		<div>new pesron in database</div>
		<div>
			<div>Firs name</div>
			<input type="text" v-on:input="setFirstName" />
		</div>
		<div>
			<div>Last name</div>
			<input type="text" v-on:input="setLastName" />
		</div>
		<div>
			<div>Middle name</div>
			<input type="text" v-on:input="setMiddleName" />
		</div>
		<div>
			<div>Phone</div>
			<input type="text" v-on:input="setPhone" />
		</div>
		<div>
			<div>Email</div>
			<input type="text" v-on:input="setEmail" />
		</div>
		<div>
			<div>Position</div>
			<select v-model="position" @change="onChange($event.target.value)">
				<option v-for="pos in positions" :value="pos" :key="pos.id">{{pos.titlePosition}}</option>
			</select>
			<div>{{position}}</div>
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

	@Component({})
	export default class EditCandidate extends Vue {
		@State(state => state.candidateState.currCandidate) candidate!: Candidate

		@State(state => state.dataBase.positions) positions!: Position[];
		position: Position = new Position(0, '');
		showModal: boolean = false

		created() {
		}

		onChange(event: any) {
			const newPosition = this.positions.find(pos => pos.titlePosition === event.value);
			this.position = newPosition === undefined ? this.position : newPosition;
		}
		setEmployId(event: any) {
			this.candidate.employId = event.target.value;
		}
		setTechnicalSpecial(event: any) {
			this.candidate.TechnicalSpecial = event.target.value;
		}
		setstatusId(event: any) {
			this.candidate.statusId = event.target.value;
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
		setdecisionTime(event: any) {
			this.candidate.decisionTime = event.target.value;
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
