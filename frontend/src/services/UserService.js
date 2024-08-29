import { BASE_API_URL } from './api';

export default class UserService {
	constructor(apiUrl = BASE_API_URL) {
		this.apiUrl = apiUrl;
	}
	async getUserProfile(token) {
		try {
			const requestGetUserProfile = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token,
				},
			};

			const getUserProfile = await fetch(this.apiUrl + 'user/profile', requestGetUserProfile)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Get user profil failed');
					}
					return response.json();
				})
				.then((data) => data.body)
				.catch((error) => error);
			return getUserProfile;
		} catch (error) {
			console.log(error);
			return Promise.reject("Server error : can't get user profil");
		}
	}

	async updateUserProfile(token, userName, firstName, lastName) {
		try {
			const requestUpdateUserProfile = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token,
				},
				body: JSON.stringify({
					userName: userName,
					firstName: firstName,
					lastName: lastName,
				}),
			};
			const updateUserProfile = await fetch(this.apiUrl + 'user/profile', requestUpdateUserProfile)
				.then((response) => {
					if (!response.ok) {
						throw new Error('update user profil failed');
					}
					return response.json();
				})
				.then((data) => data.body)
				.catch((error) => error);
			return updateUserProfile;
		} catch (error) {
			console.log(error);
			return Promise.reject("Server error : can't update user profil");
		}
	}
}
