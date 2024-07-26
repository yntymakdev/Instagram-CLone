namespace AUTH {
	type GetResponse = User;
	type GetRequest = void;

	type PostLoginResponse = {
		accessToken: string;
		accessTokenExpiration: string;
		refreshToken: string;
	};
	type PostLoginRequest = {
		email: string;
		password: string;
	};

	type PostRegisterResponse = {
		message: string;
		accessToken: string;
		accessTokenExpiration: string;
		refreshToken: string;
	};
	type PostRegisterRequest = {
		email: string;
		username: string;
		photo: string;
		password: string;
	};

	type PostForgotResponse = {
		message: string;
	};
	type PostForgotRequest = {
		email: string;
		frontEndUrl: string;
	};

	type PatchResetPasswordResponse = {
		message: string;
	};
	type PatchResetPasswordRequest = {
		token: string;
		newPassword: string;
	};

	type PatchRefreshResponse = {
		accessToken: string;
		accessTokenExpiration: string;
		refreshToken: string;
	};
	type PatchRefreshRequest = {
		refreshToken: string;
	};
}
