<template>
	<div id='comments'>
		<div>Comments for candidate {{this.id}}</div>
		<div class='data' v-for="comment in comments" v-bind:key="comment.id">
			<div>{{ users.find(user => user.id === comment.userId) ? users.find(user => user.id === comment.userId).login : 'пользователь удалён' }}</div>
			<div>{{ comment.text }}</div>
			<div>{{ comment.date }}</div>
		</div>
	</div>
</template>

<script>
	import {Data_Comments} from '../../data/comments';
	import {Data_Users} from '../../data/users';


	export default {
		el: '#comments',
		name: 'Comments',
		props: ['id'],
		data() {
			return {
				comments: Data_Comments.filter( comment => comment.candiadteId === Number(this.id)),
				users: Data_Users
			}
		},
		watch: {
    		'id': function(newId) {
				return this.comments = Data_Comments.filter( comment => comment.candiadteId === Number(newId));
			}
		}
	}
</script>
