import { ActionTree, ActionContext } from 'vuex';
import { RootState } from './types';
import Human from '../types/Human';
import Candidate from '../types/Candidate';
import Employee from '../types/Employee';

const actions = <ActionTree<RootState, any>> {
	auth_me() {

	},
	setPerson(store: ActionContext<RootState, any>, person: Human): void {
		console.log('actions');
		store.commit('setPerson', person);
	},
	setCandidate(store: ActionContext<RootState, any>, candidate: Candidate): void {
		console.log('actions');
		store.commit('setCandidate', candidate);
	},
	setEmployee(store: ActionContext<RootState, any>, employee: Employee): void {
		console.log('actions');
		store.commit('setCandidate', employee);
	}
};

export default actions;
