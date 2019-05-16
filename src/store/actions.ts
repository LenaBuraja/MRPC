import { ActionTree, ActionContext } from 'vuex';
import { RootState } from './types';
import Human from '../types/Human';

const actions = <ActionTree<RootState, any>> {
	auth_me() {

	},
	setPerson(store: ActionContext<RootState, any>, person: Human): void {
		//let {data} = await Axios.get(ADDRESS);
		console.log('actions');
		store.commit('setPerson', person);
	}
/*
    inc(store: ActionContext<RootState, any>, amount: number) {
        store.commit('inc', amount)
    }*/
};

export default actions;
