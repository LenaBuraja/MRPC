export default class User {
	constructor(
		public id: number,
		public employeeId: number,
		public login: string,
		public password: string,
		public dateRegistration: string,
		public activationCode: string,
		public email: string,
		public isEmailVerified: boolean,
		public rememberMe: boolean
	) {}
}
