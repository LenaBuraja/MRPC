<template>
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
		</div>
		<button @click="add">Add</button>
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

	@Component({})
	export default class NewPerson extends Vue {
		lastName: string = ''
		firstName: string = ''
		middleName: string = ''
		phone: string = ''
		email: string = ''
		@State(state => state.dataBase.positions) positions!: Position[];
		position: Position = new Position(0, '');

		created() {
			this.position = this.positions[0];
		}

		onChange(event: any) {
			const newPosition = this.positions.find(pos => pos.titlePosition === event.value);
			this.position = newPosition === undefined ? this.position : newPosition;
		}
		setLastName(event: any) {
			this.lastName = event.target.value;
		}
		setFirstName(event: any) {
			this.firstName = event.target.value;
		}
		setMiddleName(event: any) {
			this.middleName = event.target.value;
		}
		setPhone(event: any) {
			this.phone = event.target.value;
		}
		setEmail(event: any) {
			this.email = event.target.value;
		}
		setPosition(event: any) {
			this.position = event.target.value;
		}
		add() {
			console.log(this.lastName)
			console.log(this.firstName)
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
