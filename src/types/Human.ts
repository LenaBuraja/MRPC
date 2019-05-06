export default class Human {
	constructor(
		public id: number,
		public firstName: string,
		public lastName: string,
		public MiddleName: string,
		public positionsID: number,
		public experience?: number,
		public phone?: string,
		public email?: string,
		public pay?: number,
		public skype?: string
	) {}
}
