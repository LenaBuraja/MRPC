<template>
  <div id="sign_in">
    <div>Login</div>
		<input type="text" v-model="userName" />
		<input :type="passwordFieldType ? 'text' : 'password'" v-model="password" />
  	<button @click="switchVisibility">show / hide</button>
		<button @click="sign_in">Login</button>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component'
	import API from '../api'
	import axios from 'axios'
	import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

	@Component({})
	export default class SignIn extends Vue {
		userName: string = '';
		password: string = '';
		passwordFieldType: boolean = false;

		setUserName(event: any) {
      this.userName = event.target.value;
    }
		setPassword(event: any) {
      this.password = event.target.value;
    }
		sign_in() {
			console.log(this.userName);
			console.log(this.password);

			let data = (new API()).sign_in();
			console.log(data)
		}
		switchVisibility() {
			console.log(this.passwordFieldType)
      this.passwordFieldType = !this.passwordFieldType
    }
	}
</script>

<style>
	#login {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
