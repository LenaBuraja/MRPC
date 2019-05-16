import { MutationTree } from "vuex";
import { RootState } from "./types";
import Human from "../types/Human";

const mutations = <MutationTree<RootState>> {
    setPerson(state: RootState, person: Human) {
		console.log('mutations')
        state.personState.currPerson = person;
    },
};

export default mutations;