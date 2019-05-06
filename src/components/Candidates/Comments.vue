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

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { Watch, Prop } from 'vue-property-decorator';

	import {Data_Comments} from '../../data/comments';
	import {Data_Users} from '../../data/users';
	
	import Comment from '../../types/Comment';
	import User from '../../types/User';

	@Component({})
	export default class Comments extends Vue {
		@Prop(Number) readonly id!: number;
		comments: Comment[] = Data_Comments.filter( comment => comment.candiadteId === Number(this.id));
		users: User[] = Data_Users
		
		@Watch('id') onCandidateIdChanged(value: number, oldValue: number) {
			console.log(value)
			return this.comments = Data_Comments.filter( comment => comment.candiadteId === value);
		}
	}
</script>
