<template>
  <div id="login">
    <div>Login</div>
		<input type="text" v-model="userName" />
		<input :type="passwordFieldType ? 'text' : 'password'" v-model="password" />
  	<button @click="switchVisibility">show / hide</button>
		<button @click="login">Login</button>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component'

	@Component({})
	export default class Login extends Vue {
		userName: string = '';
		password: string = '';
		passwordFieldType: boolean = false;

		setUserName(event: any) {
      this.userName = event.target.value;
    }
		setPassword(event: any) {
      this.password = event.target.value;
    }
		login() {
			console.log(this.userName)
			console.log(this.password)
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
