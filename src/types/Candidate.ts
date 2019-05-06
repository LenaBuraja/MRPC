export default class Candidate {
	constructor(
		public id: number,
		public personId: number,
		public employId: number,
		public statusId: number,
		public ConnectionId: number,
		public commingId: number,
		public TechnicalSpecial?: number,
		public dateInterview?: string,
		public decisionTime?: number,
		public AnswerId?: number,
		public TitleFileCV?: string,
		public TitleFileWS?: string,
		public TitleFileT?: string
	){}
}
