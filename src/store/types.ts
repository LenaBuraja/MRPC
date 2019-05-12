import User from "../types/User";
import Human from "../types/Human";
import Employee from "../types/Employee";
import Candidate from "../types/Candidate";
import Answer from "../types/Answer";
import Comment from "../types/Comment";
import Status from "../types/Status";
import Position from "../types/Position";
import Coming from "../types/Coming";
import Connection from "../types/Connection";

export interface IDataBase {
	users: User[],
	people: Human[],
	employees: Employee[],
	candidates: Candidate[],
	answers: Answer[],
	positions: Position[],
	comments: Comment[],
	statuses: Status[],
	comings: Coming[],
	connections: Connection[]
}

export interface RootState {
	dataBase: IDataBase,
	userState: {
		currUser: User | undefined
	},
	employeeState: {
		currEmployee: Employee | undefined
	},
	candidateState: {
		currCandidate: Candidate | undefined
	}
}
/*
export interface RootState {
	dataState: IBaseState
}
*/