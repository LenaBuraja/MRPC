<template>
	<div>
		<div id='comments'>
			<div>Comments for candidate {{this.id}}</div>
			<div class='data' v-for="comment in comments(this.id)" v-bind:key="comment.id">
				<div :class="{currUser: comment.userId === 1, otherUser: comment.userId !== 1}">
					<div>{{ users.find(user => user.id === comment.userId) ? users.find(user => user.id === comment.userId).login : 'пользователь удалён' }}</div>
					<div class="group">
						<div>{{ comment.text }}</div>
						<div>{{ comment.date }}</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<textarea v-model="newComment" class="inputComment"></textarea>
			<button @click="sendComment">Send</button>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { Watch, Prop } from 'vue-property-decorator';
	import { State, Action, Getter } from "vuex-class"
	
	import Comment from '../../types/Comment';
	import User from '../../types/User';

	@Component({})
	export default class Comments extends Vue {
		@Prop(Number) readonly id!: number;

		@Getter comments!: (id: number) => Comment[];
		@State(state => state.dataBase.users) users!: User[];

		newComment: string = ''

		created() {
			this.comments(this.id);
		}
		
		@Watch('id') onCandidateIdChanged(value: number, oldValue: number) {
			return this.comments(Number(value));
		}

		sendComment(event: any) {
     		this.newComment = event.target.value;
		}
	}
</script>

<style>
	.currUser, .otherUser {
		margin: 5px;
	}

	.currUser {
		color: #703f28;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}

	.otherUser {
		color: #352870;
		display: flex;
		align-items: flex-end;
		flex-direction: column;
	}

	.group {
		width: 480px;
		border: 0.5px solid #2c3e50;
		border-radius: 8px;
		background-color: #c2deec;
	}

	.inputComment {
		width: 500px;
		height: 50px;
		resize: none;
	}
</style>
