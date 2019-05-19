import { MutationTree } from "vuex";
import { RootState } from "./types";
import Human from "../types/Human";
import Candidate from '../types/Candidate';
import Employee from '../types/Employee';

const mutations = <MutationTree<RootState>> {
    setPerson(state: RootState, person: Human) {
		console.log('mutations')
        state.personState.currPerson = person;
    },
    setCandidate(state: RootState, candidate: Candidate) {
		console.log('mutations setCandidate')
        state.candidateState.currCandidate = candidate;
    },
    setEmployee(state: RootState, employee: Employee) {
		console.log('mutations')
        state.employeeState.currEmployee = employee;
    },
};

export default mutations;