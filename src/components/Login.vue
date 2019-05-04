<template>
  <div id="login">
    <div>Login</div>
		<input type="text" v-model="userName" />
		<input :type="passwordFieldType ? 'text' : 'password'" v-model="password" />
  	<button @click="switchVisibility">show / hide</button>
		<button @click="login">Login</button>
	</div>
</template>

<script>
	export default {
		el: '#login',
		name: 'Login',
		data() {
			return {
				userName: '',
				password: '123',
				passwordFieldType: false
			}
		},
		methods: {
			setUserName: function(event){
        this.userName = event.target.value;
      },
			setPassword: function(event){
        this.password = event.target.value;
      },
			login: function(){
				console.log(this.userName)
				console.log(this.password)
			},
			switchVisibility() {
				console.log(this.passwordFieldType)
    	  this.passwordFieldType = !this.passwordFieldType
    	}
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
