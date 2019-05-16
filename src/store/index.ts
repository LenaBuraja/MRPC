import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {RootState, IDataBase} from './types'
import { Data_Users } from '../data/users';
import {Data_Candidates} from '../data/candidates';
import {Data_Employees} from '../data/employees';
import {Data_People} from '../data/people';
import {Data_Positions} from '../data/positions';
import {Data_Statuses} from '../data/statuses';
import {Data_Answers} from '../data/answers';
import {Data_Comings} from '../data/commings';
import {Data_Comments} from '../data/comments';
import {Data_Connections} from '../data/connections';
import User from '../types/User';
import Human from '../types/Human';
import Employee from '../types/Employee';
import Candidate from '../types/Candidate';
import Answer from '../types/Answer';
import Position from '../types/Position';
import Comment from '../types/Comment';
import Status from '../types/Status';
import Coming from '../types/Coming';
import Connection from '../types/Connection';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

const store = new Vuex.Store<RootState>({
    state: {
			dataBase: {
				users: Data_Users as User[],
				people: Data_People as Human[],
				employees: Data_Employees as Employee[],
				candidates: Data_Candidates as Candidate[],
				answers: Data_Answers as Answer[],
				positions: Data_Positions as Position[],
				comments: Data_Comments as Comment[],
				statuses: Data_Statuses as Status[],
				comings: Data_Comings as Coming[],
				connections: Data_Connections as Connection[]
			},
			userState: {
				currUser: undefined
			},
			employeeState: {
				currEmployee: undefined
			},
			candidateState: {
				currCandidate: undefined
			},
			personState: {
				currPerson: undefined
			}
		},
		getters,
		actions,
		mutations
});

export default store;
