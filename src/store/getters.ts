import { GetterTree } from 'vuex';

import store from './index';
import User from '../types/User';
import { RootState } from './types';

// GetterTree<[current state], [root state]>
const getters: GetterTree<RootState, RootState> = {

	users(state: RootState): User[] {
		return state.dataBase.users;
	},

	comments: (state: RootState, getters) => (id: number) => {
		return state.dataBase.comments.filter( comment => comment.candiadteId === id);
	},

	getCandidateById: (state: RootState, getters) => (id: number) => {
		return state.dataBase.candidates.find(item => item.id === id);
	},

	getEmployeeById: (state: RootState, getters) => (id: number) => {
		return state.dataBase.employees.find(item => item.id === id);
	},

	getCHumanById: (state: RootState, getters) => (id: number) => {
		return state.dataBase.people.find(item => item.id === id);
	},

	getUserById: (state: RootState, getters) => (id: number) => {
		return state.dataBase.users.find(item => item.id === id);
	},

	getStatusCandidate: (state: RootState, getters) => (id: number) => {
		return state.dataBase.statuses.find(item => item.id === id);
	}
};

export default getters;