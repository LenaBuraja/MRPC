<template>
	<div>
		<div id='comments'>
			<div>Comments for candidate {{this.id}}</div>
			<div class='data' v-for="comment in comments(this.id)" v-bind:key="comment.id">
				<div>{{ users.find(user => user.id === comment.userId) ? users.find(user => user.id === comment.userId).login : 'пользователь удалён' }}</div>
				<div class="group">
					<div>{{ comment.text }}</div>
					<div>{{ comment.date }}</div>
				</div>
			</div>
		</div>
		<div>
			<input type="text" v-model="newComment" />
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
