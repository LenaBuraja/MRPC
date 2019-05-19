<template>
	<div>
		<button v-if="!calledFromList" id="show-modal" @click="showModal = true">Add employee</button>
		<div v-if="calledFromList"><img src="../../assets/img/edit.png" @click="showModal = true" /></div>

		<modal v-if="showModal" @close="showModal = false" class="modal-mask">
			<div class="modal-container">
				<div class="modal-header">custom header</div>
				<div>custom header</div>

					<div id='editEmployee'>
						<div>add employee in database</div>
		        <EditPerson />
						<div>
							<button @click="save">add</button>
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
	export default class AddEmployee extends Vue {
		@State(state => state.employeeState.currEmployee) employee!: Employee
		@Prop(Boolean) readonly calledFromList!: boolean;
		@Prop(Number) readonly id!: Number;

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
			this.$store.dispatch('addEmployee', this.employee);
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
