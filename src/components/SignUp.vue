<template>
  <div id="signin">
    <div>Set password</div>
		<input :type="passwordFieldType ? 'text' : 'password'" v-model="password" />
  		<button @click="switchVisibility">show / hide</button>
		<input :type="repeatPasswordFieldType ? 'text' : 'password'" v-model="repeatPassword" />
  		<button @click="switchVisibility1">show / hide</button>
		<button @click="registration">Set password</button>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component'
import API from '../api';

	@Component({})
	export default class SignUp extends Vue {
		password: string = '';
		repeatPassword: string = '';
		passwordFieldType: boolean = false;
		repeatPasswordFieldType: boolean = false;

		setPassword(event: any) {
   			this.password = event.target.value;
   		}
		registration() {
			console.log(this.password)
			console.log(this.repeatPassword)
			const res = (new API()).set_password(this.$route.query.token as string, this.password);
		}
		switchVisibility() {
			console.log(this.passwordFieldType)
   			this.passwordFieldType = !this.passwordFieldType
   		}
		switchVisibility1() {
			console.log(this.repeatPasswordFieldType)
   			this.repeatPasswordFieldType = !this.repeatPasswordFieldType
   		}
		   
	}
</script>

<style>
	#signin {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
