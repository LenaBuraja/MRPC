import Axios from 'axios';

const ADDRESS = 'http://localhost:3649/';
const ADDRESS_AUTH = `${ADDRESS}api/auth/`;
const ADDRESS_USERS = `${ADDRESS}users/`;
const ADDRESS_STATIC = `${ADDRESS}static/`;
	

export default class API {
	async auth_me() {
		let data = await
		Axios.get(`${ADDRESS_AUTH}me`) 
			.then(response => { 
				console.log(response.data);
				return response.data;
			}) 
			.catch(e => { 
				console.log(e) 
			});
		console.log(data)
		return data;	//User | null
	}

	async sign_in() {
		let data = await Axios.post(`${ADDRESS_AUTH}sign-in`)
		.then(response => { 
			console.log(response.data);
			return response.data;
		}) 
		.catch(e => { 
			console.log(e) 
		});
		console.log(data)
		return data;	//User | null
	}

	async set_password(token: string, password: string) {
		let {data} = await Axios.post(`${ADDRESS_AUTH}sign-in`, { 'token': token, 'pass': password });
		return data;	//User | null
	}

	async grand_access(employee: number) {
		let {data} = await Axios.post(`${ADDRESS_USERS}grand-access`, { 'emp_id': employee });
		return data;	//User | null
	}

}
