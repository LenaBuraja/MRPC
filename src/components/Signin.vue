<template>
  <div id="signin">
    <div>Login</div>
		<input type="text" v-model="userName" />
		<input :type="passwordFieldType ? 'text' : 'password'" v-model="password" />
  		<button @click="switchVisibility">show / hide</button>
		<input :type="repeatPasswordFieldType ? 'text' : 'password'" v-model="repeatPassword" />
  		<button @click="switchVisibility1">show / hide</button>
		<button @click="registration">Login</button>
	</div>
</template>

<script>
	export default {
		el: '#signin',
		name: 'Signin',
		data() {
			return {
				userName: '',
				password: '',
				repeatPassword: '',
				passwordFieldType: false,
				repeatPasswordFieldType: false
			}
		},
		methods: {
			setUserName: function(event){
      			this.userName = event.target.value;
      		},
			setPassword: function(event){
    			this.password = event.target.value;
    		},
			registration: function(){
				console.log(this.userName)
				console.log(this.password)
				console.log(this.repeatPassword)
			},
			switchVisibility() {
				console.log(this.passwordFieldType)
    			this.passwordFieldType = !this.passwordFieldType
    		},
			switchVisibility1() {
				console.log(this.repeatPasswordFieldType)
    		  this.repeatPasswordFieldType = !this.repeatPasswordFieldType
    		}
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
