<template>
	<div>
		<button id="show-modal" @click="showModal = true">Edit candidate</button>

		<modal v-if="showModal" @close="showModal = false" class="modal-mask">
			<div class="modal-container">
				<div class="modal-header">custom header</div>
				<div>custom header</div>

					<div id='editEmployee'>
						<div>edit employee in database</div>
		        <EditPerson />
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
	import Status from '../../types/Status';
import Employee from '../../types/Employee';

	@Component({})
	export default class EditEmployee extends Vue {
		@State(state => state.employeeState.currEmployee) employee!: Employee

		@State(state => state.dataBase.positions) positions!: Position[];
		position: Position = new Position(0, '');
		showModal: boolean = false

		setWage(event: any) {
			this.employee;
		}
	
		
		setPosition(event: any) {
			this.position = event.target.value;
		}
		save() {
			this.$store.dispatch('editEmployee', this.employee);
			this.showModal = false
		}
	}
</script>
